import React, { useContext, useState} from "react";
import { Link } from "react-router-dom";
import {Swiper,SwiperSlide} from "swiper/react";
import "swiper/swiper-bundle.css";
import {LocationContext} from "../../locationsContext"


const SignInPage =()=>{
  const { username, password,handleUser,handlePassword,register}= useContext(LocationContext)
  console.log("")

  const [signIn, setsignIn]= useState(true)
  const signInPage =()=>{
    setsignIn(false)
  };
function signUpPage(){
    setsignIn(true)
}
    return(
        <div>
            <div class={signIn?"vh-100 sign-in":"d-none"} style={{backgroundColor: "rgba(245, 245, 245"}}>
                <div class="container py-5 h-100"> 
                    <div class="row d-flex justify-content-center align-items-center h-100">
                         <div class="col col-xl-10">
                             <div class="card" style={{borderRadius: "1rem"}}>
                                 <div class="row g-0">
                                    <div class="col-md-6 col-lg-5 d-none d-md-block">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp" alt="login form" class="img-fluid" style={{borderRadius: "1rem 0 0 1rem"}} />
                                    </div> 
                                    <div class="col-md-6 col-lg-7 d-flex align-items-center">
                                        <div class="card-body p-4 p-lg-5 text-black">

                                            <form onSubmit={register}>
                                                <div class="d-flex align-items-center mb-3 pb-1">
                                                    <i class="fas fa-cubes fa-2x me-3" style={{color: "#ff6219"}}></i>
                                                    <span class="h1 fw-bold mb-0">Logo</span>
                                                </div>
                                                <h5 class="fw-normal mb-3 pb-3" style={{letterSpacing: "1px"}}>Sign into your account</h5>
                                                <div class="form-outline mb-4">
                                                    <input type="text" id="form2Example17" class="form-control form-control-lg" name="username" placeholder="Username" onChange={handleUser}
                                                    />
                                                        <label class="form-label" for="form2Example17"></label>
                                                </div>
                                                <div class="form-outline mb-4">
                                                    <input type="text" id="form2Example27" name="password" class="form-control form-control-lg" placeholder="Password" onChange={handlePassword} />
                                                        <label class="form-label" for="form2Example27" ></label>
                                                </div> 
                                                <div class="pt-1 mb-4">
                                                    <Link to="/home"><button class="btn btn-dark btn-lg btn-block" type="submit">Login</button>  </Link>
                                                        </div>
                                                            <a class="small text-muted" href="#!">Forgot password?</a>
                                                                <p class="mb-5 pb-lg-2" style={{color: "#393f81"}}>Don't have an account?
                                                                    <a href="#!" style={{color: "#393f81"}} onClick={()=>signInPage()}>Register here</a>
                                                                </p>
                                                                <a href="#!" class="small text-muted">Terms of use.</a>
                                                                <a href="#!" class="small text-muted">Privacy policy</a>
                                            </form>
                                        </div> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         
            <div class={signIn?"d-none":"h-100 sign-up"} style={{backgroundColor: "rgba(245, 245, 245"}}>
                <div class="container py-5 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col">
                            <div class="card card-registration my-4">
                                <div class="row g-0">
                                    <div class="col-xl-6 d-none d-xl-block">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                                        alt="Sample photo" class="img-fluid"
                                        style={{borderTopLeftRadius: ".25rem", borderBottomLeftRadius: ".25rem"}} />
                                    </div>
                                    <div class="col-xl-6">
                                        <div class="card-body p-md-5 text-black">
                                            <h3 class="mb-5 text-uppercase">SignUp your account</h3>
                                        <div class="row">
                                    <div class="mb-4">
                                        <div class="form-outline">
                                            <input type="text" id="form3Example1m" class="form-control form-control-lg" placeholder="Username" />
                                            <label class="form-label" for="form3Example1m"></label>
                                        </div>
                                    </div>
                                    <div class="mb-4">
                                        <div class="form-outline">
                                            <input type="password" id="form3Example1n" class="form-control form-control-lg" placeholder="Password" />
                                            <label class="form-label" for="form3Example1n"></label>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-outline mb-4">
                                <input type="password" id="form3Example97" class="form-control form-control-lg" placeholder="Confirm Password" />
                                    <label class="form-label" for="form3Example97"></label>
                                </div>
                                <select class="select form-control-lg mb-5 "  style={{width:"80%", borderColor:" rgb(173, 173, 215)"}}>
                                <option value="1">State</option>
                                </select>
                                <label class="" for="state"></label>

                            <div class="d-flex mb-4" style={{justifyContent:"space-between"}}>

                                <select class="select form-control-lg "  style={{width:"48%", borderColor:" rgb(173, 173, 215)"}}>
                                <option value="1">City</option>
                                </select>
                                <label class="" for="state"></label>
                            
                           

                                <select class="select  form-control-lg"  style={{width:"48%", borderColor:" rgb(173, 173, 215)"}}>
                                <option value="1">Community</option>
                                </select>
                                <label class="form-check-label" for="city"></label>
                            </div>
                    
                        <div class="d-flex justify-content-end pt-3">
                            <button type="button" class="btn btn-danger btn-lg">Reset all</button>
                            <button type="button" class="btn btn-dark btn-lg ms-2" onClick={()=>signUpPage()}>Submit form</button>
                        </div>
                    </div>
                </div>
            </div>
        </div> </div> </div> </div> </div>
        </div>

    )
}

export default SignInPage;