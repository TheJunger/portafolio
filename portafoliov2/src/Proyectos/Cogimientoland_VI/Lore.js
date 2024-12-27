import React from "react";
import cogi5 from "./CGL5.png";
import cogi3 from "./CGL3.png";
import cogi4 from "./CGL4.png";
import cogi6 from "./CGL6.jpg";
//import "./Lore.css";

let Lore = () => {
  let LoreSchema = (props) => {
    return (
      <div className="loreContainer">
        <div className="titleContLore">{props.titulo}</div>
        <div className="imgCont">
          <img className="cogi5" src={props.imagen} />
          <p className="textContLore">{props.lore}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="lores">
      <LoreSchema
        titulo="Cogimientoland 5"
        imagen={cogi5}
        lore={
          <p>
            Cogimientoland 5, donde la supervivencia es una tarea diaria y la
            muerte acecha en cada esquina.
            <br />
            En este paisaje desolado, ilHaters, y sus compañeros luchan por
            sobrevivir, sin saber cómo comenzó esta pesadilla ni por qué están
            allí.
            <br />
            <br />
            Pero la luna sangrienta se acerca, un evento raro y devastador que
            aumenta la fuerza y la durabilidad de los no-muertos.
            <br />
            Mientras TheJunger7, Totogabriel7 y N1c se esfuerzan por escapar en
            un helicóptero hacia una zona menos poblada, un rayo impacta su
            vehículo, desapareciendo sin dejar rastro alguno.
            <br />
            <br />
            IlHaters se encuentra solo en el mundo, con solo su ingenio y
            valentía para sobrevivir en un paisaje cada vez más peligroso.
            <br />
            A medida que pasa el tiempo, los antiguos hogares de los integrantes
            van siendo consumidos por la naturaleza uno a uno.
            <br />
            <br />
            Pero la lucha por sobrevivir no ha terminado, y ilHaters y los
            sobrevivientes de New Vegas se aventuran hacia lo desconocido, en
            busca de un nuevo hogar y un nuevo comienzo.
            <br />
            <br />
            ¿Podrán superar los desafíos que se les presentan en el camino y
            encontrar un lugar seguro para llamar hogar?
          </p>
        }
      />
      <div className="chevronIcon">
        <i className="fa fa-sharp fa-solid fa-chevron-down"></i>{" "}
      </div>

      <LoreSchema
        titulo="Cogimientoland 1"
        imagen="https://minecraftseedhq.com/wp-content/uploads/2019/05/minecraft-seed-snow-village-java-1-14.jpg"
        lore={
          <p>
            IlHaters, un valiente líder con la visión de construir un nuevo
            hogar para su pueblo, se embarca en una peligrosa misión para
            encontrar un lugar donde puedan asentarse y prosperar.
            <br />
            <br />
            En su incansable búsqueda, ilHaters y su pueblo llegan a una zona
            inestable, inhóspita y rodeada de peligros.
            <br />
            A pesar de las adversidades, ilHaters y su gente comienzan a
            construir su nuevo hogar, luchando cada día por sobrevivir en un
            mundo hostil que parece querer acabar con ellos.
            <br />
            <br />
            Pero el destino les tenía preparada una trágica sorpresa. A pesar de
            sus esfuerzos, la zona estaba demasiado cerca de los desastres del
            pasado y pronto se convierte en un lugar imposible para la
            supervivencia.
            <br />
            IlHaters y su pueblo no tienen más opción que abandonar su hogar
            recién construido.
            <br />
            Sin embargo, su esperanza y espíritu de lucha nunca se desvanecen.
            <br />
            <br />
            Con la determinación de encontrar un lugar seguro donde puedan
            construir un nuevo hogar, ilHaters y su pueblo se embarcan en una
            emocionante aventura hacia lo desconocido, donde enfrentarán
            peligros, desafíos y encontrarán nuevos aliados en su búsqueda de un
            nuevo comienzo.
          </p>
        }
      />

      <div className="chevronIcon">
        <i className="fa fa-sharp fa-solid fa-chevron-down"></i>{" "}
      </div>

      <LoreSchema
        titulo="Cogimientoland 2"
        imagen="https://www.9minecraft.net/wp-content/uploads/2019/09/Super-TNT-Mod-for-Minecraft-33.png"
        lore={
          <p>
            Cogimientoland 2, Narra la historia donde ilHaters fundó su primer
            pueblo exitoso, lleno de estructuras impresionantes, monumentos
            majestuosos y mecanismos ingeniosos.
            <br />
            <br />
            Pero no todo fue paz y tranquilidad, ya que el pueblo se caracterizó
            por el uso de grandes explosivos y atentados, lo que lo convirtió en
            un lugar peligroso y emocionante al mismo tiempo.
          </p>
        }
      />

      <div className="chevronIcon">
        <i className="fa fa-sharp fa-solid fa-chevron-down"></i>{" "}
      </div>

      <LoreSchema
        titulo="Cogimientoland 3"
        imagen={cogi3}
        lore={
          <p>
            Cogimientoland 3 es una montaña rusa de emociones.
            <br />
            El cacique ilHaters lideró su pueblo hacia lo desconocido, donde
            encontraron desafíos increíbles.
            <br />
            Desde el espectacular evento de pesca, donde se lanzaron al mar y
            lucharon contra los gigantes del océano, hasta la noche de la gran
            matanza, conocida como "La Purga", donde los aldeanos debían luchar
            por su supervivencia contra hordas de enemigos sedientos de sangre y
            otros aldeanos.
            <br />
            <br />
            Pero eso no fue todo. En un mundo lleno de peligros, ilHaters y su
            pueblo tuvieron que luchar por su vida en cada esquina. Desde
            asesinatos en masa con explosivos hasta las amenazas provenientes
            del Nether, donde se enfrentaron a demonios y criaturas infernales.
            <br />
            Incluso en los mares, los aldeanos debían cazar para sobrevivir y
            protegerse de invasores implacables.
            <br />
            Pero lo más aterrador eran los agujeros negros, inexplicables
            fuerzas de la naturaleza que amenazaban con engullir todo lo que se
            cruzaba en su camino.
            <br />
            <br />
            ¿Cómo podrían ilHaters y su pueblo sobrevivir en un mundo lleno de
            tanta incertidumbre y peligro? Solo el tiempo lo diría.
          </p>
        }
      />

      <div className="chevronIcon">
        <i className="fa fa-sharp fa-solid fa-chevron-down"></i>{" "}
      </div>

      <LoreSchema
        titulo="Cogimientoland 4"
        imagen={cogi4}
        lore={
          <p>
            Cogimientoland 4 Acompaña a ilHaters y sus intrépidos compañeros en
            su travesía por la misteriosa y enigmática isla flotante, donde se
            toparán con el temido gremio de aventureros.
            <br />
            <br />
            Aunque las primeras misiones fueron complicadas y tuvieron que
            asaltar una fortaleza varias veces, ilHaters y sus compañeros no se
            rindieron.
            <br />
            Se unieron al gremio y realizaron diversas tareas y cacerías,
            incluyendo el enfrentamiento contra monstruos hostiles y la
            recolección de recursos.
            <br />
            <br />
            ¡Pero la aventura no termina ahí! El grupo construyó un
            impresionante pueblo en las afueras de la isla, dividido en pequeñas
            aldeas con distintos líderes. La isla era un lugar mágico, lleno de
            peligros y sorpresas, y cada día era una lucha por la supervivencia.
            <br />
            <br />
            Finalmente, cuando la hora del asalto final al gran castillo enemigo
            se acercaba, ilHaters y sus compañeros emprendieron rumbo hacia un
            nuevo destino.
            <br />
            <br />
            Pero lo que sucedió después fue trágico: la isla desapareció sin
            dejar rastro.
            <br />
            <br />
            ¿Qué sucedió? ¿Fue obra de un poderoso hechizo o un misterioso
            agujero negro?
          </p>
        }
      />

      <div className="chevronIcon">
        <i className="fa fa-sharp fa-solid fa-chevron-down"></i>{" "}
      </div>

      <LoreSchema
        titulo="Cogimientoland 6"
        imagen={cogi6}
        lore={
          <p>
            ¡Prepárate para sumergirte en la emocionante historia de Cogimientoland
            6!
            <br />
            <br />
            En medio de una noche cubierta por una inusual tormenta
            eléctrica, ilHaters percibe un estruendo que despierta su
            curiosidad. Aunque la tormenta es demasiado intensa para investigar
            en ese momento, ilHaters decide esperar pacientemente hasta que se
            calme para descubrir la fuente de ese misterioso sonido. 
            <br />
            <br />
            Finalmente,
            después de un tiempo, ilHaters llega al lugar del estruendo y se
            encuentra con algo que pensó que había perdido para siempre: 
            <br />¡sus
            amigos habían regresado! El reencuentro es emocionante y llena de
            recuerdos compartidos. 
            <br />
            <br />
            Sin perder tiempo, ilHaters y sus amigos se
            equipan y establecen sus asentamientos. 
            <br />
            Pero esta vez, el mundo que
            los rodea ha cambiado drásticamente. 
            <br />
            Nuevas estructuras y biomas les
            esperan tanto en el cielo como en la tierra, listos para ser
            explorados y saqueados en busca de tesoros ocultos. 
            <br />
            <br />
            Conforme sus
            colonias crecen, los personajes se encuentran cada vez más aislados
            del resto del mundo. 
            <br />
            Sin embargo, algo está a punto de suceder que
            los obligará a reunirse una vez más. 
            <br />
            Un nuevo desafío, una amenaza
            inminente o un antiguo enemigo resurgido del pasado. 
            <br />
            El destino de
            ilHaters y sus amigos está entrelazado y la historia está lejos de
            terminar. 
            <br />
            <br />
            <span className="next">¿Podrán unirse nuevamente para enfrentar esta nueva prueba
            y forjar un futuro aún más emocionante?</span>
          </p>
        }
      />
    </div>
  );
};

export { Lore };
//prettier usado
