import React, { Component } from "react";
import { Title } from "../components/Title";
import SeacrhForm from "../components/SearchFrom";
import { MoviesList } from "../components/MoviesList";

export class Home extends Component {
  state = { usedSearch: false, results: [] };

  _handleResults = (results) => {
    this.setState({ results, usedSearch: true });
  };

  _renderleResults = () => {
    return this.state.results.length === 0 ? (
      <p>No hay resultados</p>
    ) : (
      <MoviesList movies={this.state.results} />
    );
  };

  render() {
    return (
      <div>
        <Title>Buscador de Peliculas</Title>
        <div className="SearchForm-weapper">
          <SeacrhForm onResults={this._handleResults} />
        </div>
        {this.state.usedSearch ? (
          this._renderleResults()
        ) : (
          <small>Use el formulario para buscar una pelicula</small>
        )}
      </div>
    );
  }
}
