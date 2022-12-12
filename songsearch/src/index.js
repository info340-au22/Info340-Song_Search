import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';


import './index.css';
import App from './components/App.js';
import 'bootstrap/dist/css/bootstrap.css';


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA2LsF39A-ub9xCXJzTkzNIIwJfAuKDw9A",
  authDomain: "song-search-804b5.firebaseapp.com",
  databaseURL: "https://song-search-804b5-default-rtdb.firebaseio.com",
  projectId: "song-search-804b5",
  storageBucket: "song-search-804b5.appspot.com",
  messagingSenderId: "366281974477",
  appId: "1:366281974477:web:d02086ec60bee768a67f84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

