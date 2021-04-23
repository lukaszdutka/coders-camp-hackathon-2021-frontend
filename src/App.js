import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import { Store } from "./Context";
import { theme } from "./themes/theme";
import { MeetingView } from "./components/forms/MeetingView";
import { Container } from "@material-ui/core";

function App() {
    return (
        <Store>
            <ThemeProvider theme={theme}>
                <Router>
                    {/*<Nav />*/}
                    {/*<AppSwitch />*/}
                    <div className={"black-background"}>
                        <Container maxWidth="sm">
                            <MeetingView />
                        </Container>
                    </div>
                </Router>
            </ThemeProvider>
        </Store>
    );
}

export default App;
