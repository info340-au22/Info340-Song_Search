import React from 'react';

import {Header} from './Header.js'
import { HomePage } from './HomePage.js';
import {Footer} from './Footer.js'
import { Login } from './Login.js'


export default function App(props) {

  const currentPage = "HomePage"
  return (

    <div className="SongSearch">
      
      <Header currentPage={currentPage}/>
      
      <HomePage/>

      {/* <Login /> */}

      <Footer />
    </div>
  );
}


