import React from 'react';

import {Header} from './Header.js'
import { HomePage } from './HomePage.js';
import {Footer} from './Footer.js'
import { Login } from './Login.js'
import { Search } from './Search.js';
import { NewlyUploaded } from './NewlyUploaded.js';
import {Upload} from './Upload.js';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getDatabase, ref, set as firebaseSet, onValue, push as firebasePush } from 'firebase/database';



export default function App(props) {
  const [songList, SetSongList] = useState([])

  useEffect(() => {
      const db = getDatabase();
      const songReference = ref(db, "Songs");
      
      const offFunction = onValue(songReference, (snapshot) => {
      const songData = snapshot.val();

      const objKeys = Object.keys(songData);


      const songArray = objKeys.map((keyString) => {
          const theMessageObj = songData[keyString];
          theMessageObj.key = keyString;
          return theMessageObj;
      })
      SetSongList(songArray)
      })

      function cleanup() {
      offFunction();
      }

      return cleanup;
},[])
console.log(songList)

  return (

    <div className="SongSearch">

      <Header />

      <Routes>
        <Route path="home" element={<HomePage/>} />
        <Route path="search" element={<Search songList={songList}/>} />
        <Route path="login" element={<Login/>} /> 
        <Route path="recent" element={<NewlyUploaded songList={songList} />} />
        <Route path="upload" element={<Upload/>} />
        <Route path='/*' element={<Navigate to="/home"/>} />
      </Routes>
      <Footer />
    </div>
  );
}


