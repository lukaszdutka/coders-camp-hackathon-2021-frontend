import { Route, Switch } from "react-router-dom";
import { Home } from "../views/home/Home";
import PrivateRoute from "./PrivateRoute";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  rootMain: {
    flexGrow: 1
  }
}));

export const AppSwitch = () => {
  const classes = useStyles();
    return (
        <main className={classes.rootMain}>
            <Switch>
                <Route exact path="/" component={Home} />
                <PrivateRoute exact path="/private" component="" />
            </Switch>
        </main>
    );
};
