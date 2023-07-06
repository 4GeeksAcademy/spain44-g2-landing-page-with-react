import React from "react";
const Navbar = () => {

	return (

	<div className="container">
		<nav id="Navbar" className="navbar navbar-expand-lg bg-dark p-2">
		<div className="container">
		  <a className="navbar-brand text-light ms-5" href="https://getbootstrap.com/docs/5.3/getting-started/download/"
                  onMouseOver={(e) => (e.target.style.color = "gray")}
                  onMouseOut={(e) => (e.target.style.color = "white")}><b>Start Bootstrap</b></a>
		  <div className="collapse navbar-collapse flex-row-reverse" id="navbarNav">
			<ul className="navbar-nav me-5">
			  <li className="nav-item">
				<a className="nav-link active text-light hover-link" aria-current="page"  href="https://getbootstrap.com/"
                  onMouseOver={(e) => (e.target.style.color = "gray")}
                  onMouseOut={(e) => (e.target.style.color = "white")}><b>Home</b></a>
			  </li>
			  <li className="nav-item">
				<a className="nav-link text-light" href="https://getbootstrap.com/docs/5.3/getting-started/introduction/"
                  onMouseOver={(e) => (e.target.style.color = "gray")}
                  onMouseOut={(e) => (e.target.style.color = "white")}><b>Docs</b></a>
			  </li>
			  <li className="nav-item">
				<a className="nav-link text-light" href="https://icons.getbootstrap.com/"
                  onMouseOver={(e) => (e.target.style.color = "gray")}
                  onMouseOut={(e) => (e.target.style.color = "white")}><b>Icons</b></a>
			  </li>
			  <li className="nav-item">
				<a className="nav-link text-light"  href="https://themes.getbootstrap.com/" 
                  onMouseOver={(e) => (e.target.style.color = "gray")}
                  onMouseOut={(e) => (e.target.style.color = "white")}><b>Themes</b></a>
			  </li>
			</ul>
		  </div>
		</div>
	  </nav>
    </div>
	);
};

export default Navbar;


