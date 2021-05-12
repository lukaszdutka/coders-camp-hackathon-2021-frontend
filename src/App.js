import { ThemeProvider } from "@material-ui/core/styles";
import { HashRouter as Router } from "react-router-dom";

import "./App.css";
import { Store } from "./Context";
import { theme } from "./themes/theme";
import { Nav } from "./layout/Nav";
import { AppSwitch } from "./switch/Switch";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    rootApp: {
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
    },
}));

const App = () => {
    const classes = useStyles();
    return (
        <Store>
            <ThemeProvider theme={theme}>
                <Router basename="coders-camp-hackathon-2021-frontend">
                    <div className={classes.rootApp}>
                        <Nav />
                        <AppSwitch />
                    </div>
                </Router>
            </ThemeProvider>
        </Store>
    );
};

export default App;
