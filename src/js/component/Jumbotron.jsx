import React from "react";
import toy_story from "../../img/toy_story.jpg";
import ConYSin from "../../img/con y sin react.jpg";
import Reacciones from "../../img/3 reacciones diferentes.jpg"
import Developers from "/workspaces/spain44-g2-landing-page-with-react/src/img/Hire_React_JS_Developers_e57bec9c4a.jpg"


export function Jumbotron () {
    const handleComponentButtonClick = () => {
        window.open(toy_story);
        };

        const handleComponentButtonClick2 = () => {
            window.open(ConYSin);
            };

            const handleComponentButtonClick3 = () => {
                window.open(Reacciones);
                };
        


    return(
        <div className="container py4 text-center">
            <div
          className="jumbotron-background"
          style={{ backgroundImage: `url(${Developers})`, color: "white", }}
        >
                <div className="container-fluid py-5 ">
                    <h1 className="display-5 fw-bold text-center text-white ">Jumbotron de Grupo 2</h1>
                    <hr className="my-4" />
                    <p className="col-md-8 fs-6 mx-auto mt-3 text-white" ><strong>
Había una vez tres programadores novatos que se embarcaron en el emocionante viaje de estudiar JavaScript y React. El primero, llamado Ayoze, era un apasionado por la programación desde temprana edad y se sentía fascinado por la versatilidad de JavaScript. A medida que profundizaba en el lenguaje, se maravillaba con la capacidad de crear interacciones dinámicas en la web. En su búsqueda por expandir sus conocimientos, se sumergió en el mundo de React, donde descubrió la potencia de construir interfaces de usuario modernas y reactivas.

La segunda programadora, Romina, venía de un trasfondo creativo y encontró en JavaScript una forma de expresar su imaginación en línea. Al estudiar este lenguaje, Romina se sorprendió por su flexibilidad y facilidad para manipular elementos en la página web. Al descubrir React, su mente se iluminó con la posibilidad de crear componentes reutilizables y construir aplicaciones visualmente atractivas.

El tercer programador, Daniel, se aventuró en el mundo de JavaScript y React con una perspectiva empresarial. Si bien comenzó como un novato, se dio cuenta rápidamente del impacto que estas tecnologías podrían tener en el desarrollo de aplicaciones web y móviles. Con cada línea de código que escribía, Daniel se sentía más conectado con la comunidad de desarrolladores y se inspiraba al ver cómo la combinación de JavaScript y React estaba transformando la forma en que interactuamos con la tecnología.

A medida que estos tres programadores continuaban su camino de aprendizaje, enfrentaban desafíos, pero también celebraban sus logros. Aprendieron a superar obstáculos, a colaborar entre ellos y a aprovechar al máximo las herramientas que JavaScript y React les brindaban. Sus vivencias estudiando estas tecnologías no solo les proporcionaron conocimientos técnicos, sino también una pasión compartida por la programación y el deseo de marcar una diferencia en el mundo digital.</strong>               
                    </p>
                    <hr className="my-4" />
                    
                    <div class="btn-group">
                        <button
                            onClick={handleComponentButtonClick}
                            className="btn btn-primary active"
                            aria-current="page"
                            >Componente
                        </button>


                        <button
                            onClick={handleComponentButtonClick2}
                            className="btn btn-primary active ms-2"
                            aria-current="page"
                            >Con y sin React
                        </button>
                        <button
                            onClick={handleComponentButtonClick3}
                            className="btn btn-primary active ms-2 rounded-end "
                            aria-current="page"
                            >Reacciones
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}


