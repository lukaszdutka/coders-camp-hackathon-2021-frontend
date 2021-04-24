import { useState } from "react";
import { Grid, Typography, FormControl, Select, MenuItem } from "@material-ui/core";
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
                    
                    {action === "login" ? <LoginForm /> : <RegisterForm />}
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
                    <Typography align="center" variant="h4">
                        No to distraction, yes to motivation!
                    </Typography>
                    <img src={homeImg} alt="homeImage" width="95%" className={classes.loginImg} />
                </div>
            </Grid>
        </Grid>
    );
};
