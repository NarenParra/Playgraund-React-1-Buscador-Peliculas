import React, { Component } from "react";

const API_KEY = "e74426fe";

class SeacrhForm extends Component {
  state = {
    inputMovie: "",
  };

  _handleChange = (e) => {
    //target contiene el elemento que esta causando el evento
    //value contiene el texto
    this.setState({ inputMovie: e.target.value });
  };

  _handleSubmit = (e) => {
    //evitamos que se ejecute el efecto natvo por defecto
    e.preventDefault();

    const { inputMovie } = this.state;
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
      .then((res) => res.json())
      .then((results) => {
        const { Search = [], totalResults = "0" } = results;
        console.log(Search, totalResults);
        this.props.onResults(Search);
      });
  };

  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <div className="field has-addons">
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Movie to Searchy"
              onChange={this._handleChange}
            ></input>
          </div>
          <div className="control">
            <button className="button is-info">Search</button>
          </div>
        </div>
      </form>
    );
  }
}
/*
function SeacrhForm() {
  state = {
    inputMovie: "",
  };

  _handleChange = (e) => {
    this.setState({ inputMovie: e.target.value });
  };

  return (
    <div className="field has-addons">
      <div className="control">
        <input
          className="input"
          type="text"
          placeholder="Movie to Searchy"
          onChange={this._handleChange}
        ></input>
      </div>
      <div className="control">
        <button className="button is-info">Search</button>
      </div>
    </div>
  );
}
*/
export default SeacrhForm;
