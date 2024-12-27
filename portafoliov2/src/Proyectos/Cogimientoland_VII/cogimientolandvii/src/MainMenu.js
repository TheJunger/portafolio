import icono1LoreOff from './Recursos pagina CGLD7/BOTONES/Lore (2).png'
import icono2ModsOff from './Recursos pagina CGLD7/BOTONES/Mods (2).png'
import icono3ReglasOff from './Recursos pagina CGLD7/BOTONES/Reglas (2).png'
import icono4IpOff from './Recursos pagina CGLD7/BOTONES/IP (2).png'

import icono1LoreOn from './Recursos pagina CGLD7/BOTONES/Lore.png'
import icono2ModsOn from './Recursos pagina CGLD7/BOTONES/Mods.png'
import icono3ReglasOn from './Recursos pagina CGLD7/BOTONES/Reglas.png'
import icono4IpOn from './Recursos pagina CGLD7/BOTONES/IP.png'
import { Icono } from './Icono'
import sonido from './Recursos pagina CGLD7/Sonido_3.mp3'
import clickSound from './Recursos pagina CGLD7/Sonido_2.mp3'
import { ShowInfo } from './ShowInfo'

import { useEffect, useState } from 'react'

const MainMenu = () => {

  const [imgLore, setImgLore] = useState(icono1LoreOff)
  const [imgMods, setImgMods] = useState(icono2ModsOff)
  const [imgReglas, setImgReglas] = useState(icono3ReglasOff)
  const [imgIp, setImgIp] = useState(icono4IpOff)
  const clickSonido = new Audio(clickSound)

  const [statusLore, setStatusLore] = useState('Off')
  const [statusMods, setStatusMods] = useState('Off')
  const [statusReglas, setStatusReglas] = useState('Off')
  const [statusIp, setStatusIp] = useState('Off')  
  const [showInfo, setShowInfo] = useState('Off')
  const [showInfoType, setShowInfoType] = useState('Mods')

  const isIn= (index)=>{
      if(index == 0){
        const audio = new Audio(sonido)
        audio.play()
        audio.volume = 0.5
        audio.remove()
        setImgLore(icono1LoreOn)
        setImgMods(icono2ModsOff);
        setImgReglas(icono3ReglasOff);
        setImgIp(icono4IpOff);
        
        setStatusLore('On')
        setStatusMods('Off')
        setStatusReglas('Off')
        setStatusIp('Off')
      }
      if(index == 1){
        const audio = new Audio(sonido)
        audio.play()
        audio.volume = 0.5
        audio.remove()
        setImgMods(icono2ModsOn)
        setImgLore(icono1LoreOff);
        setImgReglas(icono3ReglasOff);
        setImgIp(icono4IpOff);

        setStatusLore('Off')
        setStatusMods('On')
        setStatusReglas('Off')
        setStatusIp('Off')
      }
      if(index == 2){
        const audio = new Audio(sonido)
        audio.play()
        audio.volume = 0.5
        audio.remove()
        setImgReglas(icono3ReglasOn)
        setImgLore(icono1LoreOff);
        setImgMods(icono2ModsOff);
        setImgIp(icono4IpOff);

        setStatusLore('Off')
        setStatusMods('Off')
        setStatusReglas('On')
        setStatusIp('Off')
      }
      if(index == 3){
        const audio = new Audio(sonido)
        audio.play()
        audio.volume = 0.5
        audio.remove()
        setImgIp(icono4IpOn)
        setImgLore(icono1LoreOff);
        setImgMods(icono2ModsOff);
        setImgReglas(icono3ReglasOff);

        setStatusLore('Off')
        setStatusMods('Off')
        setStatusReglas('Off')
        setStatusIp('On')
      }
  }

  const abrirCaja = (index) =>{
    clickSonido.play()
    setShowInfo('On')
    if(index == 0){
      setShowInfoType('Lore')
    }
    if(index == 1){
      setShowInfoType('Mods')
    }
    if(index == 2){
      setShowInfoType('Reglas')
    }
    if(index == 3){
      setShowInfoType('Ip')
    }
  }

  useEffect(() => {
    const imgContainer = document.querySelectorAll('.imageContainer');

    imgContainer.forEach((container, index) => {
      container.addEventListener('mouseenter', () => {isIn(index); console.log('in ')});
      container.addEventListener('click', ()=>{abrirCaja(index)})
      container.addEventListener('mouseleave', () => {console.log('out')});
    });

    // Limpia los event listeners cuando el componente se desmonta
    return () => {
      imgContainer.forEach((container, index) => {
        container.removeEventListener('mouseenter', () => {isIn(index); console.log('in ')});
        container.removeEventListener('click', ()=>{abrirCaja(index)})
        container.removeEventListener('mouseleave', () => {console.log('out')});
      });
    };
  }, []);

    return (
      <div className='iconsContainer'>
        {showInfo == 'On' ? <ShowInfo showInfoType={showInfoType} setShowInfo={setShowInfo}/>:null}
        <div className='imageContainer imgSelect'>
          <Icono imagen={imgLore} alt={'Lore'} status={statusLore}/>
        </div>
        <div className='imageContainer'>
          <Icono imagen={imgMods} alt={'Mods'} status={statusMods}/>
        </div>
        <div className='imageContainer'>
          <Icono imagen={imgReglas} alt={'Reglas'} status={statusReglas}/>
        </div>
        <div className='imageContainer'>
          {/*<img className='img' src={imgIp} alt='IP' />*/}
          <Icono imagen={imgIp} alt={'Ip'} status={statusIp}/>
        </div>
      </div>
    );
  };

export {MainMenu}