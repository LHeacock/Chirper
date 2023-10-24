import React from "react";

function Chirp(props){
    return(
        <div>
            <h3>{props.username}</h3>
            <p>{props.content}</p>
        </div>
    )
}

export default Chirp