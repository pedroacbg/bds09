import { Switch, Route } from "react-router-dom";
import MovieDetails from "./MovieDetails";
import Movies from "./Movies";

const MovieRoute = () => (
  <Switch>
    <Route path="/movies" exact>
      <Movies />
    </Route>
    <Route path="/movies/:moviesId">
      <MovieDetails />
    </Route>
  </Switch>
);
export default MovieRoute;
