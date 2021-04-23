import { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, AppBar, Toolbar, Typography } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AssignmentIcon from "@material-ui/icons/Assignment";

import { AppContext } from "../Context";

const useStyles = makeStyles((theme) => ({
    rootNav: {
        flexGrow: 1,
    },
    titleNav: {
        flexGrow: 1,
        marginLeft: "20px",
    },
    welcomeTitle: {
        marginRight: "20px",
    },
}));

export const Nav = () => {
    const { token } = useContext(AppContext);
    const classes = useStyles();

    return (
        <div className={classes.rootNav}>
            <AppBar position="static">
                <Toolbar>
                    <AssignmentIcon />
                    <Typography className={classes.titleNav} variant="h6">
                        MEMORIAM
                    </Typography>
                    <Typography variant="h6" className={classes.welcomeTitle}>
                        Welcome Łukasz!
                    </Typography>
                    <Button variant="contained" color="primary" startIcon={<ExitToAppIcon />}>
                        Log out
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};
