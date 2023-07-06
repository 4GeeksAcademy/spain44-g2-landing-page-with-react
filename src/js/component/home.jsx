import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";



import  {Jumbotron}  from "./Jumbotron";
import { Footer } from "./Footer";
import Navbar from "./Navbar";
import {Cards} from "./Cards"




//create your first component
const Home = () => {
	return (
	
		<div className="text-center">
			<Navbar/>
			<Jumbotron/>
			<Cards/>
			<Footer/>
		</div>
		
	);
};

export default Home;
