import './AppFix.css';
import { Logo } from './Logo';
import { StartBtnParpadeo } from './Start';
import { SoundBtn } from './Sound';
import { useEffect, useState, useRef } from 'react';
import { MainMenu } from './MainMenu';
import backSound from './Recursos pagina CGLD7/BackSound.mp3';
import soundOn from './Recursos pagina CGLD7/BOTONES/Music-ON.png';
import soundOff from './Recursos pagina CGLD7/BOTONES/Music-OFF.png';

function CogimientolandMain() {

  const [render, setRender] = useState('start')
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentState, setCurrentState] = useState('off')
  const [image, setImg] = useState(soundOff);
  const audioRef = useRef(null);

  useEffect(()=>{
    console.log(render)
    console.log('---')
  },[render])

  useEffect(() => {
    audioRef.current = new Audio(backSound);

    return () => {
      audioRef.current.pause();
    };
  }, []);

  useEffect(()=>{
    const audio = audioRef.current;

    if (isPlaying == true) {
      audio.play();
      audio.volume = 0.5
      setCurrentState('on')
      setImg(soundOn)

    } else if (isPlaying == false) {
      audio.pause();
      setCurrentState('off')
      setImg(soundOff)
    }
  },[isPlaying])

  return (
    <div id="CGLVII" className='container'>
      <Logo/>
      <SoundBtn currentState={currentState} setCurrentState={setCurrentState} image={image} setImg={setImg} audioRef={audioRef}/>
      <div className='mainContent'>
        {render == 'start' ? <StartBtnParpadeo setRender={setRender} Render={render} isPlaying={isPlaying} setIsPlaying={setIsPlaying}/> : null}
        {render == 'none' ? <MainMenu/> : null}
      </div>
    </div>
  );
}

export {CogimientolandMain};
