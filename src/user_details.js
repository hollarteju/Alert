import { createContext, useState,useEffect, useRef } from "react";
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
    const [users, setUsers]= useState(localStorage.getItem("authTokens")?true: null);
    const [Token, setToken] = useState(()=>localStorage.getItem("authTokens")?jwtDecode(localStorage.getItem("authTokens")): null);
    const [UserLogo, setUserLogo] = useState("");


const [user, setuser]=useState(false);
const [searchBar, setsearchBar]=useState(false);
const [Image, setImage]= useState(null);
const [Avatar, setAvatar]= useState(null);
const [Bio, setBio]= useState(localStorage.getItem("bio")?localStorage.getItem("bio"):"")
const [Bio_edit, setBio_edit] = useState("")
const [Map, setMap] = useState(false);
const [SaveImage, setSaveImage] = useState(false);
const [Timeline_message, setTimeline_message] = useState("")
const [Timeline_media, setTimeline_media] = useState(null)
const [Timeline_data, setTimeline_data] = useState([])

const [auth, setauth]= useState(localStorage.getItem("user")?false:true)
const [user_username, setuser_username] = useState("")
const [Edit_user, setEdit_user]= useState("")

const userToggle=()=>{
  setuser(!user);
};


const searchBarToggle=()=>{
    setsearchBar(!searchBar);
};

const log_out=()=>{
  localStorage.removeItem("authTokens");
  localStorage.removeItem("user");
  localStorage.removeItem("bio");
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
        
        const response = await fetch("http://127.0.0.1:8000//token",{
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
    
    var save_button = document.getElementById("pics_click");

    const handleCloudinary=async(e)=>{
        
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
       
        }
        else{
            console.log("bad")
           
        }
        // formData.delete("file");
        // formData.append("file", Avatar)
     
        // const avatar_response = await fetch("https://api.cloudinary.com/v1_1/dxsvadizj/image/upload",{
        //     method: "POST",
        //     body:formData,
        // })

        
        // if(avatar_response.ok){
        // const data = await avatar_response.json()
        // setAvatar(data.secure_url)
        // save_button.textContent = "succesful"
        // // setSaveImage(true)
        // }
        // else{
        //     console.log("bad")
           
        // }
        }catch(error){
            console.log(error)
            
        }
     

    }

    const handleCloudinaryAvatar=async(e)=>{
        
        const formData = new FormData();
        formData.append("file", Avatar)
        formData.append("upload_preset", "Alert_files");
        try{
        
     
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
  
    function edit_user(e){
       setEdit_user(e.target.value)
        
    }
    function edit_user_bio(e){
        setBio_edit(e.target.value)
    }
    
    const imageData =async()=>{
        let change_username;
        let change_bio;
        if(Edit_user.length < 1){
            change_username = user_username
        }else{
            change_username = Edit_user
        }
        if(Bio_edit.length < 1){
            change_bio = Bio
        }else{
            change_bio = Bio_edit
        } 
        try{
            
            const response = await fetch("http://127.0.0.1:8000//save_images",{
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify({"image":Image, "username":user_username, "user":change_username, "avatar":Avatar, "bio":change_bio})
            
        })
        if(response.ok){
            let data = await response.json()
            localStorage.removeItem("user");
            localStorage.setItem("user", data.user);
            localStorage.removeItem("bio");
            localStorage.setItem("bio", data.bio);
            setauth(false)
            // setUser_edit_value(data.user)
            // console.log(data.username)
           
            window.location.href = "/Alert"
           
        }else{
            console.log("bad")
        }
       
        }
        catch(error){
            console.log(error)

        }
    }

    const profile_picture =async()=>{
            let username = localStorage.getItem("user")?localStorage.getItem("user"):Token.username
          try{
              const response = await fetch("http://127.0.0.1:8000//profile_image_response",{
                  method:"POST",
                  headers:{"Content-Type": "application/json"},
                  body: JSON.stringify({"username":username})
                  
              })
              if(response.ok){
                const data = await response.json()
                setImage(data.image)
                setAvatar(data.avatar)
                setBio(data.bio)

               
                }
                    
              
          }
          catch(error){
                console.log(error)
          }
      }

function toggleMap(){
    setMap(!Map)
}

function timeline_message_handler(event){
    setTimeline_message(event.target.value);
   
 
};


function timeline_media_handler(event){
    setTimeline_media(event.target.value);
    
    
};

const [Users_timeline_message, setUsers_timeline_message]= useState("")
const [Users_msg_toggle, setUsers_msg_toggle] = useState("")

function users_message_handler(event, id){
    setUsers_timeline_message({"event":event.target.value, "id":id});
};

const timeline_api =async(e)=>{
    e.preventDefault()
    try{
        const response = await fetch("http://127.0.0.1:8000//timeline_update",{
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify({"username":user_username,
             "timeline_message":Timeline_message,
            "timeline_media":Timeline_media})
        })
        if(response.ok){
            window.location.href= "/Alert";
            const data = await response.json()
            console.log(data)
           
        }
    }catch(error){
        console.log(error)
    };
   
};



const timeline_api_response =async()=>{
    try{
        const response = await fetch("http://127.0.0.1:8000//timeline_res",{
            method:"POST",
            headers:{"Content-Type": "application/json"}
            // body: JSON.stringify({"username":user_username})
            //  "timeline_message":Timeline_message,
            // "timeline_media":Timeline_media})
        })
        if(response.ok){
            const data = await response.json()
            setTimeline_data(data)
           
        }
    }catch(error){
        console.log(error)
    }
   
}
const [Messages_toggle, setMessages_toggle] = useState(false)
const timeline_messages = async(id)=>{
    let message = Users_timeline_message.event
    
    try{
        const response = await fetch("http://127.0.0.1:8000//timeline_messages",{
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify({"username":user_username,"id":id ,"message":message})
        })
        if(response.ok){
            setUsers_timeline_message("")

        }
        
    }catch(error){
        console.log(error)
    }
};

const [Post_res, setPost_res] = useState([])
const timeline_messages_res = async(id)=>{
    // let message = Users_timeline_message.event
    setMessages_toggle(id)
    setPost_res([])
    try{
        const response = await fetch("http://127.0.0.1:8000/timeline_message_response",{
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify({"id":id })
        })
        if(response.ok){
            const data = await response.json();
            setPost_res(data);


        }
        
    }catch(error){
        console.log(error)
    }
    
};


const timeline_reaction = async(id,reaction)=>{
   
    try{
        const response = await fetch("http://127.0.0.1:8000//reaction_update",{
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify({"username":user_username,"id":id ,"reaction":reaction})
        })
        if(response.ok){
            const data = await response.json()
            setTimeline_data(data)
            console.log(data)
        }
        else{
            console.log("something is wrong")
        }
    }catch(error){
        console.log(error)
    }
};


const user_reaction = async()=>{
    try{
        let response = await fetch("http://127.0.0.1:8000/user_reaction",{
            method:"POST",
            headers:{"Content-Type": "application/json"},
        })
        if(response.ok){
           let data = await response.json()
          
                };
          
    }
    
    catch(error){
        console.log(error)
    };
   
};


useEffect(()=>{
    if(users){
        setuser_username(localStorage.getItem("user")?localStorage.getItem("user"):Token.username)
        setBio(localStorage.getItem("bio") && localStorage.getItem("bio"))
        profile_picture()
        timeline_api_response()
        user_reaction()
        
        if(auth){
            
            localStorage.setItem("user", Token.username)
            localStorage.setItem("bio", Bio)
        }
        
       
        // setuser_username(localStorage.getItem("user"));
    }
},[users])

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
      handleCloudinaryAvatar,
      toggleMap,
      Map,
      Avatar,
      Bio,
      avatar_upload,
      Timeline_message,
      timeline_api,
      timeline_message_handler,
      timeline_media_handler,
      timeline_api_response,
      Timeline_data,
      timeline_reaction,
      edit_user,
      edit_user_bio,
      user_username,
      timeline_messages,
      users_message_handler,
      Users_timeline_message,
      Users_msg_toggle,
      timeline_messages,
      timeline_messages_res,
      Messages_toggle,
      Post_res
     
      
     
    }
//https://hollarteju1.pythonanywhere.com
    return(
        <UserDetailsContext.Provider value = {UserDetailsValues}>{children}</UserDetailsContext.Provider>
    )
}