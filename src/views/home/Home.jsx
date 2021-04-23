import React from "react";
import { Grid } from "@material-ui/core";
import { LoginForm } from "../../components/forms/LoginForm";
import homeImg from "./homeImg.jpg";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  loginDiv: {
    width: "70%"
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
                <img src={homeImg} alt="homeImage" width="70%" />
            </Grid>
        </Grid>
    );
};
