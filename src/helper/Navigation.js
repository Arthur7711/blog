import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import AssignmentIcon from "@material-ui/icons/Assignment";
import ChatIcon from "@material-ui/icons/Chat";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    maxWidth: 360,
    backgroundColor: "#3f51b5",
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  item: {
    display: "flex",
    justifyContent: "center",
  },
}));

export default function NestedList() {
  const classes = useStyles();
  // const [open, setOpen] = React.useState(true);

  // const handleClick = () => {
  //   setOpen(!open);
  // };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      <ListItem button >
        <Link to="/" className={classes.item}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </Link>
      </ListItem>
      <ListItem button>
        <Link to="/call-list" className={classes.item}>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="List" />
        </Link>
      </ListItem>
      <ListItem button>
        <Link to="/notes" className={classes.item}>
          <ListItemIcon>
            <ChatIcon />
          </ListItemIcon>
          <ListItemText primary="Notes" />
        </Link>
        {/* {open ? <ExpandLess /> : <ExpandMore />} */}
      </ListItem>
      {/* <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItem>
        </List>
      </Collapse> */}
    </List>
  );
}
