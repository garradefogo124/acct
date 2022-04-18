import React from "react";
import '../../App.css'

function Display({value}) {
    return (
        <input type="text" className="field" value={value}/>
    );
}

export default Display;
