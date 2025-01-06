import React from "react";
import { MasProyectos } from "./MasProyectos";
import { useEffect,useState } from "react";
import './SeeMoreDL.css'

const SeeMoreDL = () =>{

    const [allProyectData, setAllProyectData] = useState([])

    useEffect(()=>{
        const fetchData = async () =>{
            const response = await fetch('https://thejunger.pythonanywhere.com/api/get_project')
            const data = await response.json()
            setAllProyectData(data)
        }

        fetchData()
    },[])

    return(
    <div className="seemorecont">
        <div className="seemoretitlecont">
            <div className="seemoretitlepy">Mas proyectos</div>
            <a href="https://portafolio-iota-coral.vercel.app/"><div className="seemoreback">Volver</div></a>
        </div>
        <div className="projectcontainersm">
        {allProyectData.length>0?
        allProyectData.map((project, index)=>{
            console.log(project)
            return <MasProyectos key={index} allProyectData={project}/>
        }):<div>Cargando</div>}
        </div>
    </div>
    )
}

export {SeeMoreDL}