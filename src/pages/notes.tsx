import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import {
  TextField,
  Button,
  MenuItem,
} from "@material-ui/core";
import Layout from "@theme/Layout";
import React, { useState } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import styled, { ThemeProvider } from "styled-components";
import { Articles } from "../components/Article";
import theme from "../components/theme";
import useInitApp, { useFetchRecords } from "../hooks/useFirebaseDB";

const Main = styled.main``;
const Section = styled.section`
  padding: 20px 40px;
`;
const Header = styled.h2``;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 800px;
  * {
    margin-bottom: 10px;
  }
`;
const types = ["poem", "feature", "blog", "other"];
function Notes() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const [note, setNote] = useState<any>({});
  const [enbaleEdit, setEnableEdit] = useState(false);
  const [formatJSON, toggleFormat] = useState(false);
  useInitApp();
  const notes = useFetchRecords("notes");
  const onSave = () => {
    if (note.title) {
      const date = new Date();
      firebase
        .database()
        .ref("notes/" + date.getTime())
        .set({ ...note, createdAt: date.toISOString() });
    }
  };
  const handleChange = (id: string, data: string) => {
    setNote({ ...note, [id]: data });
  };
  return (
    <ThemeProvider theme={theme}>
      <Layout title={siteConfig.title} description={siteConfig.tagline}>
        <Main>
          <Section>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => setEnableEdit(!enbaleEdit)}
            >
              Toggle Edit
            </Button>
          </Section>
          {enbaleEdit && (
            <Section>
              <Header>Add Notes</Header>
              <TextField
                id="json"
                label="JSON"
                multiline
                rowsMax={10}
                value={JSON.stringify(note, null, 2)}
                onChange={(event) => setNote(JSON.parse(event.target.value))}
                variant="outlined"
              />
              <Form noValidate autoComplete="off">
                <TextField
                  required
                  id="title"
                  error={!note.title}
                  label="Title"
                  value={note.title}
                  onChange={(event) =>
                    handleChange("title", event.target.value)
                  }
                />
                <TextField
                  id="type"
                  select
                  error={!note.type}
                  label="type"
                  value={note.type}
                  helperText="Please select type"
                  onChange={(event) => handleChange("type", event.target.value)}
                >
                  {types.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  id="body"
                  error={!note.body}
                  label="Body"
                  multiline
                  rowsMax={10}
                  value={note.body}
                  onChange={(event) => handleChange("body", event.target.value)}
                  variant="outlined"
                />
                <TextField
                  id="media"
                  error={!note.media}
                  label="Media"
                  value={note.media}
                  onChange={(event) =>
                    handleChange("media", event.target.value)
                  }
                />
                <TextField
                  id="href"
                  error={!note.href}
                  label="HREF"
                  value={note.href}
                  onChange={(event) => handleChange("href", event.target.value)}
                />
                <Button variant="contained" color="primary" onClick={onSave}>
                  Save
                </Button>
              </Form>
            </Section>
          )}
          <Section>
            <Articles items={notes} flowable />
          </Section>
        </Main>
      </Layout>
    </ThemeProvider>
  );
}

export default Notes;
