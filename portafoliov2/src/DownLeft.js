import React from "react";
import { MainProyect } from "./MainProyect";
import { Proyects } from "./Proyects";
import { useState, useEffect } from "react";

const DownLeft = () => {

  const [proyectdata, setProyectData] = useState([])
  const [mainProyectData, setMainProyectData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://thejunger.pythonanywhere.com/api/get_project");
        const data = await response.json();
  
        const mainProject = data.find((proyecto) => proyecto.Destacar === 1);
        const otherProjects = data
          .filter((proyecto) => proyecto.Destacar === 0)
          .sort((a, b) => b.Project_ID - a.Project_ID);
  
        setMainProyectData(mainProject);
        setProyectData(otherProjects.slice(0, 3));
      } catch (error) {
      }
    };
  
    fetchData(); // Llamar la función asíncrona
  }, []);
  
  

  return (
    <div className="downleft">
      <MainProyect mainProyectData={mainProyectData}/>
      <div className="separator">Otros Proyectos</div>
      <div className="otherProyects">
        {proyectdata.map((project, index)=>{
          return <Proyects key={index} proyectdata={proyectdata[index]}/>
        })}
        <a className="vermasdl" href="/proyectos"><div className="seemore">Ver mas</div></a>
      </div>
    </div>
  );
};

export { DownLeft };
