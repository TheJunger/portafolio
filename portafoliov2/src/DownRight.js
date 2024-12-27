import React from "react";
import { useState } from "react";

const DownRight = () => {
  const [isHoveredFront, setIsHoveredFront] = useState(false);
  const [isHoveredBack, setIsHoveredBack] = useState(false);
  const [isHoveredDB, setIsHoveredDB] = useState(false);

  const [tech, setTech] = useState("");

  const handleTech = (tech) => {
    return setTech(tech);
  };

  return (
    <div className="downRightContainer">
      <div className="drStatus">Disponible</div>
      <div className="drtitles drfrontend">Tecnologias Frontend</div>
      <div className="driconscont driconscontFront">
        <img
          onMouseEnter={() => {
            setIsHoveredFront(true); handleTech("HTML");
          }}
          onMouseLeave={() => {
            setIsHoveredFront(false); handleTech("");
          }}
          src="/image/HTML.png"
          alt=""
          className="dricons"
        />
        <img
          onMouseEnter={() => {
            setIsHoveredFront(true); handleTech("CSS");
          }}
          onMouseLeave={() => {
            setIsHoveredFront(false); handleTech("");
          }}
          src="/image/CSS.png"
          alt=""
          srcset=""
          className="dricons"
        />
        <img
          onMouseEnter={() => {
            setIsHoveredFront(true); handleTech("JavaScript");
          }}
          onMouseLeave={() => {
            setIsHoveredFront(false); handleTech("");
          }}
          src="/image/JS.png"
          alt=""
          srcset=""
          className="dricons"
        />
        <img
          onMouseEnter={() => {
            setIsHoveredFront(true); handleTech("React");
          }}
          onMouseLeave={() => {
            setIsHoveredFront(false); handleTech("");
          }}
          src="/image/React.png"
          alt=""
          srcset=""
          className="dricons"
        />
        {isHoveredFront && (
              <div className="customTooltip">{tech}</div>
        )}
      </div>

      <div className="drtitles drbackend">Tecnologias Backend</div>
      <div className="driconscont driconscontBack">
        <img
          onMouseEnter={() => {
            setIsHoveredBack(true); handleTech("Python");
          }}
          onMouseLeave={() => {
            setIsHoveredBack(false); handleTech("");
          }}
          src="/image/Python.png"
          alt=""
          srcset=""
          className="dricons"
        />
        <img
          onMouseEnter={() => {
            setIsHoveredBack(true); handleTech("Flask");
          }}
          onMouseLeave={() => {
            setIsHoveredBack(false); handleTech("");
          }}
          src="/image/Flask.png"
          alt=""
          srcset=""
          className="dricons"
        />
        <img
          onMouseEnter={() => {
            setIsHoveredBack(true); handleTech("Node JS");
          }}
          onMouseLeave={() => {
            setIsHoveredBack(false); handleTech("");
          }}
          src="/image/Nodejs.png"
          alt=""
          srcset=""
          className="dricons"
        />
        <div className="dricons"></div>
        {isHoveredBack && (
              <div className="customTooltip">{tech}</div>
        )}
      </div>
      <div className="drtitles drbd">Bases de datos</div>
      <div className="driconscont driconcontDB">
        <img
          onMouseEnter={() => {
            setIsHoveredDB(true); handleTech("SQLite 3");
          }}
          onMouseLeave={() => {
            setIsHoveredDB(false); handleTech("");
          }}
          src="/image/SQLite.png"
          alt=""
          srcset=""
          className="dricons"
        />
        <img
          onMouseEnter={() => {
            setIsHoveredDB(true); handleTech("Mongo DB");
          }}
          onMouseLeave={() => {
            setIsHoveredDB(false); handleTech("");
          }}
          src="/image/Mongodb.png"
          alt=""
          srcset=""
          className="dricons"
        />
        <div className="dricons"></div>
        <div className="dricons"></div>
        {isHoveredDB && (
              <div className="customTooltip">{tech}</div>
        )}
      </div>
    </div>
  );
};

export { DownRight };
