import infoImage from "./Recursos pagina CGLD7/Caja-Info (2).png";
import close from "./Recursos pagina CGLD7/xXx.png";
import clickSound from "./Recursos pagina CGLD7/Sonido_2.mp3";
import { useEffect, useState } from "react";

const ShowInfo = ({ showInfoType, setShowInfo }) => {
  const [title, setTitle] = useState("Sin Asignar");
  const [content, setContent] = useState("Sin Asignar");
  const [texto, setCopyText] = useState("cogimientoland.exaroton.me");
  const clickSonido = new Audio(clickSound);
  const copyText = () => {
    navigator.clipboard.writeText(texto);
  };

  useEffect(() => {
    if (showInfoType == "Lore") {
      setTitle("Lore");
      setContent(
        <div>
          En una tierra envuelta en el misterio, donde el sol acaricia
          suavemente las torres de piedra y los campos verdes se extienden hasta
          donde alcanza la vista, existe un reino sumido en el misterio y la
          magia.
          <br />
          <br />
          <br />
          Al despuntar el alba, cuando el resplandor dorado del sol se filtra
          por las ventanas, un eco lejano de un antiguo secreto resuena en los
          rincones más oscuros de la mente.
          <br />
          <br />
          <br />
          Es en esta época medieval, donde la realidad y la fantasía se
          entrelazan en un enigma cautivador, que los gallos cacarean como
          heraldos de un nuevo día.
          <br />
          <br />
          <br />
          En lo profundo de las aldeas, los habitantes se preparan para
          enfrentar los desafíos que aguardan en el campo, donde sus destinos se
          entrelazarán en un baile de intrigas y aventuras.
          <br />
          <br />
          <br />
          En cada esquina, se ocultan enigmas por descubrir, ruinas olvidadas
          que encierran secretos ancestrales y tesoros perdidos en el tiempo.
          <br />
          <br />
          <br />
          Y aunque todo parezca normal a simple vista, una fuerza oculta guía a
          los valientes hacia un destino aún desconocido.
          <br />
          <br />
          <br />
          Un aura de misterio envuelve a este reino de Minecraft, donde la magia
          antigua y los senderos desconocidos aguardan a aquellos lo
          suficientemente audaces como para desvelar los secretos enterrados en
          las sombras de la historia.
          <br />
          <br />
          <br />
          Así comienza nuestra travesía en este mundo inexplorado, donde los
          límites de la imaginación se fusionan con la realidad y donde cada
          paso es una pieza en el intrincado rompecabezas de este emocionante y
          enigmático reino medieval.
          <br />
          <br />
          <br />
          ¡Prepárate para sumergirte en esta inolvidable serie llena de
          misterios por descubrir y aventuras por vivir!
        </div>
      );
    }
    if (showInfoType == "Mods") {
      setTitle("Mods");
      setContent(
        <ul>
          <div className="link">
            Link de{" "}
            <a
              target="_blank"
              className="link"
              href="https://www.mediafire.com/file/u41l4m2lkldcur4/Mods+y+Packs+(cgl7).rar/file"
            >
              descarga
            </a>
          </div>
          <br />
          <br />
          <br />
          <div>Lista de Mods:</div>
          <br />
          <br />
          <li>SecurityCraft</li>
          <br />
          <li>Epic Knights</li>
          <br />
          <li>Immersive Structures</li>
          <br />
          <li>Alexs mobs</li>
          <br />
          <li>Ambient Sounds</li>
          <br />
          <li>Architectury</li>
          <br />
          <li>Artifacts</li>
          <br />
          <li>AutoReglib</li>
          <br />
          <li>Awesomedungeon</li>
          <br />
          <li>Awesomedungeonocean</li>
          <br />
          <li>Balm</li>
          <br />
          <li>Better Animals Plus</li>
          <br />
          <li>Blockui</li>
          <br />
          <li>Camera</li>
          <br />
          <li>Carry on</li>
          <br />
          <li>Citadel</li>
          <br />
          <li>Cloth Config</li>
          <br />
          <li>Cluttered</li>
          <br />
          <li>Collective</li>
          <br />
          <li>Comforts</li>
          <br />
          <li>Copper Golem</li>
          <br />
          <li>CorgiLib</li>
          <br />
          <li>Corpse</li>
          <br />
          <li>CreativeCore</li>
          <br />
          <li>Curios</li>
          <br />
          <li>Deadly Disasters</li>
          <br />
          <li>Distant Horizons</li>
          <br />
          <li>Dragon Mounts</li>
          <br />
          <li>Droplight</li>
          <br />
          <li>Durability Viewer</li>
          <br />
          <li>Easier Sleeping</li>
          <br />
          <li>Elenaidodge</li>
          <br />
          <li>Enhanced Celestials</li>
          <br />
          <li>Farmers Delight</li>
          <br />
          <li>Feathers</li>
          <br />
          <li>Feywild</li>
          <br />
          <li>Framework</li>
          <br />
          <li>Gateways To Eternity</li>
          <br />
          <li>Geckolib</li>
          <br />
          <li>HammerLib</li>
          <br />
          <li>Harvestwithease</li>
          <br />
          <li>Highlighter</li>
          <br />
          <li>Human Companions</li>
          <br />
          <li>Iceberg</li>
          <br />
          <li>Immersive Aircraft</li>
          <br />
          <li>Indreb</li>
          <br />
          <li>Inventory Profiles Next</li>
          <br />
          <li>Items to Mobs</li>
          <br />
          <li>Jade</li>
          <br />
          <li>JEI</li>
          <br />
          <li>Journey Map</li>
          <br />
          <li>Jump Over Fences</li>
          <br />
          <li>Just Zoom</li>
          <br />
          <li>Konkrete</li>
          <br />
          <li>Kotlin</li>
          <br />
          <li>LiblPN</li>
          <br />
          <li>Library Ferret</li>
          <br />
          <li>LibX</li>
          <br />
          <li>little Maid</li>
          <br />
          <li>LMRB</li>
          <br />
          <li>Lootr</li>
          <br />
          <li>Magic Combat Wands</li>
          <br />
          <li>Majrusz Library</li>
          <br />
          <li>Majrusz Difficulty</li>
          <br />
          <li>Mimic </li>
          <br />
          <li>MCA</li>
          <br />
          <li>Oculus</li>
          <br />
          <li>Paraglider</li>
          <br />
          <li>Patchouli</li>
          <br />
          <li>Placebo</li>
          <br />
          <li>Player Revive</li>
          <br />
          <li>Polymorph</li>
          <br />
          <li>Pretty Pipes</li>
          <br />
          <li>Prism</li>
          <br />
          <li>Puzzles Lib</li>
          <br />
          <li>Rechiseled</li>
          <br />
          <li>RPG Skillable</li>
          <br />
          <li>Rubidium</li>
          <br />
          <li>SandBox</li>
          <br />
          <li>Sign Post</li>
          <br />
          <li>Simple Farming</li>
          <br />
          <li>Simple Shops</li>
          <br />
          <li>Simple Houses</li>
          <br />
          <li>Sky Villages</li>
          <br />
          <li>Sophisticated Backpacks</li>
          <br />
          <li>Sophisticated core</li>
          <br />
          <li>Sophisticated Storage</li>
          <br />
          <li>Spawn Animations</li>
          <br />
          <li>Spiderstpo</li>
          <br />
          <li>Structory</li>
          <br />
          <li>Structurize</li>
          <br />
          <li>Supermartin642configlib</li>
          <br />
          <li>Supermartin642corelib</li>
          <br />
          <li>Terra Blender</li>
          <br />
          <li>The Graveyard Biomes</li>
          <br />
          <li>The undead Revamped</li>
          <br />
          <li>TLC</li>
          <br />
          <li>Torch Master</li>
          <br />
          <li>Torohealth</li>
          <br />
          <li>Tough As Nails</li>
          <br />
          <li>Towns and Towers</li>
          <br />
          <li>Trashlot</li>
          <br />
          <li>Treeharverster</li>
          <br />
          <li>Vein Mining</li>
          <br />
          <li>World Edit</li>
        </ul>
      );
    }
    if (showInfoType == "Reglas") {
      setTitle("Reglas");
      setContent(
        <div>
          <div>-INGAME:</div>
          <ul className="rules">
            <li>
              Intenta ser la mejor version de vos / No seas malo y divertite
            </li>
            <li>
              Reporta los bugs y no los aproveches, seguro recibis una
              recompensa{" "}
            </li>
            <li>Juga tranquilo, no es una carrera</li>
            <li>La casa de un jugador lo es todo, no molestes</li>
            <li>Respeta los tiempos de evento y exceso a portales</li>
            <li>No se permiten los hacks</li>
          </ul>
          <div>-IRL:</div>
          <ul className="rules">
            <li>Lo que pasa minecraft se queda en minecraft</li>
            <li>
              El tiempo de juego fue ampliado, dividido y duramente debatido
              entre los administradores para el disfrute de todos, no tienten a
              los administradores para que se extiendan horas de juego
            </li>
            <li>
              Bugs de perdida de objetos y demas es mas creible con un video,
              intenta estar siempre en stream!
            </li>
          </ul>
        </div>
      );
    }
    if (showInfoType == "Ip") {
      setTitle("Ip");
      setContent(
        <div className="ipCont">
          <p className="ipText">{texto} </p>
          <div
            onClick={() => {
              copyText();
              alert("Direccion IP copiada correctamente!");
            }}
            className="iconIp"
          >
            <i class="icon fa fa-solid fa-copy"></i>
          </div>
        </div>
      );
    }
  }, [showInfoType]);

  useEffect(() => {
    const closeBtn = document.querySelector(".closeButton");
    const removeContainer = () => {
      //container.remove()
      clickSonido.play();
      clickSonido.volume = 0.5;
      setShowInfo("Off");
    };
    closeBtn.addEventListener("click", removeContainer);
    return () => {
      closeBtn.removeEventListener("click", removeContainer);
    };
  }, [clickSonido, setShowInfo]); //CAMBIAR O PASAR EL MANEJO DE LA X AL MAINMENU, tengo que generar dinamicamente esto?

  return (
    <div className="secondContainer">
      <img src={infoImage} className="backgroundInfo" />
      <img src={close} className="closeButton" />
      <div className="infoContent">
        <div className="InfoTitle">{title}</div>
        <div className="infoText">{content}</div>
      </div>
    </div>
  );
};

export { ShowInfo };
