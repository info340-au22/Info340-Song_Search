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
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth'


export default function App(props) {
  const [songList, SetSongList] = useState([])
  const [currentUser, setLoginStatus] = useState(null)
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
  
      // authenticator
      const auth = getAuth();
      
      onAuthStateChanged(auth, (firebaseUser) => {
          if(firebaseUser) { 
              console.log('logged in', firebaseUser.displayName);
              setLoginStatus(firebaseUser.displayName);
          }
          else {
              signOut(auth)
                  .catch(err => console.log(err)); //log any errors for debugging 
              console.log('logged out');
              setLoginStatus(null);
          }
      });


      function cleanup() {
      offFunction();
      }

      return cleanup;
  },[])


  return (

    <div className="SongSearch">

      <Header />

      <Routes>
        <Route path="home" element={<HomePage/>} />
        <Route path="search" element={<Search songList={songList}/>} />

        <Route element={<LoggedIn currentUser={currentUser} />}>
          <Route path="login" element={<Login setLoginStatus={setLoginStatus}/>} />
        </Route>


        <Route path="recent" element={<NewlyUploaded songList={songList} />} />

        <Route element={<ProtectedPage currentUser={currentUser} />}>
          <Route path="upload" element={<Upload/>} />
        </Route>

        <Route path='/*' element={<Navigate to="/home"/>} />
      </Routes>
      <Footer />
    </div>
  );
}


function ProtectedPage(props) {
  const currentUser = props.currentUser;
  //...determine if user is logged in
  if(currentUser === null) { //if no user, send to sign in
    return <Navigate to="/login" />
  }
  else { //otherwise, show the child route content\
    return <Outlet />
  }
}

function LoggedIn(props) {
  const currentUser = props.currentUser;

  if(currentUser != null) {
    return(
    <div>
      <h1 className="loggedIn"> Currently Logged in as {currentUser} </h1>
      <div className="d-grid gap-2 no_underline">
        <button className="btn btn-lg btn-warning logOutButton" type="submit" onClick={handleSignOut}> Log Out </button>
      </div>
    </div> 
    )
  } else {
    return <Outlet />
  }

}

const handleSignOut = () => {
  console.log("signing out");
  signOut(getAuth())
}  

