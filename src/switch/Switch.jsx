import { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "../views/home/Home";
import { Profile } from "../views/profile/Profile";
import { Guest } from "../views/guest/Guest";
import PrivateRoute from "./PrivateRoute";
import { makeStyles } from "@material-ui/core/styles";
import { AppContext } from "../Context";
import { Meeting } from "../views/meeting/Meeting";
import { MentorSummaryView } from "../components/forms/MentorSummaryView";

const useStyles = makeStyles((theme) => ({
    rootMain: {
        flexGrow: 1,
    },
}));

export const AppSwitch = () => {
    const { token } = useContext(AppContext);

    const classes = useStyles();
    return (
        <main className={classes.rootMain}>
            <Switch>
                <Route exact path="/" render={() => (token ? <Profile /> : <Home />)} />
                <Route exact path="/guest/:id" render={() => (token ? <Profile /> : <Guest />)} />
                <PrivateRoute exact path="/profile" component={Profile} />
                <PrivateRoute path="/room/:id" component={Meeting} />
                <PrivateRoute path="/summary/:id" component={MentorSummaryView} />
            </Switch>
        </main>
    );
};
