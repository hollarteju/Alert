import { createContext, useState,useEffect } from "react";
import jwtDecode from "jwt-decode";
import axios from "axios";
import { wait } from "@testing-library/user-event/dist/utils";


export const UserDetailsContext= createContext(null);

export const UserDetailsProvider = ({children})=>{
    const [login_data, setlogin_data]= useState([]);
    const [Access_login, setAccess_login]= useState({
        username : "",
        password : ""
    });
    const [users, setUsers]= useState(()=>localStorage.getItem("authTokens")?true: null);
    const [Token, setToken] = useState(()=>localStorage.getItem("authTokens")?jwtDecode(localStorage.getItem("authTokens")): null);
    const [UserLogo, setUserLogo] = useState("");


const [user, setuser]=useState(false);
const [searchBar, setsearchBar]=useState(false);
const [Image, setImage]= useState(null);
const [Avatar, setAvatar]= useState(null);
const [Map, setMap] = useState(false);
const [SaveImage, setSaveImage] = useState(false);
 


const userToggle=()=>{
  setuser(!user);
};


const searchBarToggle=()=>{
    setsearchBar(!searchBar);
};

const log_out=()=>{
  localStorage.removeItem("authTokens");
  setUsers(null);
  window.location.href= "/Alert";
 
};
  
    function sign_in_form(event){
        setlogin_data((datas)=>({...datas, [event.target.name]:event.target.value}));
        
    };

   
const login =async(e)=>{
    e.preventDefault();
  
    const Error = {...Access_login};
    try{
        
        const response = await fetch("http://127.0.0.1:8000/token",{
        method:"POST",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify(login_data)
    });
    const data = await response.json();
    if(response.ok){
       
        
        localStorage.setItem("authTokens", JSON.stringify(data));
        setUsers(localStorage.getItem("authTokens")? true: null);
        setToken(jwtDecode(data.access));

    }
    else{
        Error.username = "invalid Username"
        Error.password = "Invalid Password"
        console.log("bad")
       
    }
    }
    catch(error){
        Error.username = ""
        Error.password = "Please check your internet connection and try again"
        console.log("error")

    }
    setAccess_login(Error)
    
}



    
const image_upload=(event)=>{
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.onloadend = ()=>{
        setImage(reader.result);
    }
     reader.readAsDataURL(file);

    };

       
const avatar_upload=(event)=>{
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.onloadend = ()=>{
        setAvatar(reader.result)
    }
     reader.readAsDataURL(file)

    }
const save_button = document.getElementById("pics_click")

    const handleCloudinary=async(e)=>{
        e.preventDefault()
        const formData = new FormData();
        formData.append("file", Image);
        formData.append("upload_preset", "Alert_files");
        try{
        const response = await fetch("https://api.cloudinary.com/v1_1/dxsvadizj/image/upload",{
            method: "POST",
            body:formData,
        })


        if(response.ok){
        const data = await response.json()
        setImage(data.secure_url)
        save_button.textContent = "succesful"
        setSaveImage(true)
        }
        else{
            console.log("bad")
           
        }
        formData.delete("file");
        formData.append("file", Avatar)
     
        const avatar_response = await fetch("https://api.cloudinary.com/v1_1/dxsvadizj/image/upload",{
            method: "POST",
            body:formData,
        })

        
        if(avatar_response.ok){
        const data = await avatar_response.json()
        setAvatar(data.secure_url)
        save_button.textContent = "succesful"
        // setSaveImage(true)
        }
        else{
            console.log("bad")
           
        }
        }catch(error){
            console.log(error)
            
        }
     

    }
  

    const imageData =async(e)=>{
        // e.preventDefault()
        console.log("perfect")
    
        try{
            
            const response = await fetch("http://127.0.0.1:8000/save_images",{
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify({"image":Image, "username":Token.username, "avatar":Avatar})
            
        })
        if(response.ok){
            const data = await response.json()
            // setImage(data)
            console.log(data)
           
        }else{
            console.log("bad")
        }
       
        }
        catch(error){
           
            console.log(Image)
            console.log(error)

        }
    }


    const profile_picture =async(e)=>{
            // e.preventDefault()
          try{
              const response = await fetch("http://127.0.0.1:8000/profile_image_response",{
                  method:"POST",
                  headers:{"Content-Type": "application/json"},
                  body: JSON.stringify({"username":Token.username})
                  
              })
            
              const data = await response.json()
              setImage(data.image)
              setAvatar(data.avatar)

          }
          catch(error){
                console.log(Image)
          }
      }

function toggleMap(){
    setMap(!Map)
}

useEffect(()=>{
    if(users){
        profile_picture()
    }
})

useEffect(()=>{
    if(SaveImage){
    imageData();
    }
   
},[SaveImage]);

   

const UserDetailsValues = {
     Access_login,
      sign_in_form,login,
      users,
      user,
      searchBar,
      searchBarToggle,
      log_out,
      userToggle,
      Token,
      image_upload,
      Image,
      imageData,
      profile_picture,
      handleCloudinary,
      toggleMap,
      Map,
      Avatar,
      avatar_upload
     
    }

    return(
        <UserDetailsContext.Provider value = {UserDetailsValues}>{children}</UserDetailsContext.Provider>
    )
}