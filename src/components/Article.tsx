import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import OpenInNew from "@material-ui/icons/OpenInNew";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { openUrl } from "../util";
import styles from "../pages/styles.module.css";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    minWidth: 345,
    marginBottom: 20,
    marginRight: 10,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export const Articles = ({ items, flowable }: any) => {
  let style = {};
  if (flowable)
    style = {
      overflow: "auto",
      flexWrap: "nowrap",
      justifyContent: "flex-start",
    };
  return (
    <div className={styles.features} style={style}>
      {items.map((item, index) => {
        return <Article {...item} key={index} />;
      })}
    </div>
  );
};
export default function Article(item: any) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card className={classes.root} key={item.key}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {item.title.charAt(0)}
          </Avatar>
        }
        title={item.title}
        subheader={item.createdAt || new Date().toLocaleString("en-US")}
        action={
          <IconButton
            aria-label="settings"
            onClick={() => window.open(item.href, "_blank")}
          >
            <OpenInNew />
          </IconButton>
        }
      />
      <CardMedia
        className={classes.media}
        image={item.imageUrl}
        title={item.title}
      />
      {item.body && (
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {item.body.slice(0, 140)}
          </Typography>
        </CardContent>
      )}

      <CardActions disableSpacing>
        <IconButton
          aria-label="add to favorites"
          onClick={() => openUrl(item.href)}
        >
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share" onClick={() => openUrl(item.href)}>
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          {item.body && <ExpandMoreIcon />}
        </IconButton>
      </CardActions>
      {item.body && (
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>{item.body}</Typography>
          </CardContent>
        </Collapse>
      )}
    </Card>
  );
}
