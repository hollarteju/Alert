import React, { useContext, useEffect, useRef } from "react";
import "swiper/swiper-bundle.css";
import{ useState} from "react";
import {LocationContext} from "../../locationsContext"
import { UserDetailsContext } from "../../user_details";
import TimeLineUpdate from "./timeline/timeline_update";
import cloudinary from 'cloudinary-core';


const Timeline=()=>{

    const {locations,
         loading,
          cityLocations,
           countryValue,
            countryUpdate,
            stateValue,
            stateUpdate,
             cityFunction,
            }= useContext(LocationContext)

    const {image_upload,
            Image,
            imageData,
            Token, profile_picture,handleCloudinary,
            timeline_message_handler,
            timeline_media_handler,
            timeline_key,
            timeline_containter,
            timeline_api_response,
            timeline_api,
            Timeline_data,
            timeline_reaction
           } = useContext(UserDetailsContext)

           const [imageURL, setImageURL] = useState('');
           const [media_active, setMedia_active]= useState(false)
           const media = useRef(null)
           const capture=(e)=>{
                setImageURL(e.target.value)
                setMedia_active(true);
                alert("good")
           }
           const handleCaptureImage = async () => { navigator.mediaDevices.getUserMedia({video:true}).then((stream)=>{
                media.current.srcObject = stream
                alert("good")
            })
            //  // Code to capture image, e.g., using the device camera
         
            //  // Upload the captured image to Cloudinary
            //  const cloudinaryInstance = new cloudinary.Cloudinary({ cloud_name: 'dxsvadizj' });
         
            //  // Replace 'YOUR_UPLOAD_PRESET' with your Cloudinary upload preset
            //  const uploadPreset = 'Alert_files';
         
            //  const response = await cloudinaryInstance.uploader.upload(imageURL, {
            //    upload_preset: uploadPreset,
            //  });
         
            //  // Set the Cloudinary URL to state or perform other actions
            //  setImageURL(response.secure_url);
           };
         
                     

        
    return(
        <div className="post-field-container" style={{position:"relative", boxSizing:"border-box"}}>
            <div>
                <video ref={media} width="400" height="300" autoPlay class="d-none"></video>
            </div>
            <div className="user-profile-conatiner">
                <div className="user-profile-layer">
                    <div className="profile-layer d-flex" style={{justifyContent:"space-between"}}>
                        <div className="profile-pics ">
                            <img src={Image?Image:"unknown.png" } alt=""/>
                        </div>
    
                        <div className="profile-field-textarea">
                            <textarea name="" id="" cols="30" rows="10" placeholder="Make a notification" onChange={timeline_message_handler} ></textarea>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end user-message-categories">
                        
                        <div className="post-textarea-icons">
                            <label class="" style={{cursor:"pointer"}}>
                                <i className="bx bxs-file-image" ></i>
                                <input type="file" class="d-none" onChange={timeline_media_handler}/>
                            </label>
                           
                            <button onClick={timeline_api}>Post</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="post-field-layer ">
                
                <div className="posts-container" >
                    <TimeLineUpdate media={handleCaptureImage }/>
               
            </div>
        </div>
    </div>
    )
};

export default Timeline;