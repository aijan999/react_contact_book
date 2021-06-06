import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Contact book App</h1>
      <hr />
      <div className="links">
        
        <NavLink to="/add" className="link" activeClassName="active">
          Add contact
        </NavLink>

        <NavLink to="/" className="link" activeClassName="active" exact>
          Contacts' list
        </NavLink>

      </div>
    </header>
  );
};

export default Header;