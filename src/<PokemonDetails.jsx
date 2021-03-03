import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import pokemons from './data';
import './pokemonDetails.css'

class PokemonDetails extends Component {
  render() {
    // const { name, type, averageWeight, image} = this.props.pokemon;
    const pokemonId = this.props.match.params.id;
    

    const pokemon = pokemons.find((pokemon) => String(pokemon.id) === pokemonId);
    const { name, type, averageWeight, image, summary, foundAt } = pokemon
    const locations = foundAt.map((found) => (
                                  <div>
                                    <img src={ found.map } alt='localização'></img>
                                    <p>{ found.location }</p>
                                  </div>
                                ))
    
    return(
      <div>
        <div className="pokemon-details">
          <div>
            <p>{name}</p>
            <p>{type}</p>
            <p>
              Average weight: {`${averageWeight.value} ${averageWeight.measurementUnit}`}
            </p>
          </div>
          <img src={image} alt={`${name} sprite`} />
        </div>
        <div className="pokemon-detail">
          <h1>Sumario</h1>
          <p>{ summary }</p>
          <h1>Game locations</h1>
          <div className="map-location">
            { locations }
          </div>
        </div>
        <Link to="/">Voltar ao inicio</Link>
      </div>
    )
  }
}

export default PokemonDetails;