import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import SecondBanner from './Components/SecondBanner/SecondBanner';
import ThirdBanner from './Components/ThirdBanner/ThirdBanner';
import FourBanner from './Components/FourBanner/FourBanner';
import FiveBanner from './Components/FiveBanner/FiveBanner';
import SixBanner from './Components/SixBanner/SixBanner';
import Footer from './Components/Footer/Footer';

function App(){
    return (
      <div>
        <Navbar/>
        <SecondBanner/>
        <ThirdBanner/>
        <FourBanner/>
        <FiveBanner/>
        <SixBanner/>
        <Footer/>
      </div>
    );
}


export default App;
