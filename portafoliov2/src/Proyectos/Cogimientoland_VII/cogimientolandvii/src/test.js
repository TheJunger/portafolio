//ORIGINAL

import icono1LoreOff from './Recursos pagina CGLD7/BOTONES/Lore (2).png'
import icono2ModsOff from './Recursos pagina CGLD7/BOTONES/Mods (2).png'
import icono3ReglasOff from './Recursos pagina CGLD7/BOTONES/Reglas (2).png'
import icono4IpOff from './Recursos pagina CGLD7/BOTONES/IP (2).png'
import flecha from './Recursos pagina CGLD7/flecha.png'

import icono1LoreOn from './Recursos pagina CGLD7/BOTONES/Lore.png'
import icono2ModsOn from './Recursos pagina CGLD7/BOTONES/Mods.png'
import icono3ReglasOn from './Recursos pagina CGLD7/BOTONES/Reglas.png'
import icono4IpOn from './Recursos pagina CGLD7/BOTONES/IP.png'

import { useEffect, useState } from 'react'

const MainMenu = () => {

  const [imgLore, setImgLore] = useState(icono1LoreOff)
  const [imgMods, setImgMods] = useState(icono2ModsOff)
  const [imgReglas, setImgReglas] = useState(icono3ReglasOff)
  const [imgIp, setImgIp] = useState(icono4IpOff)
  const [lastSelected, setLastSelected] = useState(null)
  const [currentSelected, setCurrentSelected] = useState(0)

  const changeImgOnEnter = (index) =>{
    console.log(index)
    setLastSelected(index)
    if(index == 0){
      setImgLore(icono1LoreOn)
      setCurrentSelected(index)
    }
    if(index == 1){
      setImgMods(icono2ModsOn)
      setCurrentSelected(index)
    }
    if(index == 2){
      setImgReglas(icono3ReglasOn)
      setCurrentSelected(index)
    }
    if(index == 3){
      setImgIp(icono4IpOn)
      setCurrentSelected(index)
    }
  }

  const changeImgOnLeave = (index) => {
    console.log(index)
    console.log(lastSelected)
    console.log('leaving')
    if (index === lastSelected) { // Si el ícono que se va a deseleccionar es el último seleccionado, lo dejamos seleccionado
      if (index === 0) {
        setImgLore(icono1LoreOn);
      }
      if (index === 1) {
        setImgMods(icono2ModsOn);
      }
      if (index === 2) {
        setImgReglas(icono3ReglasOn);
      }
      if (index === 3) {
        setImgIp(icono4IpOn);
      }
    } else { // Si el ícono que se va a deseleccionar no es el último seleccionado, lo dejamos deseleccionado
      if (index === 0) {
        setImgLore(icono1LoreOff);
      }
      if (index === 1) {
        setImgMods(icono2ModsOff);
      }
      if (index === 2) {
        setImgReglas(icono3ReglasOff);
      }
      if (index === 3) {
        setImgIp(icono4IpOff);
      }
    }
  };
    
  useEffect(() => {
    const imgContainer = document.querySelectorAll('.imageContainer');

    imgContainer.forEach((container, index) => {
      container.addEventListener('mouseenter', () => { changeImgOnEnter(index); console.log(index)});
      container.addEventListener('mouseleave', () => { changeImgOnLeave(index); console.log(index)});
    });

    // Limpia los event listeners cuando el componente se desmonta
    return () => {
      imgContainer.forEach((container, index) => {
        container.removeEventListener('mouseenter', () => { changeImgOnEnter(index) });
        container.removeEventListener('mouseleave', () => { changeImgOnLeave(index) });
      });
    };
  }, []);

    return (
      <div className='iconsContainer'>
        <div className='imageContainer imgSelect'>
          <img className='img' src={imgLore} alt='Lore' />
        </div>
        <div className='imageContainer'>
          <img className='img' src={imgMods} alt='Mods' />
        </div>
        <div className='imageContainer'>
          <img className='img' src={imgReglas} alt='Reglas' />
        </div>
        <div className='imageContainer'>
          <img className='img' src={imgIp} alt='IP' />
        </div>
      </div>
    );
  };

export {MainMenu}