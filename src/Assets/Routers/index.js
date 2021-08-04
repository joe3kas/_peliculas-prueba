import {
    BrowserRouter as Router, Route, Switch,
} from "react-router-dom";


import Navegacion from "../Components/Navbar";
import popular from "../pages/Popular";
import top from "../pages/Top";
import Detalles from "../pages/Detalles";
import home from "../pages/Home";
import error from "../pages/NotFound";

export function Routers() {
    return (
        <Router>
            <Navegacion />
            <Switch>
                <Route exact path="/popular" component={popular} />
                <Route exact path="/top" component={top} />
                <Route exact path="/Pelicula/:peliculaid" component={Detalles} />
                <Route exact path="/" component={home} />
                <Route path="*" component={error} />
            </Switch>
        </Router>
    );
}