import React, { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {Swiper,SwiperSlide} from "swiper/react";
import "swiper/swiper-bundle.css";
import{ useState} from "react";
import {LocationContext} from "../../locationsContext"
import { UserDetailsContext } from "../../user_details";

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
            txt_ref
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
                    { Timeline_data.map(data=>(
                       <div className='all-post-container mt-1'style={{borderRadius:"1rem"}} data_key={data.user_id}>
                        <div className="all-post-layer mx-4 ">
                            <div className="profile-layer d-flex" style={{justifyContent:"space-between"}}>
                                <div className="d-flex">
                                    <div className="profile-pics">
                                        <img src={data.user_img?data.user_img:"unknown.png"} alt=""/>
                                    </div>
                                    <div className="posters-details fw-lighter mx-3">
                                        <h4 className="fw-bold">{data.user}</h4>
                                        2days ago
                                    </div>
                                 </div>
                                <div>
                                    <i className="bx bx-dots-horizontal"></i>
                                 </div>
                            </div>
                            <div className="posters-messages ">
                               {data.message}
                           {data.media? <div style={{width:"100%", height:"20rem", overflow:"hidden",marginTop:"1rem"}}>
                                <img src={data.media}  />
                            </div>:""}
                            
                        </div>
                 
                        <div className="posts-icons-container">
                            <div className="posts-icons-layer">
                                <i className="bx bx-show">Witness <span><p>1.5k</p></span></i>
                                <i className="bx bx-like ">Confirmed <span><p>1.5k</p></span></i>
                                <i className="bx bx-dislike ">Reject <span><p>1.5k</p></span></i>
                                <i className="bx bx-message ">Message <span><p>1.5k</p></span></i>
                            </div>
                        </div>
                        <div className="user-profile-conatiner " style={{boxShadow:"none"}}>
                            <div className="user-profile-layer px-0 d-flex" style={{justifyContent:"space-between"}}>
                        
                                <div className="profile-pics " style={{height:"1.9rem", width:"1.9rem"}}>
                                    <img src={Image} alt="" />
                                </div>
                                <div className="profile-layer response-post" style={{ width:"90%", backgroundColor:"rgba(245, 245, 245)",borderRadius:"1rem"}}>
                                    <div className="profile-field-textarea" style={{width:"100%"}}>
                                        <span style={{position:"absolute",backgroundColor:"rgba(245, 245, 245)", height:"0.8rem", width:"0.8rem", rotate:"45deg", left:"-0.4rem", top:"0.7rem"}}>

                                        </span>
                                        <textarea  name="" id="" cols="30" rows="10" placeholder="Make a comment"
                                        style={{height:"30px", width:"100%", borderRadius:"1rem", backgroundColor:"rgba(245, 245, 245)", color:"black",paddingInline:"0.6rem"}}>
                                        </textarea>
                                    </div>
                        
                                    <div className="post-textarea-icons" style={{justifyContent:"space-between", alignItems:"center", color:"gray"}}>
                                        <div>
                                            <i className="bx bx-image"></i>
                                            <i className="bx bx-video"></i>
                                            <i className="bx bx-camera"></i>
                                        
                                        </div>
                                
                                        <i className="bx bx-send"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    
                        ))}
                    
               
            </div>
        </div>
    </div>
    )
};

export default Timeline;