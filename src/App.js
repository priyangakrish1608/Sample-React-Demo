import React from 'react';
import './App.css';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import routes from './components/routes';

function App() {
  const routing = useRoutes(routes);

  return routing;
}

export default App;