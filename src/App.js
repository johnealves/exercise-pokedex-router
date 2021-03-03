import React from 'react';
import { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import PokemonDetails from './<PokemonDetails';
import About from './About';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <header>
            <Link to="/">
              <h1> Pokedex </h1>
            </Link>
            <nav>
              <div><Link to="/">Home</Link></div>
              <div><Link to="/about">Sobre à Pokedex</Link></div>
            </nav>
          </header>
          <Switch>
            <Route 
              exact
              path="/" 
              render={props => <Pokedex {...props} pokemons={pokemons} /> }
            />
            <Route 
              path="/pokemons/:id" 
              render={ props => <PokemonDetails {...props} /> }
            />
            <Route 
              path="/about" 
              render={ props => <About {...props} /> }
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;