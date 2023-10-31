import React from "react";
import {Swiper,SwiperSlide} from "swiper/react";
import { useState } from "react";
import { useContext } from "react";
import { LocationContext } from "../../locationsContext";
import { UserDetailsContext } from '../../user_details';

const Emergency=()=>{
   
    const {emergencyMap, mapFunction,api,emergencyBtn}=useContext(LocationContext)
    const {toggleMap, Map} = useContext(UserDetailsContext)
    return(
        <div className="Emergency-container " >
            <div className="emergency-btn-container mt-3">
                EMERGENCY
               
                <Swiper className="emergency-btn pt-3 mb-2" 
       
       slidesPerView={"auto"}
       loop={false}
       spaceBetween={15}
       >
        
            {emergencyBtn.map(btn=>
             <SwiperSlide className="emergency-i form-check-inline" style={{width:"fit-content", height:"50px"}} id={btn.id} onClick={()=>mapFunction(btn.id)}>
                   <i className={emergencyMap === btn.id? "bg-dark text-white"  : ""}>{btn.name}</i> 
            </SwiperSlide>
                )}
        </Swiper>
        <span onClick={toggleMap} id="map-toggle-icon" class={Map? "bx bx-chevron-up" : "bx bxs-chevrons-down bx-fade-up"} ></span>

        {/* <Swiper className="emergency-contacts" 
       
       slidesPerView={"auto"}
       loop={false}
       spaceBetween={15}
       >
        
            {emergencyBtn.map(btn=>
             <SwiperSlide className="emergency-contact-info d-block" style={{width:"100%", height:"fit-content"}}>
                 <div style={{backgroundImage:"url(police.jpeg)",backgroundAttachment:"fixed",
                 backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover", position:"relative"}}>
                    <div className="emergency-number-address position-relative bg-white d-block" style={{height:"250px",
                    borderRadius:"1rem", top:"4rem", boxShadow:"-1px 0 5px black", border:"1px", alignContent:"center"
                    ,alignItems:"center"}}>
                        <h4>Denton Police Station</h4>
                 
                        <p className="">Muritala Muhammed Way, Ebute Metta, Lagos</p>
                        <p className="">Muritala Muhammed Way, Ebute Metta, Lagos</p>
                        
                     
                       
                    </div>
                   
                 </div>
                  
            </SwiperSlide>
                )}
        </Swiper>
                       */}
                       {/* https://maps.google.com/?ie=UTF8&t=m&q=lagos+agege+capitol%20rd+hotel&z=16&output=embed */}
                       {Map && <iframe  width="100%" height="300" style={{WebkitBorderBottomRightRadius:"10%",borderBottomLeftRadius:"10%"}}
                    referrerPolicy="no-referrer-when-downgrade" 
                    src={api}></iframe>}
                    
              
           
            </div>
            <div id="location_details">
                <div>
                    <h6>Alimosho General Hospital</h6>
                    <p>Ikotun 100265, Lagos</p>
                    <p>09067897654</p>
                </div>
               
            </div>
            
        </div>
    )
};

export default Emergency;