import React,{ Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className='about-pokedex'>
        <h1>Sobre a Pokedex</h1>
        <section>
          <img src='/pokedex.png' alt='pokedex'></img>
          <p>A Pokédex é uma enciclopédia digital inestimável para treinadores no mundo Pokémon. Ele fornece informações sobre todos os Pokémon do mundo que estão contidos em seu banco de dados, embora difira na forma como adquire e apresenta as informações nas diferentes mídias. No entanto, elas também são dadas apenas a alguns treinadores de cada vez, geralmente aqueles que são considerados como tendo habilidades e potencial excepcionais. Pokédexes regionais fornecem informações sobre Pokémon nativos de sua região específica , enquanto as Pokédex nacionais registram informações sobre todos os Pokémons conhecidos.</p>

          <p>As entradas da Pokédex geralmente descrevem um Pokémon em apenas duas ou três frases. Eles podem fornecer informações básicas sobre o habitat ou as atividades de um Pokémon na natureza ou outras informações sobre a história ou anatomia do Pokémon. As entradas da Pokédex também incluem altura, peso, choro, pegada (antes da Geração VI ), localização, outras formas e uma imagem do Pokémon.</p>

          <p>Às vezes, a Pokédex pode conter informações imprecisas ou míticas. Por exemplo, algumas entradas do Tentacruel o descrevem como tendo 80 tentáculos quando apenas 14 são visíveis.</p>
        </section>
      </div>
    )
  }
}

export default About; 