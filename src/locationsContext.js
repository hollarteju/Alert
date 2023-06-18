import { wait } from "@testing-library/user-event/dist/utils";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const LocationContext= createContext(null);
let stopFetch = true;



export const LocationContextProvider=(props)=>{

// login context --------------------------
// ----------------------------------------
const [username, setusername]= useState("")
const [password, setpassword]= useState("")
const [error, seterror]= useState("")

const handleUser=(e)=>{
    setusername(e.target.value);
}
const handlePassword=(e)=>{
    setpassword(e.target.value);
}

const register=async(e)=>{
    e.preventDefault()

    try{
        const response = await fetch("http://127.0.0.1:8000/register",{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body: JSON.stringify({username, password}),
    })
    const data = await response.json()
    if(response.ok){
        setusername("")
        setpassword("")
        seterror("")
    }
    else{
        seterror(data.error);
    }
    }
    catch(error){
        seterror("Error")
    }
};
// ------------------------------------------
//--------------------------------------------


        
const [locations, setlocations]= useState([]);
const[cityLocations, setcityLocations]=useState([]);
const [loading, setloading]= useState();
const [countryValue, setcountryValue]= useState("");
const [stateValue, setstateValue]= useState("");
const [stateActive, setstateActive]=useState(false)

const countryUpdate=(event)=>{
    setcountryValue(event)
    
};

const stateUpdate=(event)=>{
    setstateValue(event)
    setstateActive(true)
};

useEffect(()=>{
    const fetchLocations=async()=>{
        try{
            const response = await axios.get("https://countriesnow.space/api/v0.1/countries/states")
           
            setlocations(response.data.data)
            
            
            
        }
        catch(error){
            console.log("error:", error);
            
        }
            
        
    };
    const city =async()=>{

            var data ={country:"nigeria",
         state:"lagos"}
        axios({
            method:"post",
            header:{},
            url: "https://countriesnow.space/api/v0.1/countries/state/cities",
            data:data,
        }).then((response)=>{
            setcityLocations(response.data.data)
        }).catch((error)=>{
            console.log(error)
        });
      
        
    }
    fetchLocations()
    city()
     
},[])

const locationDataValue = {locations, loading, cityLocations, countryValue, countryUpdate,stateValue,stateUpdate,
     username, password,handleUser,handlePassword,register}

    return(
        <LocationContext.Provider value={locationDataValue}>{props.children}</LocationContext.Provider>
    )
}






    
