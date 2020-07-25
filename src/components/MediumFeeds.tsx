import React, { useEffect } from "react";
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
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import OpenInNew from "@material-ui/icons/OpenInNew";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { pad } from "@deepakvishwakarma/ts-util";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 345,
    minHeight: 280,
    marginRight: 10,
    [theme.breakpoints.up('md')]: {
      maxWidth: 345,
    },
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
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    padding: 12,
  },
  gridList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
  },
}));

const Mediumfeeds = (props: any) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [feeds, setFeeds] = React.useState([]);
  useEffect(() => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@deepak_v"
    )
      .then((res) => res.json())
      .then((m: any) => {
        setFeeds(m.items.filter((i: any) => i.categories.length));
      });
  }, []);
  console.log(feeds);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2.5}>
        {feeds.map((feed, index) => (
          <GridListTile key={index} className={classes.card}>
            <Card className={classes.card}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    {feed.title.charAt(0)}
                  </Avatar>
                }
                action={
                  <IconButton
                    aria-label="settings"
                    onClick={() => window.open(feed.guid, "_blank")}
                  >
                    <OpenInNew />
                  </IconButton>
                }
                className={classes.header}
                title={pad(String(feed.title), 200, "", " ")}
                subheader={new Date(...feed.pubDate.split(/[- :]/g).map(Number)).toLocaleString("en-US")}
              />
              <CardMedia
                className={classes.media}
                image={feed.thumbnail}
                title={feed.title}
                onClick={() => window.open(feed.guid, "_blank")}
              />
              <CardContent>
                {/* <Typography variant="body2" color="textSecondary" component="p" dangerouslySetInnerHTML={{__html:feed.description.slice(0, 400) }}>
                
                </Typography> */}
              </CardContent>
            </Card>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default Mediumfeeds;
