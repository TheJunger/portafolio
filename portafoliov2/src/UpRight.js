import React from "react";

const UpRight = () => {

  const handleContact = () =>{
    alert('No funciona todavia pero mi mail es lionelperafan@gmail.com')
  }

  return (
    <div className="upRight">
      <div className="title">Desarrollador Backend</div>
      <div className="contactme" onClick={handleContact}>Contactame</div>
    </div>
  );
};

export {UpRight}
