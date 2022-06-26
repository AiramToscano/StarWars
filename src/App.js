import React from 'react';
import StarwarsProvider from './Context/StarwarsProvider';
import StarWars from './pages/StarWars';
import './index.css';
import './App.css';

function App() {
  return (
    <StarwarsProvider>
      <StarWars />
    </StarwarsProvider>
  );
}

export default App;
