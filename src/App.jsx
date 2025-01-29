import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import CheckWorldAtlas from './components/CheckWorldAtlas'; // <-- Added import

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;




