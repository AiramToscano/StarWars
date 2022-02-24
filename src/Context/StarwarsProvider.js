import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarwarsContext from './StarwarsContext';
import fetchAPI from '../services/fetchAPI';

function StarwarsProvider({ children }) {
  const [nameStarwars, setnameStarwars] = useState([]);

  const getApi = async () => {
    const allPlanets = await fetchAPI();
    // console.log(allPlanets);
    setnameStarwars(allPlanets.results);
  };

  const Provider = {
    nameStarwars,
    getApi,
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
