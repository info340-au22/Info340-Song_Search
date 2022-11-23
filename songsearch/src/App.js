import React from 'react';

import {Header} from './Header.js'
import { HomePage } from './HomePage.js';
import {Footer} from './Footer.js'

export default function App(props) {
  return (

    <div className="SongSearch">
      <Header />
      
      <HomePage />

      <Footer />
    </div>
  );
}


