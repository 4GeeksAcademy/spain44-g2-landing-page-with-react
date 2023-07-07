import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";

import cardImg from "../../img/Card.jpg"
import astronauta from "../../img/astronauta.jpg"
import flores from "../../img/flores.jpg"
import humo from "../../img/humo.jpg"


export const Cards = () => {

  return (
    <div>
      <div className="card-group container">
        <div className="card">
          <img src={cardImg} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
            <a href={humo} className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div className="card">
          <img src={cardImg} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
            <a href={flores} className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div className="card">
          <img src={cardImg} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
            <a href={astronauta} className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  )
}


