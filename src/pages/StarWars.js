import React, { useContext, useEffect } from 'react';
import StarwarsContext from '../Context/StarwarsContext';

function StarWars() {
  const { Provider } = useContext(StarwarsContext);
  const { getApi, nameStarwars } = Provider;

  useEffect(() => {
    getApi();
  }, []);

  return (
    <div>
      <header>
        <h1>Meu Healder</h1>
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