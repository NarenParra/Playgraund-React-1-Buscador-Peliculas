import React, { Component } from "react";
import { Title } from "./components/Title";
import SeacrhForm from "./components/SearchFrom";

import "./App.css";
import "bulma/css/bulma.css";

class App extends Component {
  state = { results: [] };

  _handleResults = (results) => {
    this.setState({ results });
  };

  _renderResults() {
    const { results } = this.state;
    return results.map((movie) => {
      return <p key= {movie.imdbID}>{movie.Title}</p>;
    });
  }

  render() {
    return (
      <div className="App">
        <Title>Buscador de Peliculas</Title>
        <div className="SearchForm-weapper">
          <SeacrhForm onResults={this._handleResults} />
        </div>
        {this.state.results.length === 0 ? (
          <p>No hay resultados</p>
        ) : (
          this._renderResults()
        )}
      </div>
    );
  }
}

export default App;
