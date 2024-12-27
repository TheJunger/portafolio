import React, { useState, useEffect, useRef } from 'react';
import backSound from './Recursos pagina CGLD7/BackSound.mp3';
import soundOn from './Recursos pagina CGLD7/BOTONES/Music-ON.png';
import soundOff from './Recursos pagina CGLD7/BOTONES/Music-OFF.png';

const SoundBtn = ({ currentState, setCurrentState, image, setImg, audioRef }) => {
  //const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio(backSound);

    return () => {
      audioRef.current.pause();
    };
  }, []);

  const repSound = () => {
    const audio = audioRef.current;

    if (currentState === 'off') {
      audio.play();
      audio.volume = 0.5
      setImg(soundOn);
      setCurrentState('on');
    } else if (currentState === 'on') {
      audio.pause();
      //audio.currentTime = 0;
      setImg(soundOff);
      setCurrentState('off');
    }
  };

  return (
    <div className='soundBtnCont'>
      <img src={image} className='soundBtn' alt='Sound Button' onClick={repSound} />
    </div>
  );
};

export { SoundBtn };
