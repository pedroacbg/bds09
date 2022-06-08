import { Switch, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
    </Switch>
  </BrowserRouter>
);
export default Routes;
