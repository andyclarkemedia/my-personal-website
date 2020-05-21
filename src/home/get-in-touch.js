import React from 'react';
import './get-in-touch.css';

import anime from 'animejs/lib/anime.es.js';


export class GetInTouch extends React.Component {

	_handleMouseOver(id) {

		const element = document.querySelector(id);

		anime({
			targets: element,
			scale: 1.15,
			easing: 'easeOutExpo'
		})
	}


	_handleMouseOut(id) {

		const element = document.querySelector(id); 

		anime({
			targets: element,
			scale: 1,
			easing: 'easeOutExpo'
		})
	}

	render() {

		let result = (

				<div id="get-in-touch-wrapper" className="get-in-touch-wrapper">

					<p className="get-in-touch-title">GET IN TOUCH</p>
					
					<div className="contact-logo-container">
						<a target="_blank" href="https://www.linkedin.com/in/andy-clarke-media/"><img id="contact-logo-1" className="contact-logo" src={require('../images/linkdin.png')} onMouseOver={()=> this._handleMouseOver("#contact-logo-1")} onMouseOut={()=> this._handleMouseOut("#contact-logo-1")}/></a>
						<a target="_blank" href="mailto:andrewjhclarke@gmail.com"><img id="contact-logo-2" className="contact-logo" src={require('../images/gmail.png')} onMouseOver={()=> this._handleMouseOver("#contact-logo-2")} onMouseOut={()=> this._handleMouseOut("#contact-logo-2")}/></a>
						<a target="_blank" href="https://twitter.com/AndyClarkeMedia"><img id="contact-logo-3" className="contact-logo" src={require('../images/twitter.png')} onMouseOver={()=> this._handleMouseOver("#contact-logo-3")} onMouseOut={()=> this._handleMouseOut("#contact-logo-3")}/></a>
					</div>

				</div>

			);

		return result;
	}
}