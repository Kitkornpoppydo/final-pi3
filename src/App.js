import React from 'react';

//import routes and route
import {Routes, Route } from 'react-router-dom';

//import components
import Header from './components/Header';

//import page
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';
import ShowProduct from './components/ShowProduct';




const App = () => {
  return (
    <div className='max-w-[1440px] mx-auto bg-white'>
      <Header />
      <Routes>
        <Route>
          <Route  path='/' element={<Home />} />
          <Route  path='/property/:id' element={<PropertyDetails />} />
          <Route path='/showproduct' element={<ShowProduct />} />
        </Route>
      </Routes>

      
      
    </div>

  );
};

export default App;
