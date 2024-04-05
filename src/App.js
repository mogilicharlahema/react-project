import React from 'react';

import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/home';
import Login from './components/login/login';
import Book from './components/booktable/book';

const App = () => (
  <div>
    <BrowserRouter>
    <Routes> 
    
        <Route path='/' Component={Home}/>
        <Route path='/login' Component={Login}/> 
        <Route path='/book' Component={Book}/> 
        <Route path='/' Component={Login}/>
    </Routes>
    </BrowserRouter>
  </div>
);


export default App