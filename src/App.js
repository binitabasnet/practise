import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SingleMoviesPage from "./components/SingleMoviesPage";
import MoviesPage from "./components/MoviesPage";
import PageNotFound from "./components/404";

class App extends React.Component {
  state = {
    movie: {}
  };
  recMovies = movie => {
    console.log(movie);
    this.setState({ movie });
  };
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route
            path="/"
            exact
            render={props => <Home {...props} movie={this.recMovies} />}
          />
          <Route path="/footer" component={Footer} />
          <Route
            path="/singleMoviesPage/:id"
            render={() => <SingleMoviesPage movie={this.state.movie} />}
          />
          <Route path="/moviesPage" component={MoviesPage} />
          <Route path="/page-not-found" component={PageNotFound} />
          <Redirect to="/page-not-found" />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
