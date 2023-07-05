import React from "react";
import LogoReact from "/workspaces/spain44-g2-landing-page-with-react/src/img/reactjs_logo_icon_206692.png";
import "/workspaces/spain44-g2-landing-page-with-react/src/styles/index.css";

export function Footer () {
    const heartSymbol = "&#x2665;";

    return(
        <div  className="containerFooter">
            <footer id="footer" className="py-3 my-4">            
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item logo-container"><img src={LogoReact} alt="Logo de React" />
          </li>
                    <li className="nav-item fs-4"><a href="#navbar" target="_blank" className="nav-link px-2 text-muted">Inicio</a></li>
                    <li className=" nav-item fs-4"><a href="https://github.com/ayozegr05" target="_blank" className="nav-link px-2 text-muted">Ayoze</a></li>
                    <li className="nav-item fs-4"><a href="https://github.com/RomiTorres" target="_blank" className="nav-link px-2 text-muted">Romina</a></li>
                    <li className="nav-item fs-4"><a href="https://github.com/OconnelDan" target="_blank" className="nav-link px-2 text-muted">DanielH</a></li>
                    <li className="nav-item fs-4"><a href="https://blog.soyhenry.com/8-razones-para-ser-full-stack/" target="_blank" className="nav-link px-2 text-muted">Por que FSD?</a></li>
                    <li className="nav-item logo-container"><img src={LogoReact} alt="Logo de React" />
          </li>
                </ul>
                <ul className="nav justify-content-center pb-3 mb-3">
                    <li className="nav-item fs-6"><a href="https://github.com/hchocobar"target="_blank" className="nav-link px-2 text-muted">Hector Chocobar (Mentor)</a></li>
                    <li className="nav-item fs-6"><a href="https://github.com/jrdelrio"target="_blank" className="nav-link px-2 text-muted">Jose Raimundo (Teacher Assintad)</a></li>
                </ul>
                <p className="text-center text-muted fs-5">
          © 2023 Grupo 2, de la Cohorte 44 Spain con mucho amor a{" "} <a className="enlace link-success" href="https://4geeks.com/" > 4Geeksacademy </a> 
          <span dangerouslySetInnerHTML={{ __html: heartSymbol }}></span>
        </p>              
            </footer>
        </div>

    )
}