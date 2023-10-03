import { Route, Navigate } from "react-router-dom";
import SignInPage from "./pages/signIn/signIn";
import { useContext } from "react";
import { UserDetailsContext } from "./user_details";
import Home from "./pages/home/home";

export const PrivateRoute =()=>{
    let {users} = useContext(UserDetailsContext)
  
    if(users){
        return <Navigate to="/home"/>
    }else{
        return <SignInPage/>
        
    }
   
}

export const HomePageRoute=()=>{
    let {users}= useContext(UserDetailsContext)

    if(users){
        return <Home/>
      
    }else{
       
        return <Navigate to="/"/>
    }
}

