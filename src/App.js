
import './App.css';

import React from 'react'
import 'semantic-ui-css/semantic.min.css'

import SiteHeader from './home/header';

import FooterMain from './home/footermain';
import Home from './home/homemain';
import { Route, Routes } from 'react-router-dom';
import PostMain from './post/postmain';
import Login from './user/login';
import Signup from './user/signup';
import UserHome from './user/home'
import ListQuestion from './post/listquestions';
import AllPlans from './plans/allplans';


import TakeMoney from './utils/stripecheckout';

 

function App( ) {
  let footer1=["Home","Questions","Articles","Tutorials"]
  let footer2=["FAQs","Help","Contact us"]

  return (
    <>

    <SiteHeader/>
    <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/post" exact element={<PostMain/>}/>
      <Route path="/login" exact element={<Login/>}/>
      <Route path="/signup" exact element={<Signup/>}/>
      <Route path="/home" exact element={<UserHome/>}/>
      <Route path="/questions" exact element={<ListQuestion/>}/>
      <Route path="/plans" exact element={<AllPlans/>}/>
      <Route path="/checkout" exact element={<TakeMoney/>}/>
      </Routes>
    
    <FooterMain footer1={footer1} footer2={footer2}/>
     </> 
  );
}

export default App;
