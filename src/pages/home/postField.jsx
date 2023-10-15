import React from 'react';
import { useState, useContext } from "react";
import { UserDetailsContext } from '../../user_details';

const Post=()=>{
   let {Token, Image, Avatar}=  useContext(UserDetailsContext)
    return(
        <div  className='user-side-bar'>
            <div className='user-info'>
                <div className='user-image-container'>
                    <img src={Avatar==null?"":Avatar} alt="" />
                    <div id='user-profile-pics'>
                        <img id='user-img' src={Image == null?"unknown.png": Image } alt=""/>
                    </div>
                </div>
                
                <div className='user-name'>
                    <h5>{Token.username}</h5>
                    
                    <p>Graphic Designer at Self Employed</p>
                </div>
                <div className='user-location'>
                    <p>Preferences</p>
                    <span class="d-flex">
                        <div>
                            <h6>{Token.state}, {Token.city}</h6>
                            <span>{Token.district}</span>
                        </div>
                        <div>
                            <h6>{Token.state}, {Token.city}</h6>
                            <span>{Token.district}</span>
                        </div>
                    </span>
                    
                
                </div>
            </div>
            <div className='news-container'>
                <h5>Trending</h5>
                <div className='news'>
                 
                    <div className='profile-pics'>
                        <img src="plane.jpg" alt="" />
                    </div>
                    <div id='trending-details'>
                        <p>Must have suiting for every day professional's...</p>
                    </div>
                </div>
                <div className='news'>
                 
                 <div className='profile-pics'>
                     <img src="plane.jpg" alt="" />
                 </div>
                 <div id='trending-details'>
                     <p>Must have suiting for every day professional's...</p>
                 </div>
             </div>
            </div>
        </div>
    )
};

export default Post;