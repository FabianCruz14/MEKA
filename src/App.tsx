import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';


import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
      <Header/>
        <Routes>

          <Route path='/' element = {<Home/>}/>
          <Route path='/productos' element = {<Products/>}/>
          <Route path='/contacto' element = {<Contact/>}/>


        </Routes>







      <Footer/>
    </div>
  );
}

export default App;
