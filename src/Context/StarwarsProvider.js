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
  const [filterAllStates, setfilterAllStates] = useState([
    'population', 'orbital_period', 'diameter', 'rotation_period',
    'surface_water']);

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
    // console.log(filterByColuna);
    // console.log(e);
    setfilterByColuna(e);
  };

  const filterComp = (e) => {
    // console.log(e);
    setfilterByComp(e);
  };

  const filterValue = (e) => {
    setfilterByValue(e);
  };

  const filterButom = (number, comparacao, state) => {
    const numberInt = Number(number);
    const filter = filterAllStates.filter((e) => e !== state);
    setfilterByColuna(filter[0]);
    setfilterAllStates(filter);
    // setfilterByColuna(filter);
    if (comparacao === 'menor que') {
      const buttom = nameStarwars.filter((e) => Number(e[state]) < numberInt);
      setnameStarwars(buttom);
    }
    if (comparacao === 'igual a') {
      const buttom = nameStarwars.filter((e) => Number(e[state]) === numberInt);
      setnameStarwars(buttom);
    }
    if (comparacao === 'maior que') {
      const buttom = nameStarwars.filter((e) => Number(e[state]) > numberInt);
      setnameStarwars(buttom);
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
    filterButom,
    filterAllStates,
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
