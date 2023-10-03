import { wait } from "@testing-library/user-event/dist/utils";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const LocationContext= createContext(null);
let stopFetch = true;



export const LocationContextProvider=(props)=>{


          

    const emergencyBtn= [{name:"Police Station",icon:"", id:"police%20station"},
    {name:"Hospital", icon:"", id:"hospital"},
    {name:"Fire Service",icon:"", id:"fire%20service"},
    {name: "Road Safety", icon:"", id:"road%20safety"}]

   
// login context --------------------------
// ----------------------------------------
const [username, setusername]= useState("")
const [password, setpassword]= useState("")
const [error, seterror]= useState("")
const [emergencyMap, setemergencyMap] = useState("")
    

const handleUser=(e)=>{
    setusername(e.target.value);
}
const handlePassword=(e)=>{
    setpassword(e.target.value);
}

// ------------------------------------------
//--------------------------------------------


        
const [locations, setlocations]= useState([]);
const[cityLocations, setcityLocations]=useState([]);
const [cityValue, setCityValue]= useState("")
const [loading, setloading]= useState();
const [countryValue, setcountryValue]= useState("");
const [stateValue, setstateValue]= useState(null);
const [stateActive, setstateActive]=useState(false)

const countryUpdate=(event)=>{
    setcountryValue(event)
    
};

const stateUpdate=(event)=>{
    setstateValue(event)
    setstateActive(true)
};

const cityFunction=(e)=>{
    setCityValue(e)
}

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
  
    fetchLocations()

     
},[])


 useEffect(()=>{
        if(stateValue!== null){
    const city =async()=>{
        var data ={country:`${countryValue}`,
     state:`${stateValue}`}
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
  
    // ..........map datas.............

    }
city()
} 
},[stateValue]);




    
function mapFunction(e){
    setemergencyMap(e)
    
}



const api =`https://maps.google.com?q=${stateValue}+${cityValue}+${emergencyMap}&output=embed`


const locationDataValue = {locations, loading, cityLocations, countryValue, countryUpdate,stateValue,stateUpdate,
     username, password,handleUser,handlePassword,emergencyMap, mapFunction,api,emergencyBtn,  cityFunction}

    return(
        <LocationContext.Provider value={locationDataValue}>{props.children}</LocationContext.Provider>
    )
}






    
