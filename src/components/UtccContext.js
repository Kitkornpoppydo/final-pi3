import React, { useState, useEffect, createContext } from 'react';

//import data
import {utccData} from '../data';

//create context
export const UtccContext = createContext();

const UtccContextProvider = ({children}) => {
  const [houses, setHouses] = useState(utccData);
  const [category, setCategory] = useState('โปรดเลือกโหมด');

  const [categories, setCategories] = useState([]); //faculty   setFaculty
  const [faculty, setFaculty] = useState('โปรดเลือกคณะ'); //property setProprety

  const [faculties , setFaculties] = useState([]); //properties  setProperties
  const [price, setPrice] = useState('โปรดเลือกราคา');

  const [loading, setLoading] = useState (false);
  

  const handleClick = () => {

    const isDefault = (str) => {
     return str.split(' ').includes('(โปรดเลือก)');
    };
    
    console.log(faculty.split(' '));
 };

  
  



  return (
    <UtccContext.Provider value={{
      category,
      setCategory,
      categories,
      faculty,
      setFaculty,
      faculties,
      price,
      setPrice,
      houses,
      loading,
      handleClick,
    }}>
    {children}
  </UtccContext.Provider>
  );

};

export default UtccContextProvider;