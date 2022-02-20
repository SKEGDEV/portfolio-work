import './styles/home.css';
import Rotate from './helpers/rotate';
import {useEffect} from 'react';
import{	RiWhatsappFill, RiInstagramFill } from 'react-icons/ri';
import {ImFacebook2} from 'react-icons/im';

export default function Home(){

	useEffect(()=>{
		const btn = document.getElementById('btn-contact');

		btn.addEventListener('mousemove', ()=>{
			Rotate('btn-contact');
		});
	},[]);

	return(
		<div>
			<div className="text">
				<h1>
					Hello everyone!,
					<br />
					i'm Edu G 
					<br />
					Jr. full stack developer
				</h1>
			</div>
			<div className="button">
				<button id="btn-contact">
					<span className="other-text">
						<br />	
						//:Thanks :) --{">"}
					</span>
					//:Contact me --{">"}
				</button>
			</div>
			<div className="contact-bar">
				<div className="icons">
				<a 
					href="https://www.instagram.com/skeg_developer/"
					target="_blank"
				>
					<div className="icon">
						<RiInstagramFill className="insta"/>
						<p>Instagram</p>
					</div>	
				</a>
				<a
					href="https://wa.me/qr/KMDVZRO4NP2BC1"
					target="_blank"
				>
					<div className="icon">
						<RiWhatsappFill className="whats" />
						<p>Whatsapp</p>
					</div>
				</a>
				<a
					href="https://www.facebook.com/mela.agarran.xD.xD/"
					target="_blank"
				>
					<div className="icon">
						<ImFacebook2 className="face"/>
						<p>Facebook</p>
					</div>	
				</a>
			</div>
			</div>
		</div>
	) 
}
