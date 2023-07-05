import React from "react";
import LogoReact from "/workspaces/spain44-g2-landing-page-with-react/src/img/reactjs_logo_icon_206692.png";
import "/workspaces/spain44-g2-landing-page-with-react/src/styles/index.css";

export function Footer () {
    const heartSymbol = "&#x2665;";

    return(
        <div className="container">
            <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item logo-container"><img src={LogoReact} alt="Logo de React" />
          </li>
                    <li className="nav-item"><a href="#Navbar" target="_blank" className="nav-link px-2 text-muted">Inicio</a></li>
                    <li className=" nav-item"><a href="https://github.com/ayozegr05" target="_blank" className="nav-link px-2 text-muted">Ayoze</a></li>
                    <li className="nav-item"><a href="https://github.com/RomiTorres" target="_blank" className="nav-link px-2 text-muted">Romina</a></li>
                    <li className="nav-item"><a href="https://github.com/OconnelDan" target="_blank" className="nav-link px-2 text-muted">DanielH</a></li>
                    <li className="nav-item"><a href="https://blog.soyhenry.com/8-razones-para-ser-full-stack/" target="_blank" className="nav-link px-2 text-muted">Por que FSD?</a></li>
                    <li className="nav-item logo-container"><img src={LogoReact} alt="Logo de React" />
          </li>
                </ul>
                <p className="text-center text-muted">
          © 2023 Grupo 2, de la Cohorte 44 Spain con mucho amor{" "}
          <span dangerouslySetInnerHTML={{ __html: heartSymbol }}></span>
        </p>
            </footer>
        </div>

    )
}
