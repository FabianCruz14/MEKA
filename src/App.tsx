import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import CarouselMain from './components/CarrouselMain';

function App() {
  return (
    <div className="App">
      <Header/>
      <CarouselMain/>
      
      <Footer/>
    </div>
  );
}

export default App;
