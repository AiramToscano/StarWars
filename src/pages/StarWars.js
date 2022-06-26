import React, { useContext, useEffect } from 'react';
import StarwarsContext from '../Context/StarwarsContext';
import '../index.css';

function StarWars() {
  const { Provider } = useContext(StarwarsContext);
  const { getApi, nameStarwars, filterByName, filterName,
    filterByColuna, filterByComp, filterByValue,
    filterColuna, filterComp, filterValue,
    filterAllStates, filterButom, buttomFilters, allButom } = Provider;

  useEffect(() => {
    getApi();
  }, []);

  const buttomfilter = (column, comparison, value) => {
    const obj = {
      coluna: column,
      comparacao: comparison,
      valor: value,
    };
    filterButom(obj);
    const selectState = filterAllStates.find((colun) => colun === column);
    allButom(selectState);
  };

  const filterNumeric = (planet) => {
    // console.log(buttomFilters);
    // logica pensada e ajudada pelo colega Pedro Folego.
    const filterPlanet = buttomFilters.map((filter) => {
      const { coluna, comparacao, valor } = filter;
      if (comparacao === 'menor que') return Number(planet[coluna]) < Number(valor);
      if (comparacao === 'maior que') return Number(planet[coluna]) > Number(valor);
      if (comparacao === 'igual a') return Number(planet[coluna]) === Number(valor);
      return null;
    });
    // console.log(filterPlanet);
    return filterPlanet.every((e) => e);
  };

  return (
    <div className="inline-bloc">
      <header className="flex">
        <form className="m-5">
          <input
            onChange={ (e) => filterName(e.target.value) }
            name="filterByName"
            placeholder="Digite o nome do planeta"
            className="text-black m-5 placeholder:italic placeholder:text-black"
            id="teste"
            value={ filterByName }
            data-testid="name-filter"
          />
          <select
            onChange={ ({ target }) => filterColuna(target.value) }
            value={ filterByColuna }
            className="text-black m-3"
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
            className="text-black m-5"
            name="filterByComp"
            data-testid="comparison-filter"
          >
            <option>Maior que</option>
            <option value="menor que">Menor que</option>
            <option value="igual a">Igual a</option>
          </select>
          <label htmlFor="teste1">
            <input
              onChange={ (e) => filterValue(e.target.value) }
              name="filterByValue"
              className="text-black m-5 placeholder:italic placeholder:text-black"
              placeholder="Digite o valor do filtro"
              id="teste1"
              type="number"
              value={ filterByValue }
              data-testid="value-filter"
            />
          </label>
        </form>
      </header>
      <button
        type="button"
        className="
          bg-white hover:bg-purple-900
           text-black font-bold py-1 px-4 rounded
           focus:outline-none focus:shadow-outline"
        data-testid="button-filter"
        onClick={ () => buttomfilter(filterByColuna, filterByComp, filterByValue) }
      >
        Filtrar
      </button>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2 text-white">Name</th>
            <th className="px-4 py-2 text-white">Rotation Period</th>
            <th className="px-4 py-2 text-white">Orbital Period</th>
            <th className="px-4 py-2 text-white">Diameter</th>
            <th className="px-4 py-2 text-white">Climate</th>
            <th className="px-4 py-2 text-white">Gravity</th>
            <th className="px-4 py-2 text-white">Terrain</th>
            <th className="px-4 py-2 text-white">Surface Water</th>
            <th className="px-4 py-2 text-white">Population</th>
            <th className="px-4 py-2 text-white">Films</th>
            <th className="px-4 py-2 text-white">Created</th>
            <th className="px-4 py-2 text-white">Edited</th>
            <th className="px-4 py-2 text-white">URL</th>
          </tr>
        </thead>
        {nameStarwars.filter(filterNumeric).map((e) => (
          <tbody key={ e.name }>
            <tr>
              <td className="border px-4 py-2">{e.name}</td>
              <td className="border px-4 py-2">{e.rotation_period}</td>
              <td className="border px-4 py-2">{e.orbital_period}</td>
              <td className="border px-4 py-2">{e.diameter}</td>
              <td className="border px-4 py-2">{e.climate}</td>
              <td className="border px-4 py-2">{e.gravity}</td>
              <td className="border px-4 py-2">{e.terrain}</td>
              <td className="border px-4 py-2">{e.surface_water}</td>
              <td className="border px-4 py-2">{e.population}</td>
              <td className="border px-4 py-2">{e.films.map((films) => films)}</td>
              <td className="border px-4 py-2">{e.created}</td>
              <td className="border px-4 py-2">{e.edited}</td>
              <td className="border px-4 py-2">{e.url}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}

export default StarWars;
