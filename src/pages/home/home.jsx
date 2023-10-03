import {React} from "react";
import Timeline from "./timeLine";
import Emergency from "./emergency";
import Post from "./postField";
import { Setting } from "./setting";



const Home=()=>{
    return(
            <div className="home-container">
                <div className="home-layer">
                    <Post/>
                    <Timeline/>
                    <Emergency/>
                    <Setting/>
                </div>
            </div>
            

    )
}

export default Home;