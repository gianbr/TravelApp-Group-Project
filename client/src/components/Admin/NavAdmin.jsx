import {
    alpha,
    AppBar,
    Avatar,
    Badge,
    InputBase,
    makeStyles,
    Toolbar,
    Typography,
  } from "@material-ui/core";
  import { useState } from "react";
  
  const useStyles = makeStyles((theme) => ({
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
    },
    logoLg: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
    logoSm: {
      display: "block",
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    input: {
      color: "white",
      marginLeft: theme.spacing(1),
    },
    cancel: {
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },

    icons: {
      alignItems: "center",
      display: (props) => (props.open ? "none" : "flex"),
    },
    badge: {
      marginRight: theme.spacing(2),
    },
  }));
  
  const NavAdmin = () => {
    const [open, setOpen] = useState(false);
    const classes = useStyles({ open });
    return (
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.logoLg}>
            Panel de control
          </Typography>
          <div className={classes.icons}>
            <Avatar
              alt="Admin"
              src="https://www.pexels.com/photo/woman-taking-picture-using-camera-610294/?auto=compress&cs=tinysrgb&dpr=2&w=500"
            />
          </div>
        </Toolbar>
      </AppBar>
    );
  };
  
  export default NavAdmin;