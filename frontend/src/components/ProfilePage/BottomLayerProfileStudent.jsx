import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Grid } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import "./BottomLayerProfileTutor.scss";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  box: {
    width: "40%",
    height: "40%",
    borderRadius: "10%",
  },
  padding: {
    padding: "5%",
    fontFamily: "Lora",
    fontSize: "1rem",
  },
}));

export default function BottomLayerProfileStudent(props) {
  const {
    name,
    email,
    password,
    post_code,
    province,
    city,
    street,
  } = props.user.user;

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid className={classes.root}>
      <Grid
        item
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        {/* <Fab
          href="/editprofile"
          color="secondary"
          aria-label="edit"
          style={{ marginBottom: "3%" }}
        >
          <EditIcon />
        </Fab> */}
      </Grid>
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab label="Personal details" href="/trash" {...a11yProps(0)} />
          <LinkTab label="Address" href="/spam" {...a11yProps(1)} />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0}>
        <Grid container direction="column" justify="center" alignItems="center">
          <Paper className={classes.box}>
            <p className={classes.padding}>
              <strong>Full name:</strong> {name}
            </p>
            <p className={classes.padding}>
              <strong>Email: </strong>
              {email}
            </p>
            <p className={classes.padding}>
              <strong>Password: </strong>
              {password}
            </p>
          </Paper>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid container direction="column" justify="center" alignItems="center">
          <Paper className={classes.box}>
            <p className={classes.padding}>
              <strong>Province:</strong> {province}
            </p>
            <p className={classes.padding}>
              <strong>City:</strong> {city}
            </p>
            <p className={classes.padding}>
              <strong>Street:</strong> {street}
            </p>
            <p className={classes.padding}>
              <strong>Post code:</strong> {post_code}
            </p>
          </Paper>
        </Grid>
      </TabPanel>
    </Grid>
  );
}
