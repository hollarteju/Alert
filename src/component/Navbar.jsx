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
    <Link to="/home" style={{textDecoration:"none"}}> <a className="navbar-brand fs-4  fw-bold"href="" onClick={a}>Lag.</a></Link>

    <div className="d-flex">
      <span id="p-tag" onClick={imageData}>{Token && <p >{Token.username[0]}</p> }</span>
      <div id="nav-icons">
        {users && <i class="bx bxs-cog"></i>}
        {users && <i class="bx bx-log-out-circle" id="log-out-icon" onClick={log_out}></i>}
      </div>
      
      </div>
  </div>
  
</div>
    )
};

export default Navbar