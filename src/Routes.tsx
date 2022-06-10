import { Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/NavBar";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import MovieRoute from "./pages/MovieRoute";
import history from "./util/history";

const Routes = () => (
  <Router history={history}>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <PrivateRoute path="/movies">
        <MovieRoute />
      </PrivateRoute>
    </Switch>
  </Router>
);

export default Routes;
