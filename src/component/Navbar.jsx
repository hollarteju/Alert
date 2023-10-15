import React from "react";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { UserDetailsContext } from "../user_details";

const Navbar=()=>{
 
let {
  user,
  searchBar,
  userToggle,
  searchBarToggle,users,
  log_out,profile_picture,
Token, imageData}=  useContext(UserDetailsContext)
function a(){
  console.log()
}

    return(
<div class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid px-0">
    <Link to="/home" style={{textDecoration:"none"}}> <a className="navbar-brand fs-4  fw-bold" href="" onClick={a}>Lag.</a></Link>

    <div className="d-flex">
      <span id="p-tag" onClick={imageData}>{Token && <p >{Token.username[0]}</p> }</span>
      <div id="nav-icons" class="d-flex">
        <Link to="/setting"> {users && <i class="bx bxs-cog mx-3 text-dark"></i>}</Link>
        {users && <span class="d-flex align-items-center bg-dark text-white px-1 fs-7" onClick={log_out}>
          <i class="bx bx-log-out " id="log-out-icon" ></i>
          <p class="my-2">Log Out</p>
        </span>}
       
      </div>
      
      </div>
  </div>
  
</div>
    )
};

export default Navbar