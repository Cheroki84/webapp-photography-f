import React from 'react';
import './Aboutme.scss'
import photoIM from '../../img/IM-640.jpg';
import photoF from '../../img/F-640.jpg';

const Aboutme = () => {
    return (
        <div className="main">
            <div className="aboutMeMainContainer">
                <h3>Sobre mí</h3>
                <div className="aboutMeRows">
                    <div className="aboutMePhoto">
                        <img className="photo" src={photoIM} alt="photoIM" />
                    </div>
                    <div className="aboutMeText">
                        <p>
                            Detrás del proyecto El Barquito de Papel me encuentro yo, Isabel Mª Barrera, una mujer sencilla, paciente y trabajadora. Pero, ante todo, mamá de dos hijos. Ellos son el motor de mi vida y uno de los motivos por los cuales hoy en día me dedico a la fotografía infantil.
                        </p>
                        <p>
                            Ser madre me facilita el trato con mis "miniclientes", ya que cuando tengo que fotografiarlos, hay veces en las que no quieren, se asustan o simplemente empiezan a llorar. Entonces, intento calrmarlos, jugar con ellos y que pasen un rato divertido, y se olviden de que están en un estudio. ¡Y casi siempre funciona!
                        </p>

                    </div>
                </div>
                <div className="divEmpty"></div>
                <div className="aboutMeRows">
                    <div className="aboutMeText">
                        <p>
                            Esta pasión por la fotografía empezó, por supuesto, haciendo fotos a mis hijos y a los niños de mi entorno. Hasta que, en el año 2016, decidí darme un caprichito y comprarme mi primera cámara réflex para seguir con un hobby que cada día me gustaba más, y sobre el cual quería saber  cada vez más. Poco a poco, y con pasos firmes, he llegado hasta lo que soy hoy y, aunque sé que todavía me queda muchísimo camino por recorrer, espero hacerlo igual que hasta ahora: con calma, paciencia y con vuestro cariño y apoyo.
                        </p>
                        <p>
                            ¡Nos vemos en el estudio!
                        </p>
                    </div>
                    <div className="aboutMePhoto">
                        <img className="photo" src={photoF} alt="photoF" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Aboutme;