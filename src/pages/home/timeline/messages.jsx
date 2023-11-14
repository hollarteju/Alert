import React from "react";
import { UserDetailsContext } from "../../../user_details";

function Messages(props){
let {toggle, id, messages} = props

return(
    <>
        <div className={toggle === id?"my-5":"d-none"}>
            {messages.map(data =>(
            <>
                <div className="d-flex timeline_messages_container my-2 position-relative" key={data.timeline_id}>
                    <div className="profile-pics my-1">
                        <img src={data.profile_pics?data.profile_pics:"unknown.png"} alt="" />
                    </div>
                    <div className="ms-5 py-1">
                        <b>{data.user}</b>
                        <p>{data.message}</p>
                    </div>
                
                </div>
                <div className="media w-50 position-relative">
             
                    <img src={data.media} alt="" className="w-100"/>
                </div>
            </>
            ))}
           
        </div>
       
    </>
);
};

export default Messages;