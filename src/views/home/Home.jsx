import React, { useState } from "react";
import { FormControl, Grid, MenuItem, Select, Typography } from "@material-ui/core";
import { LoginForm } from "../../components/forms/LoginForm";
import { RegisterForm } from "../../components/forms/RegisterForm";
import homeImg from "./homeImg.jpg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    loginDiv: {
        width: "80%",
        margin: "auto",
    },
    loginImg: {
        border: "6px solid #91C43B",
        borderRadius: "10%",
        marginTop: "25px",
    },
    action: {
        marginTop: "30px",
    },
    paddingBot: {
        marginTop: "80px",
        paddingBottom: "30px",
    },
    paddingBotBig: {
        marginTop: "40px",
        marginBottom: "60px",
    },
}));

export const Home = () => {
    const classes = useStyles();
    const [action, setAction] = useState("login");

    const handleChange = (event) => {
        setAction(event.target.value);
    };

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
                    <Typography className={classes.paddingBot} variant="h3">
                        Engagement Tool
                    </Typography>
                    <Typography className={classes.paddingBotBig} variant="h5">
                        Build better engagement of your remote teams with <b>Questio</b>! Check out how simple it is.
                    </Typography>

                    {action === "login" ? <LoginForm /> : <RegisterForm setAction={setAction} />}
                    <div className={classes.action}>
                        <FormControl>
                            <Select value={action} onChange={handleChange}>
                                <MenuItem value={"login"}>Log in</MenuItem>
                                <MenuItem value={"register"}>Register</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </div>
            </Grid>
            <Grid item md={6} xs={12}>
                <div className={classes.loginDiv}>
                    <img src={homeImg} alt="homeImage" width="95%" className={classes.loginImg} />
                    <Typography className={classes.paddingBotBig} align="center" variant="h5">
                        "If a man knows not which port he sails, no wind is favorable" - Seneca
                    </Typography>
                </div>
            </Grid>
        </Grid>
    );
};
