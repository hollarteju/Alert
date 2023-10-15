import React from "react";
import { useContext } from "react";
import { UserDetailsContext } from "../../user_details";
import { Link } from "react-router-dom";

export const Setting=()=>{
    
    const {image_upload,
        Image,
        imageData,
        Token, profile_picture,handleCloudinary,
        Avatar,
        avatar_upload
       } = useContext(UserDetailsContext)
    return(
<div class="px-5 h-100 sign-up" style={{backgroundColor: "rgba(245, 245, 245"}}>
            
            <div class="container px-5 py-5 mx-5 h-100">
                
                <div class="row d-flex mx-5  justify-content-center align-items-center h-100">
                    
                    <div class="col px-5 mx-5">
                        
                        <div class="card card-registration px-5 my-4 mx-5">
                        
                            <div class="row g-0">
                            
                                <div class="col-xl-12 px-5">
                                    
                                    <div class="card-body p-md-5 text-black">
                                    <form onSubmit="">
                                        <span class="py-5 my-5">Take control of your online presence.</span>
                                        <div class="row">
                                            
                                            <div class="my-4">
                                    
                                
                                                <div class="form-outline d-flex">
                                                    
                                                    <input type="text" name="username" id="form3Example1m" class="form-control form-control-lg" placeholder="Username" onChange="" value={Token.username} disabled/>
                                                    <span class="btn btn-dark btn-sm mx-2 text-align-center">Edit...</span>
                                                </div>
                                            </div>
                                       
                                    </div>
                                       
                                        <div class=" d-flex mb-4 align-items-center justify-content-space-between bg-light  rounded-pill">
                                            
                                            <div className='profile-pics'>
                                                <img src={Image == null?"unknown.png": Image } alt=""/>
                                            </div>
                                            <label class="col-xl-10" style={{cursor:"pointer"}}>
                                                <span class="mx-4" id="pics_click">Click to change profile picture</span>
                                                <input class="d-none" type="file" accept="image/*" name="img"  onChange={image_upload}/>
                                            </label>
                                           
                                        </div>
                                 
                                        <div class=" d-flex align-items-center justify-content-space-between bg-light  rounded-pill">
                                            
                                            <div className='profile-pics'>
                                            <img src={Avatar == null?"unknown.png": Avatar } alt=""/>
                                            </div>
                                            <label class="col-xl-10" style={{cursor:"pointer"}}>
                                                <span class="mx-4">Click to change Avatar</span>
                                                <input type="file" class="d-none" onChange={avatar_upload}/>
                                            </label>
                                           
                                        </div>
                                        
                                        <div class="d-flex justify-content-end pt-3">
                                            <Link to="/home"><span type="span" class="btn btn-danger btn-lg"  >Cancel</span></Link>
                                            <span type="submit" class="btn btn-dark btn-lg ms-2"  onClick={handleCloudinary} >Save</span>
                                        </div>
                                       
                                        </form>
                                    </div>
                                    
                                </div>
                                
                            </div>
                        </div> 
                    </div> 
                </div> 
            </div> 
        </div>
    )};

    export default Setting;