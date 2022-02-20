import './styles/projects.css';
import poke from '../img/poke.svg';
import rick from '../img/rick.svg';

export default function Projects(){	

	return(
		<div>
			<div className="projects-tittle">
				<h1>Projects</h1>
			</div>
			<div className="projects">
				<div className="project">
					<img src={rick} alt="caducated" />
					<h4 className="text-gold">
						Please hover or click me
					</h4>
					<h2 className="text-gold">RICK-API</h2>
					<p className="text-blue">
						This project is a client for a API Rest
						called Rick and Morty Api, this API 
						provides information and images of all
						character of this television series. I 
						makes a list of this character's and 
						if you wish you can filter a some character
						to search your favorite character. If 
						you want try this project, please
						click the button.
					</p>
					<a href="http://SKEGDEV.github.io/rickapi" target="_blank">
					<button className="rick">
						<span className="rick-blue">
							<p>
								Rick Api
							</p>
						</span>
						<span className="rick-green">
							<p>
								Rick Api
							</p>
						</span>
						View project 
					</button>
						</a>
				</div>
				<div className="project">
					<img src={poke} alt="caducated" />
					<h4 className="text-gold">
						Please hover or click me
					</h4>
					<h2 className="text-gold">POKE-API</h2>
					<p className="text-blue">
						In this project i did a client maked with
						React JS and in this i consumed a API Rest
						called as Poke Api, this API provides
						information of all pokemon and sprites,
						in this client you can search a pokemon
						in the list or you can search your pokemon
						for name. If you want try this project
						please click the button.
					</p>
					<a href="http://SKEGDEV.github.io/pokeapi" target="_blank">
					<button className="poke">
						<span className="poke-red">
							<p>
								Poke api
							</p>
						</span>
						<span className="poke-white">
							<p>
								Poke api
							</p>
						</span>
						View project 
					</button>
						</a>
				</div>
			</div>
			<div className="tittle-footer">
				<h2>
					If you want see more of my work, please 
					visist my github link in the nav
				</h2>
			</div>
		</div>
	);
}
