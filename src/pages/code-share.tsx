import {
  FormControl,
  makeStyles,
  MenuItem,
  Select,
  Button,
} from "@material-ui/core";
import ShareIcon from "@material-ui/icons/Share";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";

import React, { useEffect, useRef } from "react";
import { Price, Temperature } from "../components/calculators";
import { SubTitle, CalcContainer } from "../components/Typograpgy";
import styled from "styled-components";
import { shuffle, debounce } from "@deepakvishwakarma/ts-util";
import useInitApp, {
  useFetchRecords,
  useFetchRecord,
} from "../hooks/useFirebaseDB";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    maxWidth: 400,
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
  },
}));
const EditorContainer = styled.div`
  height: 100vh;
  padding: 0px 20px;
`;
const Editor = styled.div`
  width: 100%;
  height: 100%;
`;
const Controls = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: flex-end;
`;
const getRandomId = () => {
  const d = Date.now() % 77777777777;
  return `${shuffle(
    String(d)
      .split("")
      .map((x) => String.fromCharCode(65 + Number(x)))
  ).join("")}-${d}`;
};
const Calculators = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const params = new URLSearchParams(window.location.search);
  const [codeId, setCodeId] = React.useState(params.get("id") || "");
  const [codeData, setCodeSnippet] = React.useState({
    shareId: "",
    data: `function main() {
    console.log("Hello JS");
}`,
  });
  useInitApp();
  let editor: any;
  const updateDataBase = debounce((codeData, codeId, value) => {
    firebase
      .database()
      .ref("codes/" + codeId)
      .set({
        shareId: codeId,
        createdAt: Date.now(),
        ...codeData,
        data: value,
        updatedAt: Date.now(),
      });
  }, 400);
  useEffect(() => {
    setTimeout(() => {
      const ace = (window as any).ace;
      editor = ace.edit("editor");
      editor.setTheme("ace/theme/dracula");
      editor.session.setMode("ace/mode/javascript");
      editor.session.on("change", function (delta) {
        console.log("editor.getValue()", codeId);
        if (codeId) {
          updateDataBase(codeData, codeId, editor.getValue());
        }
      });
    }, 200);
  }, [codeId]);
  const updatedData = useFetchRecord("codes", codeId);
  useEffect(() => {
    const updateEditor = () => {
      editor && editor.resize();
    };
    window.addEventListener("resize", updateEditor);
    return () => {
      window.removeEventListener("resize", updateEditor);
    };
  }, []);
  useEffect(() => {
    setTimeout(() => {
      console.log(2, updatedData.data);
      editor && codeData.data && editor.session.setValue(updatedData.data); // set value and reset undo history
    }, 250);
    setCodeSnippet(updatedData);
  }, [updatedData]);

  const onShare = () => {
    setCodeId(getRandomId());
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    navigator.clipboard.writeText(
      "https://decipher.dev/code-share/?id=" + codeId
    );
    setOpen(false);
  };
  return (
    <>
      <Head>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.6/require.min.js"
          integrity="sha512-c3Nl8+7g4LMSTdrm621y7kf9v3SDPnhxLNhcjFJbKECVnmZHTdo+IRO05sNLTH/D3vA6u1X32ehoLC7WFVdheg=="
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.12/ace.js"
          integrity="sha512-GZ1RIgZaSc8rnco/8CXfRdCpDxRCphenIiZ2ztLy3XQfCbQUSCuk8IudvNHxkRA3oUg6q0qejgN/qqyG1duv5Q=="
          crossorigin="anonymous"
        ></script>
      </Head>
      <Layout title="CODE SHARE" description="CODE Sharing Tool | Decipher.dev">
        <Controls>
          <Button
            disabled={!!codeId}
            variant="contained"
            color="primary"
            startIcon={<ShareIcon />}
            onClick={onShare}
          >
            Share
          </Button>
        </Controls>
        <EditorContainer>
          <Editor id="editor" />
        </EditorContainer>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message={`Share code: ${codeId}`}
          action={
            <>
              <Button color="secondary" size="small" onClick={handleClose}>
                Copy
              </Button>
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </>
          }
        />
      </Layout>
    </>
  );
};
export default Calculators;
