import React from 'react';
import { stack as Menu } from 'react-burger-menu';
import { NavLink, useLocation} from 'react-router-dom';

export function Burger(props) {
  return (
    <Menu>
      <NavLink to="/home" className="menu-item">
        Home
      </NavLink>
      <NavLink to="/recent" className="menu-item">
        Newly Uploaded
      </NavLink>
      <NavLink to="/upload" className="menu-item">
        Upload your song
      </NavLink>
      <NavLink to="/search" className="menu-item">
        Search
      </NavLink>
      <NavLink to="/Login" className="menu-item">
        Login
      </NavLink>
    </Menu>
  );
};