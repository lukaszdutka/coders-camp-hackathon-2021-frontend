import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { LoginForm } from "../../components/forms/LoginForm";
import homeImg from "./homeImg.jpg";
import { makeStyles } from "@material-ui/core/styles";



const useStyles = makeStyles((theme) => ({
  loginDiv: {
    width: "80%", 
    margin: "auto"
  }, 
  loginImg: {
    border: "6px solid #91C43B",
    borderRadius: "10%", 
    marginTop: "25px"
  }
}));

export const Home = () => {
  const classes = useStyles();

    return (
        <Grid
            container
            spacing={5}
            alignItems="center"
            style={{
                margin: 0,
                width: "100%",
            }}
        >
            <Grid item md={6} xs={12}>
                <div className={classes.loginDiv}>
                    <LoginForm />
                </div>
            </Grid>
            <Grid item md={6} xs={12}>
            <div className={classes.loginDiv}>
              <Typography align="center" variant="h4">No to distraction, yes to motivation!</Typography>
                <img src={homeImg} alt="homeImage" width="95%" className={classes.loginImg}/>
                </div>
            </Grid>
        </Grid>
    );
};
