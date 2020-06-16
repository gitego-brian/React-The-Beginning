import React from 'react';

const NavBar = ({ counterNumber }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{' '}
        <span className="badge badge-secondary badge-pill">
          {counterNumber}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
