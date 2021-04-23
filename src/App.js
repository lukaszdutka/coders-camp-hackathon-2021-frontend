import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import { Store } from "./Context";
import { theme } from "./themes/theme";
import { Nav } from "./layout/Nav";
import { AppSwitch } from "./switch/Switch";

function App() {
    return (
        <Store>
            <ThemeProvider theme={theme}>
                <Router>
                    <Nav />
                    <AppSwitch />
                </Router>
            </ThemeProvider>
        </Store>
    );
}

export default App;
