import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import {Swiper,SwiperSlide} from "swiper/react";
import "swiper/swiper-bundle.css";
import{ useState} from "react";
import {LocationContext} from "../../locationsContext"

const Alerts=()=>{

    const alertsCategories=["All","Danger","Warning"]
    const [alertActive, setalertActive] = useState("All");

    const AlertActive=(items)=>{
        setalertActive(items)
    }

    const {locations, loading, cityLocations, countryValue, countryUpdate,stateValue,stateUpdate}= useContext(LocationContext)

 


        
    return(
        <div className="post-field-container" style={{position:"relative", boxSizing:"border-box"}}>
            <div className="user-profile-conatiner">
                <div className="user-profile-layer">
                    <div className="profile-layer d-flex" style={{justifyContent:"space-between"}}>
                        <div className="profile-pics ">
                            <img src="plane.jpg " alt="" />
                        </div>

                        <div className="profile-field-textarea">
                            <textarea name="" id="" cols="30" rows="10" placeholder="Make a notification"></textarea>
                        </div>
                    </div>
                    <div className="d-flex user-message-categories" style={{justifyContent:"space-between"}}>
                         <select name="" id="">
                               <option value="">Choose</option>
                            <optgroup>
                                <option value="">Danger</option>
                                <option>Warning</option>
                            </optgroup>
                        </select>
                        <div className="post-textarea-icons">
                                <i className="bx bxs-image"></i>
                                <i className="bx bxs-video"></i>
                                <i className="bx bxs-camera"></i>
                            
                                <button>Post</button>
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
                        <option key={index}>{location.name}</option>
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
                <select name="" id="state">
                <option>City</option>
                <optgroup>
                    {locations.map((location)=>(
                        <option >{location.name}</option>
                        ))}
                </optgroup>
                
                </select>
                
            </form>
                <div className="post-field">
                    <div className="post-field-categories fw-light "style={{fontSize:"small"}}>
                        <ul className="d-flex">
                            {alertsCategories.map((alerts)=>
                            <li className={alerts === alertActive?"post-field-categories-active":"post-field-categories-inactive"} onClick={()=>AlertActive(alerts)}>
                                {alerts}
                            </li>)}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="post-field-layer">
                
                <div className="posts-container">
                <div className={alertActive === 'All'?'all-post-container ':'d-none'}
                 style={{marginBottom:"1rem", borderRadius:"1rem"}}>
                    <div className="all-post-layer mx-4">
                    <div className="profile-layer d-flex" style={{justifyContent:"space-between"}}>
                        <div className="d-flex">
                        <div className="profile-pics">
                            <img src="plane.jpg " alt="" />
                        </div>
                        <div className="posters-details fw-lighter mx-3">
                            <h4 className="fw-bold">Name</h4>
                            Country/State/Area
                        </div>
                        </div>
                        <div>
                            <i className="bx bx-dots-horizontal"></i>
                        </div>
                    </div>
                    <div className="posters-messages ">
                            kdslndnnldnjndjnsnc dn sdd ndncdj sdind cdndc dsdd
                            dkncdkcds cdisndckdc
                            sd,mdkcdlcmdlcmds
                            sdkndssd
                    </div>
                       <span style={{fontSize:"medium", fontWeight:"lighter",color:"gray", fontStyle:"italic"}}>  2days ago</span> 
                    <div className="posts-icons-container">
                        <div className="posts-icons-layer">
                            <span className="bx bx-show">Witness(6k)</span>
                            <span className="bx bx-like ">Confirmed(500)</span>
                            <span className="bx bx-dislike ">Reject(0)</span>
                            <span className="bx bx-message ">Message(5.7k)</span>
                        </div>
                    </div>
                <div className="user-profile-conatiner ">
                    <div className="user-profile-layer px-0 d-flex" style={{justifyContent:"space-between"}}>
                       
                            <div className="profile-pics " style={{height:"1.9rem", width:"1.9rem"}}>
                                <img src="plane.jpg " alt="" />
                            </div>
                        <div className="profile-layer " style={{ width:"90%", backgroundColor:"rgba(245, 245, 245)",borderRadius:"1rem"}}>
                            <div className="profile-field-textarea" style={{width:"100%"}}>
                                <span 
                                style={{position:"absolute",backgroundColor:"rgba(245, 245, 245)", height:"0.8rem", width:"0.8rem", rotate:"45deg", left:"-0.4rem", top:"0.7rem"}}>

                                </span>
                                <textarea name="" id="" cols="30" rows="10" placeholder="Make a comment"
                                 style={{height:"30px", width:"100%", borderRadius:"1rem", backgroundColor:"rgba(245, 245, 245)", color:"black",paddingInline:"0.6rem"}}>
                                </textarea>
                            </div>
                       
                            <div className="post-textarea-icons" style={{justifyContent:"space-between", alignItems:"center", color:"gray"}}>
                                <div>
                                    <i className="bx bx-image"></i>
                                    <i className="bx bx-video"></i>
                                    <i className="bx bx-camera"></i>
                                
                                </div>
                               
                                <i className="bx bx-send" style={{fontSize:"large"}}></i>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                </div>
               
            </div>
            </div>
            <div className="post-field-layer">
                
                <div className="posts-container">
                    <div className={alertActive === 'All'?'all-post-container ':'d-none'}
                    style={{marginBottom:"1rem", borderRadius:"1rem"}}>
                        <div className="all-post-layer mx-4">
                        <div className="profile-layer d-flex" style={{justifyContent:"space-between"}}>
                            <div className="d-flex">
                            <div className="profile-pics">
                                <img src="plane.jpg " alt="" />
                            </div>
                            <div className="posters-details fw-lighter mx-3">
                                <h4 className="fw-bold">Name</h4>
                                Country/State/Area
                            </div>
                            </div>
                            <div>
                                <i className="bx bx-dots-horizontal"></i>
                            </div>
                    </div>
                    <div className="posters-messages ">
                            kdslndnnldnjndjnsnc dn sdd ndncdj sdind cdndc dsdd
                            dkncdkcds cdisndckdc
                            sd,mdkcdlcmdlcmds
                            sdkndssd
                    <div style={{width:"100%", height:"20rem", overflow:"hidden",marginTop:"1rem"}}>
                        <img src="plane.jpg" alt="" />
                    </div>
                            
                    </div>
                        <span style={{fontSize:"medium", fontWeight:"lighter",color:"gray", fontStyle:"italic"}}>  2days ago</span> 
                    <div className="posts-icons-container">
                        <div className="posts-icons-layer">
                            <span className="bx bx-show">Witness(2k)</span>
                            <span className="bx bx-like ">Confirmed(500)</span>
                            <span className="bx bx-dislike ">Reject(0)</span>
                            <span className="bx bx-message ">Message(5.7k)</span>
                        </div>
                    </div>
                <div className="user-profile-conatiner ">
                    <div className="user-profile-layer px-0 d-flex" style={{justifyContent:"space-between"}}>
                       
                            <div className="profile-pics " style={{height:"1.9rem", width:"1.9rem"}}>
                                <img src="plane.jpg " alt="" />
                            </div>
                        <div className="profile-layer " style={{ width:"90%", backgroundColor:"rgba(245, 245, 245)",borderRadius:"1rem"}}>
                            <div className="profile-field-textarea" style={{width:"100%"}}>
                                <span 
                                style={{position:"absolute",backgroundColor:"rgba(245, 245, 245)", height:"0.8rem", width:"0.8rem", rotate:"45deg", left:"-0.4rem", top:"0.7rem"}}>

                                </span>
                                <textarea name="" id="" cols="30" rows="10" placeholder="Make a comment"
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
               
            </div>
            </div>
        </div>
    )
};

export default Alerts;