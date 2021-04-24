import { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, AppBar, Toolbar, Typography } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AssignmentIcon from "@material-ui/icons/Assignment";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { AppContext } from "../Context";

const useStyles = makeStyles((theme) => ({
    rootNav: {
        // flexGrow: 1, //todo it breaks Meeting View
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
    const { token, profile, clearToken, clearProfile } = useContext(AppContext);
    const classes = useStyles();
    const matches = useMediaQuery("(min-width:600px)");

    const handleLogout = () => {
        clearProfile();
        clearToken();
    };

    return (
        <div className={classes.rootNav}>
            <AppBar position="static">
                <Toolbar>
                    <AssignmentIcon />
                    <Typography className={classes.titleNav} variant="h6">
                        Questio
                    </Typography>
                    {token && (
                        <>
                            {profile && (
                                <Typography variant="h6" noWrap className={classes.welcomeTitle}>
                                    {profile.name}
                                </Typography>
                            )}
                            <Button
                                variant="contained"
                                color="primary"
                                startIcon={<ExitToAppIcon />}
                                onClick={handleLogout}
                            >
                                {matches && "Log out"}
                            </Button>
                        </>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
};
