import React from 'react';
import {Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './component/HomePage';
import DescriptionPage from './component/DescriptionPage';
import Main from './component/Main';
import Category from './component/Category';

const App = () => {

  return (
    <div className="App">
      <Routes>
        <Route exact path="/description/:id" element={<DescriptionPage />}/>
        <Route path="/" element={<Main />}/>
        <Route path='/profile' element={<HomePage />}/>
        <Route path='/category' element={<Category/>}/>
      </Routes>
    </div>
  );
};

export default App;