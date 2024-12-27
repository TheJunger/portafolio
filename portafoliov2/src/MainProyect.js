import { useState } from "react";

const MainProyect = ({ mainProyectData }) => {
  const [isHovered, setIsHovered] = useState(false);
  const urlProyect = mainProyectData.Link

  if(mainProyectData.length ==0){
    return <div>Cargando proyecto principal...</div>;
  }
  else{

  return (
    <div className="downleftContainer">
      <div className="titledown">Proyecto Actual</div>
      <div className="actualProyectContent">
        <div className="mainContent">
          <div className="nameimage">
            <a href={urlProyect} className="imgcontdownleft">
              <img
                src={'/image/'+ mainProyectData.Url_Imagen}
                alt=""
                className="imageActualProyect"
              />
            </a>
            <a href={urlProyect} className="titleactualproyectcont">
              <div className="titleActualProyect">{mainProyectData.Nombre}</div>
            </a>
          </div>
        </div>
        <div className="statuscont">
          <div className="statusleft">
            <div className="statustitle">Estado</div>
            {mainProyectData.Estado === 4 ? (
              <>
                <progress className='statusbar' max="100" value="100"></progress>
                <div className="status">Completo</div>
              </>
            ) : mainProyectData.Estado === 3 ? (
              <>
                <progress className='statusbar' max="100" value="75"></progress>
                <div className="status">Incompleto</div>
              </>
            ) : mainProyectData.Estado === 2 ?(
              <>
                <progress className='statusbar' max="100" value="50"></progress>
                <div className="status">En proceso</div>
              </>
              )
              : mainProyectData.Estado === 1 ?(
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
            {Array.isArray(mainProyectData.Tecnologias) &&
              mainProyectData.Tecnologias.slice(0, 6).map((tech, index) => (
                <img key={index} src={'/image/' + tech + '.png'} alt="" className="icon" />
              ))}
            {mainProyectData.Tecnologias.length > 6 ? (
              <div className="icon moreicons">+</div>
            ) : null}
            {isHovered && (
              <div className="customTooltip">Ver todas las tecnologías</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
}

export { MainProyect };
