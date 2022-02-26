import React, { useContext, useEffect } from 'react';
import StarwarsContext from '../Context/StarwarsContext';

function StarWars() {
  const { Provider } = useContext(StarwarsContext);
  const { getApi, nameStarwars, filterByName, filterName,
    filterByColuna, filterByComp, filterByValue,
    filterColuna, filterComp, filterValue,
    filterButom, filterAllStates } = Provider;

  useEffect(() => {
    getApi();
  }, []);

  const buttomfilter = (state, allstate) => {
    const selectState = allstate.find((colun) => colun === state);
    filterButom(filterByValue, filterByComp, selectState);
  };
  return (
    <div>
      <header>
        <form>
          <input
            onChange={ (e) => filterName(e.target.value) }
            name="filterByName"
            id="teste"
            value={ filterByName }
            data-testid="name-filter"
          />
          <select
            onChange={ ({ target }) => filterColuna(target.value) }
            value={ filterByColuna }
            name="filterByColuna"
            data-testid="column-filter"
          >
            {/* <option value="">Selecione uma opção</option> */}
            {filterAllStates.map((e) => (
              <option value={ e } key={ e }>{e}</option>
            ))}
          </select>
          <select
            onChange={ (e) => filterComp(e.target.value) }
            value={ filterByComp }
            name="filterByComp"
            data-testid="comparison-filter"
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
          <label htmlFor="teste1">
            <input
              onChange={ (e) => filterValue(e.target.value) }
              name="filterByValue"
              id="teste1"
              type="number"
              value={ filterByValue }
              data-testid="value-filter"
            />
          </label>
        </form>
        <button
          type="button"
          data-testid="button-filter"
          onClick={ () => buttomfilter(filterByColuna, filterAllStates) }
        >
          filtro
        </button>
      </header>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        {nameStarwars.map((e) => (
          <tbody key={ e.name }>
            <tr>
              <td>{e.name}</td>
              <td>{e.rotation_period}</td>
              <td>{e.orbital_period}</td>
              <td>{e.diameter}</td>
              <td>{e.climate}</td>
              <td>{e.gravity}</td>
              <td>{e.terrain}</td>
              <td>{e.surface_water}</td>
              <td>{e.population}</td>
              <td>{e.films.map((films) => films)}</td>
              <td>{e.created}</td>
              <td>{e.edited}</td>
              <td>{e.url}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}

export default StarWars;
