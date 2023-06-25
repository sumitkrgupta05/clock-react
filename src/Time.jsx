import React, { useState } from "react";


const Time = () => {
    const time = new Date().toLocaleTimeString();
    const [ctime,setCtime] = useState(time);

    const update = () =>{
        let newTime= new Date().toLocaleTimeString();
        setCtime(newTime);
    } 
    
    return(
    <>
        <h1 className="heading">CLOCK</h1>
        <div className="middle">
            <h3>{ctime}</h3>
            <button className="btn" onClick={update}>Update</button>
        </div>
        </>
    );
};

export default Time;
