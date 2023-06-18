import {React} from "react";
import Alerts from "./Alert";
import Emergency from "./emergency";
import Post from "./postField";



const Home=()=>{
    return(
            <div className="home-container">
                <div className="home-layer">
                <Post/>
                <Alerts/>
              
                <Emergency/>
                </div>
            </div>
            

    )
}

export default Home;