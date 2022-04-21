import { Grid, makeStyles } from "@material-ui/core";
import Leftbar from "./Leftbar";
import NavAdmin from "./NavAdmin";
import Welcome from "./Welcome";

const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const AdminPanel = () => {
  const classes = useStyles();
  return (
    <div>
      <NavAdmin />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <Leftbar />
        </Grid>
        <Grid item sm={6} xs={8}>
          <Welcome />
        </Grid>
      </Grid>
    
    </div>
  );
};
export default AdminPanel;