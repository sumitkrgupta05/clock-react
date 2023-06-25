import React, { useState } from "react";

const Autotime = () => {
    let time= new Date().toLocaleTimeString();
        // [current data , updated data] = useState(initial data)
    const [ctime, setCtime]=useState(time)

    const update = () =>{
        let newTime= new Date().toLocaleTimeString();
        setCtime(newTime);
    }

    setInterval(update,1000);

    return(
    <>
        <h1 className="heading">CLOCK</h1>
        <div className="middle">
            <h3>{ctime}</h3>
            {/* <button className="btn" onClick={update}>Update</button> */}
        </div>
    </>
    );
}

export default Autotime;