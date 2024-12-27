import React from "react";
import "./MasProyectos.css";
import { useState } from "react";

const MasProyectos = ({ allProyectData }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const urlProyect = allProyectData.Link;
  return (
    <div className="apmaincontent">
      <div className="nameimageap">
        <a href={urlProyect} className="imgcontap">
          <img
            src={"./image/" + allProyectData.Url_Imagen}
            alt=""
            srcset=""
            className="imgmp"
          />
        </a>
        <a href={urlProyect} className="titleproyectap">
          <div className="titleap">{allProyectData.Nombre} </div>
        </a>
      </div>
      <div class="apdowncontent">
        <div className="apinfo">
          <div className="techcontap">
            {allProyectData.Tecnologias.map((tech, index) => (
              <div
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  key={index}
                  src={"./image/" + tech + ".png"}
                  alt=""
                  className="iconap"
                  title={tech}
                />
                {hoveredIndex === index && (
                  <div className="customTooltip">{tech}</div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="statusleft">
          <div className="statustitle">Estado</div>
          {allProyectData.Estado === 4 ? (
            <>
              <progress
                className="progressbar"
                max="100"
                value="100"
              ></progress>
              <div className="status">Completo</div>
            </>
          ) : allProyectData.Estado === 3 ? (
            <>
              <progress className="progressbar" max="100" value="75"></progress>
              <div className="status">Incompleto</div>
            </>
          ) : allProyectData.Estado === 2 ? (
            <>
              <progress className="progressbar" max="100" value="50"></progress>
              <div className="status">En proceso</div>
            </>
          ) : allProyectData.Estado === 1 ? (
            <>
              <progress className="progressbar" max="100" value="25"></progress>
              <div className="status">Abandonado</div>
            </>
          ) : (
            <>
              <progress className="progressbar" max="100" value="0"></progress>
              <div className="status">No iniciado</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export { MasProyectos };
