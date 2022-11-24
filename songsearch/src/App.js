import React from 'react';

import {Header} from './Header.js'
import { HomePage } from './HomePage.js';
import {Footer} from './Footer.js'
import { Login } from './Login.js'
import { Search } from './Search.js';
import { NewlyUploaded } from './NewlyUploaded.js';
import {Upload} from './Upload.js';


export default function App(props) {

  const currentPage = "NewlyUploaded"
  return (

    <div className="SongSearch">

      <Header currentPage={currentPage}/>

      {/* <HomePage/> */}
      {/* <Search /> */}
      {/* <Login /> */}
      <NewlyUploaded />
      {/* <Upload /> */}

      <Footer />
    </div>
  );
}


