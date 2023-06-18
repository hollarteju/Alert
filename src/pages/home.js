import { useState, useEffect } from "react";

const alertsCategories=["All","Danger","Warning"]
const [alertActive, setalertActive]=useState("All");

const AlertActive=(category)=>{
        setalertActive(category)
    };