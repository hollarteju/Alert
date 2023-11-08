import React from "react";

function Messages(props){
let {toggle, id, messages} = props
return(
    <>
        <div className={toggle == id?"my-5":"d-none"}>
            {messages.map(data =>(
            <div className="d-flex timeline_messages_container my-2" key={data.timeline_id}>
                <div className="profile-pics my-1">
                    <img src="unknown.png" alt="" />
                </div>
                <div className="ms-5 py-1">
                    <b>{data.user}</b>
                    <p>{data.message}</p>
                </div>
            </div>
            ))}
           
        </div>
       
    </>
);
};

export default Messages;