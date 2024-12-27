import { useState, useEffect, useRef } from 'react';
//import './Servidores.css'

function DropdownMenu({valorIP, valorReglas, valorMods}) {
  const [isOpen, setIsOpen] = useState(false);
  const [valorIp, setValorIp] = useState(true)
  const [valorReglasC, setValorReglas] = useState(true)
  const [valorListadeMods, setValorListadeMods] = useState(true)
  const dropdownRef = useRef(null);

  const cambiarValorIp = ()=>{
    setValorIp(!valorIp)
    console.log(valorIp)
  }

  const enviarValorIp = ()=>{
    valorIP(valorIp)
  }

  const cambiarValorReglas = ()=>{
    setValorReglas(!valorReglasC)
    console.log(valorReglasC)
  }

  const enviarValorReglas = ()=>{
    valorReglas(valorReglasC)
  }

  const cambiarValorListadeMods = ()=>{
    setValorListadeMods(!valorListadeMods)
    console.log(valorListadeMods)
  }

  const enviarValorListadeMods = ()=>{
    valorMods(valorListadeMods)
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
    <div className="dropdown" ref={dropdownRef}>
      <div className="dropdowntext" onClick={toggleMenu}>Servidor</div>
      <ul className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
        <li  onClick={()=>{toggleMenu(); cambiarValorListadeMods(); enviarValorListadeMods()}} className='listaMods'>Mods</li>
        <li  onClick={()=>{toggleMenu(); cambiarValorReglas(); enviarValorReglas()}} className='rules'>Reglas</li>
        <li  onClick={()=>{toggleMenu(); cambiarValorIp(); enviarValorIp()}} className='ip'>Ip</li>
      </ul>
    </div>
    </>
  );
}

export {DropdownMenu}
