import React from 'react';
import Loading from '../Loading/Loading.js';
import favstar from '../../images/favstar.svg';
import emptystar from '../../images/emptystar.svg';
import PropTypes from 'prop-types';


const Character = ({ homeworld, name, population, species, films, updateFave, isFave }) => {
  if (!name) {
    return <Loading />
  }
  let filmList = films.map(film => <li key={film.name}>{film}</li>)
  return (
    <article className="character-card">
      <div>
        <h2>{name}</h2>
        <p>Homeworld: {homeworld}</p>
        <p>Homeworld Population: {population}</p>
        <p>Species: {species}</p>
        <ul>Films: {filmList}</ul>
      </div>
      <img
        onClick={() => updateFave({homeworld, name, population, species, films})}
        src={isFave ? favstar : emptystar}
        className='star'
        alt={name} />
    </article>
  )
}

Character.propTypes = {
  homeworld: PropTypes.string,
  name: PropTypes.string,
  population: PropTypes.number,
  species: PropTypes.string,
  films: PropTypes.array,
  updateFave: PropTypes.func,
  isFave: PropTypes.bool
}

export default Character;
