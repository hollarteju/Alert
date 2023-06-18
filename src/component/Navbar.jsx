import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar=()=>{
const [user, setuser]=useState(false);
const [searchBar, setsearchBar]=useState(false);

const userToggle=()=>{
  setuser(!user);
};

const searchBarToggle=()=>{
    setsearchBar(!searchBar)
}

    return(
<div class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid px-0">
    <Link to="/home" style={{textDecoration:"none"}}> <a className="navbar-brand fs-4  fw-bold"href="">Lag.</a></Link>

    <div className="d-flex">
    
      <div class="Log-status mx-4">
          <li class="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="true" onClick={userToggle}>
              <i className="bx bx-user mt-2"></i>
            </a>
            <ul class={!user?"dropdown-menu":"dropdown-menu d-block my-3"}>
            <Link to="/signup" style={{textDecoration:"none"}}><li> <a class="dropdown-item" href="#">Signup</a></li></Link>
              <li><a class="dropdown-item" href="#">Login</a></li>
              <li><a class="dropdown-item" href="#">Log Out</a></li>
            </ul>
          </li>
      </div>
        <div className="search-container">
          <input className={!searchBar?"":"d-none"} type="text"/>
          <i className="bx bx-search-alt-2 bx-flip-horizontal px-2" onClick={searchBarToggle}></i>
        </div>
      </div>
  </div>
</div>
    )
};

export default Navbar