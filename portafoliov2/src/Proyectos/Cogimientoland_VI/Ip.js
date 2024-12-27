import React from "react";
import { useState } from "react";
//import './Ip.css'

let Ip = ()=>{
    const [texto, setCopyText] = useState('cogimientoland.exaroton.me')

    const copyText = () =>{
        navigator.clipboard.writeText(texto)
    }

    return(
        <div className="ipCont">
            <p className="ipText">Ip: {texto} </p>
            <div onClick={()=>{copyText(); alert('Ip copiada!')}} className="iconIp"><i class="icon fa fa-solid fa-copy"></i></div>
        </div>
    )
}

export {Ip}