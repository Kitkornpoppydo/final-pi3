import React from 'react';

//import routes and route
import {Routes, Route } from 'react-router-dom';

//import components
import Header from './components/Header';

//import page
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';
import ShowProduct from './components/ShowProduct';
import Sellproduct from './components/Sellproduct';
import Login from './pages/Login';
import Proflie from './pages/Proflie';



const App = () => {
  return (
    <div className='max-w-[1440px] mx-auto bg-white'>
      <Header />
      <Routes>
        <Route>
          <Route  path='/home' element={<Home />} />
          <Route  path='/property/:id' element={<PropertyDetails />} />
          <Route path='/showproduct' element={<ShowProduct />} />
          <Route path='/sellproduct/:id' element={<Sellproduct />} />
          <Route path='/proflie' element={<Proflie />} />
        </Route>
      </Routes>
      <Routes>
        <Route path='/' element={<Login />} />
      </Routes>
    </div>

  );
};

export default App;
