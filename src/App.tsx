import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import CarouselMain from './components/CarrouselMain';
import './styles/main.scss';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="container">
        
        <CarouselMain/>

      </div>
      
      <Footer/>
    </div>
  );
}

export default App;
