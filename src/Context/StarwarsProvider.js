import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarwarsContext from './StarwarsContext';
import fetchAPI from '../services/fetchAPI';

function StarwarsProvider({ children }) {
  const [nameStarwars, setnameStarwars] = useState([]);
  const [filterByName, setfilterByName] = useState('');

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

  const Provider = {
    nameStarwars,
    getApi,
    filterName,
    filterByName,
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
