import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';


function App() {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <Profile />
      <  div className='content'>
        <img src="https://wallpaperset.com/w/full/c/9/0/522708.jpg" alt="nature" />
      </div>

    </div>
  );
}

export default App;
