import React from 'react';
import { Container, makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    container: {
      paddingTop: theme.spacing(10),
    },
  }));

function Welcome () {
 const classes = useStyles();
  return (
    <Container  className={classes.container}>
      <div>
        <h3 style={{ color: "black" }}>Hola!!</h3>
      </div>
      <div>
        <p>
          Bienvenido al panel de control de la aplicación.
          Aquí podrás administrar los servicios, los usuarios y las ordenes.
        </p>
      </div>
    </Container>
  );
}
export default Welcome;