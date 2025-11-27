import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/main.scss';
import PictureMain from './components/PictureMain';
import styles from '../src/App.module.scss';

function App() {
  return (
    <div className="App">
      <Header/>
      <PictureMain/>      
      <Footer/>
    </div>
  );
}

export default App;
