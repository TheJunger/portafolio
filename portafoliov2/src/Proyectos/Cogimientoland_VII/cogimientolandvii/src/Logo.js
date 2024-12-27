import logo from './Recursos pagina CGLD7/Texto CGLDVII/CGLD7-Titulo.png' 
import { useEffect,useState } from 'react'

let Logo = ()=>{

    useEffect(()=>{
        const LogoImg = document.querySelector('.logoPrincipal')
        setInterval(()=>{
            setTimeout(()=>{
                LogoImg.style.top = '6vh'
            }, 500)
            setTimeout(()=>{
                LogoImg.style.top = '8vh'
            }, 1000)
            setTimeout(()=>{
                LogoImg.style.top = '10vh'
            }, 1500)
            setTimeout(()=>{
                LogoImg.style.top = '12vh'
            }, 2000)
            setTimeout(()=>{
                LogoImg.style.top = '10vh'
            }, 2500)
            setTimeout(()=>{
                LogoImg.style.top = '8vh'
            }, 3000)
        }, 3000)
    },[])

    return(
        <div className='logoCont'>
            <img src={logo} className='logoPrincipal'/>
        </div>
    )
}

export {Logo}