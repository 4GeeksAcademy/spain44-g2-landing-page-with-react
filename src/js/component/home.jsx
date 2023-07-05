import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import  {Jumbotron}  from "./Jumbotron";
import { Footer } from "./Footer";
import Navbar from "./Navbar";

// >>>>>>> main

//create your first component
const Home = () => {
	return (
	
		<div className="text-center">
			<Navbar/>
			
			<h1 className="text-center mt-5">Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>



		</div>
		
	);
};

export default Home;
