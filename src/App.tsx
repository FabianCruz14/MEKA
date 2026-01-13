import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';


import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Contact from './pages/Contact/Contact';
import Nosotros from './pages/Nosotros/Nosotros';

function App() {
  return (
    <div>
      <Header/>
        <Routes>

          <Route path='/' element = {<Home/>}/>
          <Route path='/nosotros' element = {<Nosotros/>}/>

          <Route path='/products' element = {<Products/>}/>

          <Route path='/contact' element = {<Contact/>}/>


        </Routes>







      <Footer/>
    </div>
  );
}

export default App;
