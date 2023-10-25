import {React, useEffect, useState, useContext} from "react";
import { UserDetailsContext } from "../../user_details";

function TimeLineUpdate(){
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
    return(
        <>
        
           {Timeline_data.map(data=>(
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
                     <i className="bx bx-show" onClick={()=>timeline_reaction(data.user_id, "witness")}>witness<span><p>1.5k</p></span></i>
                     <i className="bx bx-like " onClick={()=>timeline_reaction(data.user_id, "like")}>Confirmed <span><p>1.5k</p></span></i>
                     <i className="bx bx-dislike " onClick={()=>timeline_reaction(data.user_id, "dislike")}>Reject <span><p>1.5k</p></span></i>
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
    </>
    )
   
     
}

export default TimeLineUpdate;