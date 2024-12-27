import { useState } from "react";

const Proyects = ({proyectdata})=>{

    const [isHovered, setIsHovered] = useState(false);
    const urlProyect = proyectdata.Link
    return(
        <div className="ProyectsContent">
        <div className="mainContent">
          <div className="nameimage">
            <a href={urlProyect} className="imgcontdownleftproyects" target="_blank" rel="noreferrer">
            <img src={'./image/'+proyectdata.Url_Imagen} alt="" className="imageActualProyects" />
            </a>
            <a href={urlProyect} className="titleactualproyectscont" target="_blank" rel="noreferrer">
            <div className="titleActualProyects">{proyectdata.Nombre}</div>
            </a>
          </div>
        </div>
        <div className="statuscont">
        <div className="statusleft">
            <div className="statustitle">Estado</div>
            {proyectdata.Estado === 4 ? (
              <>
                <progress className='statusbar' max="100" value="100"></progress>
                <div className="status">Completo</div>
              </>
            ) : proyectdata.Estado === 3 ? (
              <>
                <progress className='statusbar' max="100" value="75"></progress>
                <div className="status">Incompleto</div>
              </>
            ) : proyectdata.Estado === 2 ?(
              <>
                <progress className='statusbar' max="100" value="50"></progress>
                <div className="status">En proceso</div>
              </>
              )
              : proyectdata.Estado === 1 ?(
                <>
                <progress className='statusbar' max="100" value="25"></progress>
                <div className="status">Abandonado</div>
              </>
              )
              : 
            <>
              <progress className='statusbar' max="100" value="0"></progress>
              <div className="status">No iniciado</div>
            </>
            }
          </div>
          <div
            className="statusright"
            onMouseEnter={() => setIsHovered(false)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {Array.isArray(proyectdata.Tecnologias) &&
              proyectdata.Tecnologias.slice(0, 6).map((tech, index) => (
                <img key={index} src={'/image/' + tech + '.png'} alt="" className="icon" />
              ))}
            {proyectdata.Tecnologias.length > 6 ? (
              <div className="icon moreicons">+</div>
            ) : null}
            {isHovered && (
              <div className="customTooltip">Ver todas las tecnologías</div>
            )}
          </div>
        </div>
      </div>
    )

}

export {Proyects}