
import React from 'react'
import { Link } from 'react-router-dom'


const SiteHeader = () =>{ 
  
  
  let jsx="";
  if(localStorage.getItem("login"))
jsx= <Link to="/logout" class="item">
<i class="grid user icon"></i> Logout
</Link>;
else
jsx= <Link to="/login" class="item">
<i class="grid user icon"></i> Login
</Link>;
  
  return(
      <div class="ui attached stackable menu">

    <div class="ui container">
    <Link class="item" to="/">
    DEV@deakin
      </Link>
      <div class="center item five">
        <div class="ui input"><input type="text" placeholder="Search..."/></div>
      </div>
      <Link to="/" class="item right" >
        <i class="home icon"></i> Home
      </Link>
      <Link to="/questions" class="item">
        <i class="grid book icon"></i> Questions
      </Link>
      <Link to="/post" class="item">
        <i class="grid book icon"></i> Post
      </Link>
      <Link to="/plans" class="item">
        <i class="grid book icon"></i> Plans
      </Link>
      {jsx}
     
    </div>
    
    </div>

)
}
export default SiteHeader
