import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { ThemeContextProvider } from "./ThemeContext";
import { ThemeContext } from "./ThemeContext";

import VehicleList from './components/VehicleList';
import ViewRequest from './components/ViewRequest';
import CreateRequest from './components/CreateRequest';
import EditRequest from './components/EditRequest';

function App() {
    return (
        <BrowserRouter>
            <ThemeContextProvider>
                <ThemeContext.Consumer>
                    {context => (
                        <div style={{ color: context.themes.theme.color, backgroundColor: context.themes.theme.background, paddingTop: "20px",paddingBottom: "60px" }} className="Container">
                            <button style={{color: context.themes.theme.text,backgroundColor: context.themes.theme.button, padding: "5px"}} className="button" onClick={() => context.toggleTheme()} >Turn on {context.themes.theme.theme}</button>
                            <br/>
                            <Switch>
                                <Route path="/vehicles" component={VehicleList} />
                                <Route path="/vehicleDetails/:vehicleId" component={ViewRequest} />
                                <Route path="/editVehicle/:vehicleId" component={EditRequest} />
                                <Route path="/addVehicle" component={CreateRequest} />
                                <Redirect from="/" to="/vehicles" />
                            </Switch>
                        </div>
                    )}
                </ThemeContext.Consumer>
            </ThemeContextProvider>
        </BrowserRouter>

    );
}

export default App;
