import {React, Ref, useRef} from "react";
import { useContext } from "react";
import { UserDetailsContext } from "../../user_details";
import { Link } from "react-router-dom";

export const Setting=()=>{
    const AvartInputRef = useRef(null);
    const ProfilePicInputRef = useRef(null);

    function enable_avatar_input(){
        AvartInputRef.current.disabled = false
    }
    function profile_pic_input(){
        ProfilePicInputRef.current.disabled = false
    }
    const {image_upload,
        Image,
        imageData,
        Token, profile_picture,
        handleCloudinary,
        handleCloudinaryAvatar,
        Avatar,
        Bio,
        avatar_upload,
        edit_user,
        edit_user_bio,
        user_username
       } = useContext(UserDetailsContext)
    return(
<div class="setting_con h-100 sign-up" style={{backgroundColor: "rgba(245, 245, 245"}}>
            
            <div class="container py-5  h-100 ">
                
                <div class="row d-flex px-lg-5 mx-lg-5  justify-content-center align-items-center h-100">
                    
                    <div class="col px-lg-5 mx-lg-5" id="setting_layer">
                        
                        <div class="card card-registration px-md-5 my-4 mx-md-5">
                        
                            <div class="row g-0">
                            
                                <div class="col-xl-12 px-md-5">
                                    
                                    <div class="card-body p-md-5 text-black">
                                    <form onSubmit="">
                                        <span class="py-5 my-5">Take control of your online presence.</span>
                                        <div class="row">
                                            
                                            <div class="my-4">
                                    
                                                <div class="form-outline d-flex">
                                                    
                                                    <input type="text" name="Bio" id="user" class="form-control form-control-lg" placeholder={user_username} onChange={edit_user} ref={ProfilePicInputRef} disabled/>
                                                    <span class="btn btn-dark btn-sm mx-2 text-align-center" onClick={profile_pic_input} >Edit...</span>
                                                </div>
                                               
                                            </div>
                                            <div class="my-4">
                                                <div class="form-outline d-flex s_txtarea">  
                                                    <textarea type="text" name="Bio" id="bio" class="form-control form-control-lg" placeholder={Bio} onChange={edit_user_bio} ref={AvartInputRef} disabled/>
                                                    <span class="btn btn-dark btn-sm mx-2 text-align-center" onClick={enable_avatar_input}>Edit...</span>
                                                </div>
                                            
                                            </div>
                                       
                                        </div>
                                       
                                        <div class=" d-flex mb-4 align-items-center justify-content-space-between bg-light  rounded-pill">
                                            
                                            <div className='profile-pics'>
                                                <img src={Image?Image:"unknown.png" } alt=""/>
                                            </div>
                                            <div className="d-flex ms-5">
                                                <label class="col-xl-10 ms-4" style={{cursor:"pointer"}}>
                                                    
                                                    <span class="mx-5" id="pics_click">change profile picture</span>
                                                    <input class="d-none " type="file" accept="image/*" name="img"  onChange={image_upload} />
                                                
                                                </label>
                                                <span class="btn btn-dark btn-sm ms-4 text-align-center" onClick={handleCloudinary}>Change...</span>
                                                
                                            </div>
                                           
                                           
                                        </div>
                                 
                                        <div class=" d-flex align-items-center justify-content-space-between bg-light  rounded-pill">
                                            
                                            <div className='profile-pics'>
                                            <img src={Avatar?Avatar:"unknown.png" } alt=""/>
                                            </div>
                                            <div className="d-flex ms-5">
                                                <label class="col-xl-10 ms-4" style={{cursor:"pointer"}}>
                                                    
                                                    <span class="mx-5" id="pics_A_click">change avatar picture</span>
                                                    <input class="d-none " type="file" accept="image/*" name="img"  onChange={avatar_upload} />
                                                
                                                </label>
                                                <span class="btn btn-dark btn-sm ms-4 text-align-center" onClick={handleCloudinaryAvatar}>Change...</span>
                                                
                                            </div>
                                           
                                        </div>
                                        
                                        <div class="d-flex justify-content-end pt-3">
                                            <Link to="/home"><span type="span" class="btn btn-danger btn-lg"  >Cancel</span></Link>
                                            <span type="submit" class="btn btn-dark btn-lg ms-2"  onClick={imageData} >Save</span>
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