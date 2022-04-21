import { Grid, Container, makeStyles, Typography } from "@material-ui/core";
import {
  List,
  ExitToApp,
  Person,
  Home,
} from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Logout } from "../../actions";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    color: "white",
    paddingTop: theme.spacing(10),
    backgroundColor: theme.palette.primary.main,
    position: "sticky",
    top: 0,
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "white",
      color: "#555",
      border: "1px solid #ece7e7",
    },
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(3),
      cursor: "pointer",
    },
  },
  icon: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      fontSize: "18px",
    },
  },
  text: {
    fontWeight: 500,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const Leftbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(Logout());
    window.location.replace("/");
  };

  return (
    <Container className={classes.container}>
     <div className={classes.item}>
        <Home className={classes.icon} />
        <Link to="/">
        <Typography className={classes.text}>Pagina principal</Typography>
        </Link>
      </div>
      <div className={classes.item}>
      <Person className={classes.icon} />     
            <Link to='/users'>
        <Typography className={classes.text}>Usuarios</Typography>
            </Link>
   
      </div>
      <div className={classes.item}>
        <List className={classes.icon} />
        <Link to='/orders'>
        <Typography className={classes.text}>Listado de ordenes</Typography>
        </Link>
      </div>
      <div className={classes.item}>
        <List className={classes.icon} />
        <Link to='/servicios/'>
        <Typography className={classes.text}>Agregar servicio</Typography>
        </Link>
      </div>
      <div className={classes.item}>
        <List className={classes.icon} />
        <Link to='/destination'>
        <Typography className={classes.text}>Editar servicios</Typography>
        </Link>
      </div>
      <div className={classes.item} onClick={logout}>
        <ExitToApp className={classes.icon} />
        <Link>
        <Typography className={classes.text}>Cerrar sesion</Typography>
        </Link>
      </div>
    </Container>
  );
};

export default Leftbar;