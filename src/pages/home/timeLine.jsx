import React, { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {Swiper,SwiperSlide} from "swiper/react";
import "swiper/swiper-bundle.css";
import{ useState} from "react";
import {LocationContext} from "../../locationsContext"
import { UserDetailsContext } from "../../user_details";
import TimeLineUpdate from "./timeline_update";

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
            txt_ref,
            timeline_reaction
           } = useContext(UserDetailsContext)

    // console.log(countryValue)

        
    return(
        <div className="post-field-container" style={{position:"relative", boxSizing:"border-box"}}>
            <div className="user-profile-conatiner">
                <div className="user-profile-layer">
                    <div className="profile-layer d-flex" style={{justifyContent:"space-between"}}>
                        <div className="profile-pics ">
                            <img src={Image } alt=""/>
                        </div>
    
                        <div className="profile-field-textarea">
                            <textarea ref={txt_ref} name="" id="" cols="30" rows="10" placeholder="Make a notification" onChange={timeline_message_handler} ></textarea>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end user-message-categories">
                        
                        <div className="post-textarea-icons">
                            <label class="" style={{cursor:"pointer"}}>
                                <i className="bx bxs-image">I</i>
                                <input type="file" class="d-none" onChange={timeline_media_handler}/>
                            </label>
                            <label class="" style={{cursor:"pointer"}}>
                                <i className="bx bxs-video">V</i>
                                <input type="file" class="d-none" onChange={timeline_media_handler}/>
                            </label>
                            <label class="" style={{cursor:"pointer"}}>
                                <i className="bx bxs-camera">C</i>
                                <input type="file" class="d-none" onChange={timeline_media_handler}/>
                            </label>
                            <button onClick={timeline_api}>Post</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="post-filter">
            <form>
                
                <select  name="" id="country" onChange={(e)=>countryUpdate(e.target.value)}>
                    <option>Country</option>
                    <optgroup>
                        {locations.map((location, index)=>(
                        <option  key={index}>{location.name}</option>
                        ))}
                    </optgroup>
                   
                </select>
            
                
                <select name="" id="state" onChange={(e)=>stateUpdate(e.target.value)}>
                    <option>State</option>
                    {locations.map((location,index)=>(
                    <>
                        {countryValue === location.name?
                        <optgroup key={index}>
                        {location.states.map((state,subIndex)=>(
                            <option key={subIndex}>{state.name}</option>
                        ))}
                
                        </optgroup>:""} 
            
                    </>
                        ))} 
                </select>

                {stateValue === ""}
                <select name="" id="state" onChange={(e)=>cityFunction(e.target.value)}>
                <option>City</option>
                <optgroup>
                    {cityLocations.map((city)=>(
                        <option >{city}</option>
                        ))}
                </optgroup>
                
                </select>
                
            </form>
                
            </div>
            
            <div className="post-field-layer ">
                
                <div className="posts-container" >
                    <TimeLineUpdate/>
               
            </div>
        </div>
    </div>
    )
};

export default Timeline;