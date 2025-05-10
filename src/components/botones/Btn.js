import React from "react";

function Btn({ texto, onClick }){
    return (
        <button class="btn" onClick={onClick}>{ texto }</button>
    )
}

export default Btn;