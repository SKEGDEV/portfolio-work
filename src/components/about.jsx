import './styles/about.css'
import Rotate from './helpers/rotate.js';
import { useEffect } from 'react';
import javascript from '../img/javascript.svg';
import react from '../img/reactjs.svg';
import python from '../img/python.svg';
import mysql from '../img/mysql.svg';
import cv from './files/cv.pdf';

export default function About(){

	useEffect(()=>{
		const btn = document.getElementById('btn-cv');	

		btn.addEventListener('mousemove', ()=>{
			Rotate('btn-cv');
		});

	},[]);

	return(
		<div>
			<div className="tittle">
				<h1>About me</h1>
			</div>
			<div className="text-about">
				<p>
					<span className="text-blue">
					Hello, i'm a web developer i have some 
					experience as freelance and i want get
					professional experience. I developed 
					applications with C# windows form in 
					my first professional experience, and 
					currently i pivot towards web development, 
					i develop in backend and frontend.
					</span>
					<br />
					<br />	
					<span className="text-gold">
					I have kowledge in React js for the 
					frontend, Express js and Python Flask for
					the backend, i maked some applications with
					this technologies and every day i learn more
					and more for this technologies. As a plus 
					i have knowledge of relationships data base
					with MYSQL  and SQL server and currently 
					i learn about Mongo DB for no relational 
					data base.
					</span>
					<br />
					<br />
					<span className="text-blue">
					If i have a problem to solve a project, i
					search documentation for this problem and
					i always look for the way to solve the
					problem and learn about, i like challenges
					and learn from them.
					</span>
				</p>
			</div>
			<div className="button">
				<a href={cv} download="cv.pdf" target="_blank">
				<button id="btn-cv">
				<span className="other-text cv">	
					<br />	
					//:Thanks :) --{">"}
				</span>
					//:Download CV --{">"}
				</button>
					</a>
			</div>
			<div className="tittle skills">
				<h1>Skills</h1>
			</div>
			<div className="cards">
				<div className="card">
					<img src={javascript} alt="caducated" />
					<h2 className="text-gold">JAVASCRIPT</h2>
					<p className="text-blue">
						In JS i have more knowledge as i can
						develop API Rest and clients for this 
						APIs, i use the framwork Expres JS for
						program API and i developed some APIs for
						this framework for practice my skills and
						be a best version of me. I can develop 
						API Rest with routes, Json web tokens and
						more.
					</p>
				</div>
				<div className="card">
					<img src={react} alt="caducated" />
					<h2 className="text-gold">REACT JS</h2>
					<p className="text-blue">
						I use React JS to make clients to
						my API Rest, i have knowledge of design
						of interface with this framework, i know
						also responsive design with CSS, i design
						with CSS and some framework of this style
						language, for example this website it's
				  	designed with pure CSS and programed with
						React JS for me, but i also can
						development with CSS, HTML, and JS pure,
						for me pivot to other framwork of JS it's
						easy i only need read the documentation 
						for learn of other framework.
					</p>
				</div>
				<div className="card">
					<img src={python} alt="caducated" />
					<h2 className="text-gold">PYTHON</h2>
					<p className="text-blue">
						In python i developed applications of
						backend with the framework Flask, i 
						program a application with routes, 
						blueprints and json web tokens to 
						validate users from the backend. I
						have kowledge of this language to make
						API Rest, and for me it's some easy
						to pivot for other framework in this
						language.
					</p>
				</div>
				<div className="card">
					<img src={mysql} alt="caducated" />
					<h2 className="text-gold">MYSQL</h2>
					<p className="text-blue">
						I developed some data base, with 
						stored procedure, fucntions, triggers
						and joiners, i like optimizes all 
						porcediment this for write less
						code of the applications and that 
						everything works more behind of the code.
					</p>
				</div>
			</div>
		</div>
	)
}
