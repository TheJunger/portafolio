import './AllFix.css';
import logo from './Cogimientoland-LOGO.png'
import { useState, useEffect } from 'react';
import { Contador } from './Contador';
import { DropdownMenu } from './Servidores2';
import { Ip } from './Ip';
import { Reglas } from './Reglas';
import { Mods } from './Mods';
import { Lore } from './Lore';

function CogimientolandV() {

  useEffect(()=>{
    manejadorMainPage('inicio')
  },[])

  const [inicio, setInicio] = useState(false)
  const [server, setServer] = useState(false)
  const [lore, setLore] = useState(false)
  const [ipFC, setIpFC] = useState(false)
  const [reglasFC, setReglasFC] = useState(false)
  const [modsFC, setmodsFC] = useState(false)

  const manejarValorIP = (valor) =>{
    manejadorMainPage('ip')
  }

  const manejarValorReglas = (valor)=>{
    manejadorMainPage('reglas')
  }

  const manejarValorMods = (valor)=>{
    manejadorMainPage('mods')
  }

  const manejadorMainPage = (aMostrar)=>{
    console.log(aMostrar)
      setInicio(false)
      setServer(false)
      setLore(false)
      setIpFC(false)
      setReglasFC(false)
      setmodsFC(false)
      if(aMostrar == 'inicio'){
        setInicio(true)
      }
      else if(aMostrar == 'lore'){
        setLore(true)
      }
      else if(aMostrar == 'ip'){
        setIpFC(true)
      }
      else if(aMostrar == 'reglas'){
        setReglasFC(true)
      }
      else if(aMostrar == 'mods'){
        setmodsFC(true)
      }
      else{
        setInicio(true)
      }
  }

  return (
    <div id='CGLVI' className="containerCGLVI">
      <div className='logo'>
        <img src={logo}/>
      </div>
      <div className='JustASeparator'></div>
      <div className='main'>
      <div className='navbar'>
        <div className='inicio' onClick={()=>{manejadorMainPage('inicio')}}><p>Inicio</p></div>
        <DropdownMenu valorIP={manejarValorIP} valorReglas={manejarValorReglas} valorMods={manejarValorMods}/>
        <div className='lore'   onClick={()=>{manejadorMainPage('lore')}}><p>Lore</p></div>
      </div>
      <div className='dinamicPage'>
        {inicio ==true? <Contador/> : null}
        {lore ==true?   <Lore/> : null}
        {ipFC==true? <Ip/> : null}
        {reglasFC==true? <Reglas/> : null}
        {modsFC==true? <Mods/> : null}
      </div>
      </div>
    </div>
  );
}

export {CogimientolandV};
