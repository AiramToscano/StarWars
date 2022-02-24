const BASE_API = 'https://swapi-trybe.herokuapp.com/api/planets/';

const fetchAPI = async () => {
  const response = await fetch(BASE_API);
  const data = await response.json();
  // console.log(data);
  return data;
};

export default fetchAPI;
