import React from 'react';
import { useState, useContext } from "react";
import { UserDetailsContext } from '../../user_details';

const Post=()=>{
   let {
    Token,
    Edit_user,
    Image,
    Avatar,
    Bio,
    user_edit_value,
    user_username
    }=  useContext(UserDetailsContext)
    
    return(
        <div  className='user-side-bar'>
            <div className='user-info'>
                <div className='user-image-container'>
                    <img src={Avatar?Avatar:"unknown.png"} alt="" />
                    <div id='user-profile-pics'>
                        <img id='user-img' src={Image?Image:"unknown.png" } alt=""/>
                    </div>
                </div>
                
                <div className='user-name'>
                    <h5>{user_username}</h5>
                    
                    <p>{Bio}</p>
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