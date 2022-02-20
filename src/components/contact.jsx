import './styles/contact.css';
import Rotate from './helpers/rotate.js';
import {useEffect, useState} from 'react'
import emailjs from '@emailjs/browser';
import Activate from './helpers/notification';

export default function Contact(){
		const [email, setEmail] = useState("");
		const [name, setName] = useState("");
		const [message, setMessage] = useState("");

		const send_email = ()=>{
			if(email != "" && name !="" && message != ""){
				const email_params = {
					email: email,
					name: name,
					message: message,
					reply_to: email
				}
				emailjs.send('service_na9c9pu', 'template_ibp3pxo', email_params,'user_yNRTwnb2VUwjyDvgK9VL8')
					.then(function(response) {	
						Activate(
							"All is correct",
							"success",
							"Thank for your message i reply as quicly as possible. code response: "+response.text
						);
					},
					function(error){	
						Activate(
							"Sorry",
							"danger",
							"Sorry but an error ocurred the error is: "+error
						);
					});
				setEmail("");
				setName("");
				setMessage("");
			}
			else{
				Activate(
					"Precaution",
					"warning",
					"Sorry all fields is required please enter your email, name and your message"
				);
			}
		}


	useEffect(()=>{
		const btn = document.getElementById('btn-send');

		btn.addEventListener('mouseenter', ()=>{
			Rotate('btn-send');
		});

	},[]);

	return(
		<div>
			<div className="tittle-contact">
				<h1>Contact</h1>
			</div>
			<div className="contact-form">
				<div className="input">
					<input
						type="email"
						placeholder=" "
						value={email}
						onChange={(event)=>{setEmail(event.target.value);}}
					/>
					<p>Please enter your email</p>
				</div>
				<div className="input">
					<input
						type="text"
						placeholder=" "
						value={name}
						onChange={(event)=>{setName(event.target.value);}}
					/>
					<p>Please enter your name</p>
				</div>
				<textarea
					placeholder="Please enter your message"
					value={message}
					onChange={(event)=>{setMessage(event.target.value);}}
				/>
				<div className="button">
					<button id="btn-send" onClick={send_email}>
						<span className="contact-btn other-text">
							<br />	
							//:Thanks :) --{">"}
						</span>
						//:Send --{">"}
					</button>
				</div>
			</div>
		</div>
	);
}
