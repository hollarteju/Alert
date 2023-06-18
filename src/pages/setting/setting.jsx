import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import {Swiper,SwiperSlide} from "swiper/react";
import "swiper/swiper-bundle.css";
import{ useState} from "react";
import {LocationContext} from "../../locationsContext"

const Setting =()=>{
    
    const {locations, loading, cityLocations, stateValue, stateUpdate,event,stateSelectValue}= useContext(LocationContext)

    return(
        <form>
        <label htmlFor="country">Country:</label>
        
        <select  name="" id="country" onChange={(e)=>stateUpdate(e.target.value)}>
        {locations.map((location, index)=>(
            <option key={index}>{location.name}</option>
            ))}
        </select>
      
        <label htmlFor="state">State:</label>
        <select name="" id="state" onChange={(e)=>stateSelectValue(e.target.value)}>
        {locations.map((location,index)=>(
            <>
           {stateValue === location.name?
            <optgroup key={index}>
                {location.states.map((state,subIndex)=>(
                     <option key={subIndex}>{state.name}</option>
                ))}
           
             </optgroup>:""} 
       
            </>
            ))} 
        </select>

        <label htmlFor="state">City:</label>
        {}
        <select name="" id="state">
          {locations.map((location)=>(
            <option >{location.name}</option>
            ))}
        </select>
    </form>
     
    )
}