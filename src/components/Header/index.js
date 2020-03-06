import React from 'react';

import './styles.css';
import logo from '../../assets/facebook-1.svg';

function Header() {
  return (
    <header>
      <h1>
        <img src={logo} alt="" srcSet="" />
      </h1>
      <nav>
        <p>
          <strong>Meu perfil</strong>
        </p>
      </nav>
    </header>
  );
}

export default Header;
