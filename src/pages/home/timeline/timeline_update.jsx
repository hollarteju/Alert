import {React, useEffect, useState, useContext} from "react";
import { UserDetailsContext } from "../../../user_details";
import moment from "moment"
import Messages from "./messages";

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
        timeline_reaction,
        timeline_messages,
        user_username,
        users_message_handler,
        Users_timeline_message,
        Users_msg_toggle,
        Messages_toggle,
        timeline_messages_res,
        Post_res
        
       } = useContext(UserDetailsContext);
    
   
  
    function Time(value){
        return moment(value).fromNow();
    }
    
   
    return(
        <>
        
           {Timeline_data.map(data=>(
            <div className='all-post-container mt-1'style={{borderRadius:"1rem"}} key={data.user_id}>
             <div className="all-post-layer mx-4 ">
                 <div className="profile-layer d-flex" style={{justifyContent:"space-between"}}>
                     <div className="d-flex">
                         <div className="profile-pics">
                             <img src={data.profile_pic?data.profile_pic:"unknown.png"} alt=""/>
                         </div>
                         <div className="posters-details fw-lighter mx-3">
                             <h4 className="fw-bold">{data.user}</h4>
                             {Time(data.time)}
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
            {data.reacter.includes(`${user_username}-like`) &&
            <div className="text-muted user_reaction">
                <b>You</b>
                <span class="px-1">Liked</span>
            </div>}
            {data.reacter.includes(`${user_username}-dislike`) &&
            <div className="text-muted user_reaction">
                <b>You</b>
                <span class="px-1">Disliked</span>
            </div>}
            {data.reacter.includes(`${user_username}-witness`) &&
            <div className="text-muted user_reaction">
                <b>You</b>
                <span class="px-1">Witness</span>
            </div>}
             
             <div className="posts-icons-container">
                 <div className="posts-icons-layer">
                     <i className={data.reacter.includes(`${user_username}-witness`) ?"bx bxs-show text-success":"bx bx-show "}id="witness"  onClick={()=>timeline_reaction(data.user_id, "witness")}>
                        <icon class="d-none d-md-block text-dark">witness</icon>
                        <span >{data.witness}</span>
                    </i>
                     <i className={data.reacter.includes(`${user_username}-like`) ?"bx bxs-like text-primary":"bx bx-like "} id="like" onClick={()=>timeline_reaction(data.user_id, "like")}>
                        <icon class="d-none d-md-block text-dark">Confirmed </icon>
                        <span>{data.like}</span>
                    </i>
                     <i className={data.reacter.includes(`${user_username}-dislike`) ?"bx bxs-dislike text-danger":"bx bx-dislike "} id="dislike" onClick={()=>timeline_reaction(data.user_id, "dislike")}>
                        <icon class="d-none d-md-block text-dark">Reject</icon>
                        <span>{data.dislike}</span>
                    </i>
                     <i className="bx bx-message " onClick={()=>timeline_messages_res(data.user_id)}><icon class="d-none d-md-block">Message </icon></i>
                 </div>
             </div>
                <Messages toggle={Messages_toggle} id={data.user_id} messages = {Post_res}/>
             <div className="user-profile-conatiner " style={{boxShadow:"none"}}>
                 <div className="user-profile-layer px-0 d-flex" style={{justifyContent:"space-between"}}>
             
                     <div className="profile-pics " style={{height:"1.9rem", width:"1.9rem"}}>
                         <img src={Image?Image:"unknown.png"} alt="" />
                     </div>
                     <div className="profile-layer response-post" style={{ width:"90%", backgroundColor:"rgba(245, 245, 245)",borderRadius:"1rem"}}>
                         <div className="profile-field-textarea" style={{width:"100%"}}>
                             <span style={{position:"absolute",backgroundColor:"rgba(245, 245, 245)", height:"0.8rem", width:"0.8rem", rotate:"45deg", left:"-0.4rem", top:"0.7rem"}}>
    
                             </span>
                             <textarea  name="" id="" cols="30" rows="10" placeholder="Make a comment"
                             style={{height:"30px", width:"100%", borderRadius:"1rem",
                              backgroundColor:"rgba(245, 245, 245)", color:"black",
                              paddingInline:"0.6rem"}} onChange={(event)=>users_message_handler(event,data.user_id)}
                               value={Users_timeline_message.id===data.user_id ? Users_timeline_message.event : ""}>
                             </textarea>
                         </div>
             
                         <div className="post-textarea-icons" style={{justifyContent:"space-between", alignItems:"center", color:"gray"}}>
                             <div>
                                 <i className="bx bx-image"></i>
                                 <i className="bx bx-video"></i>
                                 <i className="bx bx-camera"></i>
                             
                             </div>
                     
                             <i className="bx bx-send" onClick={()=>timeline_messages(data.user_id)}>send</i>
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