import React from 'react';

import {Header} from './Header.js'
import { HomePage } from './HomePage.js';
import {Footer} from './Footer.js'
import { Login } from './Login.js'
import { Search } from './Search.js';
import { NewlyUploaded } from './NewlyUploaded.js';
import {Upload} from './Upload.js';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useState } from 'react';



export default function App(props) {

  const[open, setOpen] = useState(false);

  return (

    <div className="SongSearch">

      <Header />

      <Routes>
        <Route path="home" element={<HomePage/>} />
        <Route path="search" element={<Search/>} />
        <Route path="login" element={<Login/>} />
        <Route path="recent" element={<NewlyUploaded/>} />
        <Route path="upload" element={<Upload/>} />
        <Route path='/*' element={<Navigate to="/home"/>} />
      </Routes>
      <Footer />
    </div>
  );
}


