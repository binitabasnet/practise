import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Axios from "axios";

import { Card, Container, Row, Col } from "react-bootstrap";
class Home extends Component {
  state = {
    apiKey: "0434b9cf0a81787b60399c285a20690b",
    nowPlaying: []
  };
  componentDidMount() {
    Axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${this.state.apiKey}&language=en-US&page=1`
    ).then(res => this.setState({ nowPlaying: res.data.results }));
  }
  render() {
    return (
      <React.Fragment>
        <h1>Now Playing</h1>
        <Container>
          <Row>
            {this.state.nowPlaying.map(movie => {
              console.log(movie);
              return (
                <Col md="3" onClick={() => this.props.movie(movie)}>
                  <Link to={`/singleMoviesPage/${movie.id}`}>
                    <Card style={{ margin: "5px", padding: "5px" }}>
                      <Card.Img
                        variant="top"
                        src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                      />
                      <Card.Body>
                        <Card.Title>{movie.title}</Card.Title>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              );
            })}
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Home;
