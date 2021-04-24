import { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "../views/home/Home";
import { Profile } from "../views/profile/Profile";
import PrivateRoute from "./PrivateRoute";
import { makeStyles } from "@material-ui/core/styles";
import { AppContext } from "../Context";

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
                <Route exact path="/guest/:id" component={() => <div>Guest</div>} />
                <PrivateRoute exact path="/profile" component={Profile} />
                <PrivateRoute path="/room/:id" component={() => <div>Meeting View</div>}/>
            </Switch>
        </main>
    );
};
