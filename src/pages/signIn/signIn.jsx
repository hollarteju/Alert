import React, {useState} from "react";
import { Link } from "react-router-dom";
import "swiper/swiper-bundle.css";
import { useContext } from "react";
import { UserDetailsContext } from "../../user_details";


const SignInPage =()=>{

    
    let {
        Access_login,
        sign_in_form,
        login
        } = useContext(UserDetailsContext)

    return(
        <div>
            <div class="vh-100 sign-in" style={{backgroundColor: "rgba(245, 245, 245"}}>
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

                                            <form onSubmit={login}>
                                                <div class="d-flex align-items-center mb-3 pb-1">
                                                    <i class="fas fa-cubes fa-2x me-3" style={{color: "#ff6219"}}></i>
                                                    <span class="h1 fw-bold mb-0">Logo</span>
                                                </div>
                                                <h5 class="fw-normal mb-3 pb-3" style={{letterSpacing: "1px"}}>Sign into your account</h5>
                                                <div class="form-outline mb-4">
                                                    <input type="text" id="form2Example17" class="form-control form-control-lg" name="username" placeholder="Username" onChange={sign_in_form} />
                                                        <p class="text-danger">{Access_login.username}</p>
                                                </div>
                                                <div class="form-outline mb-4">
                                                    <input type="password" id="form2Example27" name="password" class="form-control form-control-lg" placeholder="Password" onChange={sign_in_form}/>
                                                    <p class="text-danger">{Access_login.password}</p>
                                                </div> 
                                                <div class="pt-1 mb-4">
                                                    <button class="btn btn-dark btn-lg btn-block" type="submit">Login</button>
                                                        </div>
                                                            <a class="small text-muted" href="#!">Forgot password?</a>
                                                                <p class="mb-5 pb-lg-2" style={{color: "#393f81"}}>Don't have an account?
                                                                  <a href="/Alert/signup" style={{color: "#393f81"}}>Register here</a>
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
         
           
        </div>

    )
}

export default SignInPage;