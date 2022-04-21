import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import './AdminPanel.css';
import NoAcceso from "../NoAcceso";
import { useSelector } from "react-redux";
import Leftbar from "./Leftbar";
import Welcome from "./Welcome";
import NavAdmin from "./NavAdmin";

function AdminPanel() {
  const admin = useSelector((state) => state.isAdmin);

  return (
    <>
      {admin ? 
      <div>
       <NavAdmin />
       <Grid container>
         <Grid item sm={2} xs={2}>
           <Leftbar />
         </Grid>
         <Grid item sm={7} xs={10}>
           <Welcome />
         </Grid> 
       </Grid>
       </div>
       : (
        <NoAcceso />
      )}) 
    </>
  );
};
export default AdminPanel;