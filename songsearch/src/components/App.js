import React from 'react';

import {Header} from './Header.js'
import { HomePage } from './HomePage.js';
import {Footer} from './Footer.js'
import { Login } from './Login.js'
import { Search } from './Search.js';
import { NewlyUploaded } from './NewlyUploaded.js';
import {Upload} from './Upload.js';
import { Navigate, Route, Routes, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getDatabase, ref, set as firebaseSet, onValue, push as firebasePush } from 'firebase/database';



export default function App(props) {
  const [songList, SetSongList] = useState([])

  const [loggedIn, setLoginStatus] = useState(true)

  const db = getDatabase();
  const songReference = ref(db, "Songs");

  useEffect(() => {

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


  return (

    <div className="SongSearch">

      <Header />
      <body>
        <Routes>
          <Route path="home" element={<HomePage/>} />
          <Route path="search" element={<Search songList={songList}/>} />
          <Route path="login" element={<Login setLoginStatus={setLoginStatus}/>} />
          <Route path="recent" element={<NewlyUploaded songList={songList} />} />

          <Route element={<ProtectedPage loggedIn={loggedIn} />}>
            <Route path="upload" element={<Upload/>} />
          </Route>

          <Route path='/*' element={<Navigate to="/home"/>} />
        </Routes>
      </body>
      <Footer />
    </div>
  );
}


function ProtectedPage(props) {
  const loggedIn = props.loggedIn;
  //...determine if user is logged in
  if(loggedIn === false) { //if no user, send to sign in
    return <Navigate to="/login" />
  }
  else { //otherwise, show the child route content
    return <Outlet />
  }
}


