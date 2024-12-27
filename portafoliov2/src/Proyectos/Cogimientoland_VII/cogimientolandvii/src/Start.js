import primeraImagen from './Recursos pagina CGLD7/BOTONES/Start-2.png' 
import segundaImagen from './Recursos pagina CGLD7/BOTONES/Start-1.png' 
import sonido from './Recursos pagina CGLD7/Sonido_1.mp3'

import { useEffect, useState } from 'react'

//cambiar clase
let StartBtnParpadeo = ({setRender, Render, setIsPlaying, isPlaying}) =>{

    const [imgUrl, setImgUrl] = useState(primeraImagen)
    const [estadoActual, setEstadoActual] = useState('img1')

    //Maneja el brillo
    useEffect(()=>{
        //console.log(imgUrl)
        let changeImg = () =>{
            if(estadoActual == 'img1'){
                setEstadoActual('img2')
                setImgUrl(segundaImagen)

            }
            if(estadoActual == 'img2'){
                setEstadoActual('img1')
                setImgUrl(primeraImagen)
            }
        }
        const intervalId = setInterval(changeImg, 1200)

        return () => {
          clearInterval(intervalId)
        }
    },[estadoActual])

    useEffect(()=>{
        let startSound = ()=>{
            const audio = new Audio(sonido)
            audio.play();
            audio.volume = 0.5
        }

        let repSonidos = () =>{
            startSound()
            setRender('none')
            console.log(Render)
            if (isPlaying == false) {
                setIsPlaying(true)
              } else if (isPlaying == true) {
                setIsPlaying(false)
              }
            //startBackSound()
        }

        const boton = document.querySelector('.startBtn')
        boton.addEventListener('click', repSonidos)
        return()=>{
            boton.removeEventListener('click', repSonidos)
        }
    },[isPlaying, setIsPlaying, Render, setRender])

    return(   
        <div className='startCont'>
          <img src={imgUrl} className='startBtn'/>
        </div>
    )
}

export {StartBtnParpadeo}