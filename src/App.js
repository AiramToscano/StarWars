import React from 'react';
import './App.css';
import StarwarsProvider from './Context/StarwarsProvider';
import StarWars from './pages/StarWars';

function App() {
  return (
    <StarwarsProvider>
      <StarWars />
    </StarwarsProvider>
  );
}

export default App;
