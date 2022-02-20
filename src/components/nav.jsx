import './styles/nav.css';
import logo from '../logo.png';
import {Link} from 'react-router-dom';
import{
	VscGithub
} from 'react-icons/vsc';

import{
	BsLinkedin
} from 'react-icons/bs';

export default function Nav(){
	var status = 0;

	const change_btn=()=>{
		const menu = document.getElementById('menu');
		const btn = document.getElementById('btn-burger');
		if(status==0){
			btn.classList.add('activate');
			menu.classList.add('expand')
			status = 1;
		}else{
			btn.classList.remove('activate');
			menu.classList.remove('expand');
			status = 0;
		}
	}

	return(
		<header>
			<img src={logo} alt="caducated" />
			<div id="menu" className="ul-menu">
				<ul>
					<Link to="/"><li><button onClick={change_btn}>Home</button></li></Link>
					<Link to="/about-me"><li><button onClick={change_btn}>About me</button></li></Link>
					<Link to="/my-projects"><li><button onClick={change_btn}>My projects</button></li></Link>
					<Link to="/contact-me"><li><button onClick={change_btn}>Contact me</button></li></Link>
				</ul>
			</div>
			<div
				id="btn-burger"
				className="burger"
				onClick={change_btn}
			>
				<div className="line1"></div>
				<div className="line2"></div>
				<div className="line3"></div>
			</div>
			<div className="ul-contact">
				<ul>
					<li>
						<a
							href="https://github.com/SKEGDEV" 
							target="_blank"
							className="github"
						>
							<VscGithub />
						</a>
					</li>
					<li>
						<a 
							href="https://www.linkedin.com/in/edu-gonzalez-910793212"
							target="_blank"
							className="linkedin"
						>
							<BsLinkedin />
						</a>
					</li>
				</ul>
			</div>
		</header>
	)
}
