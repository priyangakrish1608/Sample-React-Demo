import React from 'react';
import './App.css';
import { BrowserRouter as Router, useRoutes, Link } from 'react-router-dom';
import routes from './components/routes';

const Header = () => {
  return (
    <header className="header">
      
      <div className="header-title">Manulife</div>
      <nav className="nav">
      
        <ul className="nav-list">
        
          <li className="nav-item">
            <Link to="/employee" className="nav-link">Employee</Link>
          </li>
          <li className="nav-item">
            
            <Link to="/edit" className="nav-link">Edit</Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

function App() {
  const routing = useRoutes(routes);

  return (
    
     <div>
      <Header />
      {routing}
    </div>
    
  );
}

export default App;