import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarwarsContext from './StarwarsContext';
import fetchAPI from '../services/fetchAPI';

function StarwarsProvider({ children }) {
  const [nameStarwars, setnameStarwars] = useState([]);
  const [filterByName, setfilterByName] = useState('');
  const [filterByColuna, setfilterByColuna] = useState('population');
  const [filterByComp, setfilterByComp] = useState('maior que');
  const [filterByValue, setfilterByValue] = useState(0);

  // const [filterArrayName, setfilterArrayName] = useState([]);

  const getApi = async () => {
    const allPlanets = await fetchAPI();
    // console.log(allPlanets);
    setnameStarwars(allPlanets.results);
  };

  const filterName = (e) => {
    setfilterByName(e);
    // setfilterArrayName(nameStarwars);
    const filterNameArray = nameStarwars
      .filter((name) => name.name.includes(e));
    // setnameStarwars(filterNameArray);
    console.log(filterNameArray);
    // setfilterArrayName(filterNameArray);
    if (e === '') {
      getApi();
    }
    setnameStarwars(filterNameArray);
  };

  const filterColuna = (e) => {
    setfilterByColuna(e);
  };

  const filterComp = (e) => {
    setfilterByComp(e);
  };

  const filterValue = (e) => {
    setfilterByValue(e);
  };

  const filterRotationButom = (number, comparacao) => {
    // const numberInt = parseFloat(number);
    if (comparacao === 'menor que') {
      const buttom = nameStarwars.filter((e) => e.rotation_period < number);
      // setnameStarwars(buttom);
      console.log(buttom);
    }
    if (comparacao === 'igual a') {
      const buttom = nameStarwars.filter((e) => e.rotation_period === number);
      // setnameStarwars(buttom);
      console.log(buttom);
    }
    if (comparacao === 'maior que') {
      const buttom = nameStarwars.filter((e) => e.rotation_period >= number);
      console.log(buttom);
    }
  };

  const filterPopulationButom = (number, comparacao) => {
    const numberInt = parseFloat(number);
    if (comparacao === 'menor que') {
      const buttom = nameStarwars.filter((e) => e.population < numberInt);
      setnameStarwars(buttom);
    }
    if (comparacao === 'igual a') {
      const buttom = nameStarwars.filter((e) => e.population === number);
      setnameStarwars(buttom);
    }
    if (comparacao === 'maior que') {
      const buttom = nameStarwars.filter((e) => e.population > numberInt);
      setnameStarwars(buttom);
    }
  };

  const filterOrbitalButom = (number, comparacao) => {
    const numberInt = parseFloat(number);
    if (comparacao === 'menor que') {
      const buttom = nameStarwars.filter((e) => e.orbital_period < numberInt);
      setnameStarwars(buttom);
    }
    if (comparacao === 'igual a') {
      const buttom = nameStarwars.filter((e) => e.orbital_period === numberInt);
      setnameStarwars(buttom);
    }
    if (comparacao === 'maior que') {
      const buttom = nameStarwars.filter((e) => e.orbital_period > numberInt);
      setnameStarwars(buttom);
    }
  };
  const filterDiameterButom = (number, comparacao) => {
    const numberInt = parseFloat(number);
    if (comparacao === 'menor que') {
      const buttom = nameStarwars.filter((e) => e.diameter < numberInt);
      setnameStarwars(buttom);
    }
    if (comparacao === 'igual a') {
      const buttom = nameStarwars.filter((e) => e.diameter === numberInt);
      setnameStarwars(buttom);
    }
    if (comparacao === 'maior que') {
      const buttom = nameStarwars.filter((e) => e.diameter > numberInt);
      setnameStarwars(buttom);
    }
  };
  const filterSurfaceButom = (number, comparacao) => {
    const numberInt = parseFloat(number);
    if (comparacao === 'menor que') {
      const buttom1 = nameStarwars.filter((e) => e.surface_water < numberInt);
      setnameStarwars(buttom1);
    }
    if (comparacao === 'igual a') {
      const buttom2 = nameStarwars.filter((e) => e.surface_water === numberInt);
      setnameStarwars(buttom2);
    }
    if (comparacao === 'maior que') {
      const buttom3 = nameStarwars.filter((e) => e.surface_water > numberInt);
      setnameStarwars(buttom3);
    }
  };

  const Provider = {
    nameStarwars,
    getApi,
    filterName,
    filterByName,
    filterByColuna,
    filterByComp,
    filterByValue,
    filterColuna,
    filterComp,
    filterValue,
    filterRotationButom,
    filterPopulationButom,
    filterDiameterButom,
    filterOrbitalButom,
    filterSurfaceButom,
  };

  return (
    <StarwarsContext.Provider value={ { Provider } }>
      {children}
    </StarwarsContext.Provider>
  );
}

StarwarsProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};
export default StarwarsProvider;
