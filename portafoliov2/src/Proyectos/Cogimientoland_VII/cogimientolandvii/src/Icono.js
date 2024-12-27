import flecha from './Recursos pagina CGLD7/flecha.png'
import { useEffect, useState } from 'react'
import sonido from './Recursos pagina CGLD7/Sonido_3.mp3'

const Icono = ({imagen, alt, status}) =>{
    const [flechaPosition, setFlechaPosition] = useState(-8);
    

    useEffect(() => {
      if (status === 'On') {
        const interval = setInterval(() => {
          setFlechaPosition((prevPosition) => {
            // Calculamos la nueva posición de la flecha en función del valor anterior
            const newPosition = prevPosition === -6 ? -8 : -6;
            return newPosition;
          });
        }, 1000);
  
        // Limpia el intervalo cuando el componente se desmonta
        return () => clearInterval(interval);
      }
    }, [status]);

    if(status == 'On'){
        return(
            <>
                <img className='flecha' src={flecha} style={{ top: `${flechaPosition}vw` }}/>
                <img className='img' src={imagen} alt={alt} />
            </>
        )
    }
    if(status = 'Off'){
        return(
            <img className='img' src={imagen} alt={alt} />
        )
    }
}

export {Icono}