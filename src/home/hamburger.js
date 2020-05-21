import React from 'react';
import './hamburger.css';
import anime from 'animejs/lib/anime.es.js';

export class Hamburger extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			active: false
		}

		this._handleClick = this._handleClick.bind(this);
	}


	_handleClick () {

		const hamburger = document.querySelector(".menu-toggle");

		this.animateHamburger();

		if (this.state.active === false) {
			this.setState({ active: true })
		} else {
			this.className = "menu-toggle";
			this.setState({ active: false })
		}



		hamburger.classList.toggle("active");

	}

	animateHamburger() {

		const sidebar = document.querySelector('.side-menu-wrapper');


		if (this.state.active === false) {

			var timeline = anime.timeline({autoplay: true});
			timeline
				.add({
					targets: sidebar,
					width: "10em",
					opacity: "1",
					duration: 500,
					easing: 'easeOutExpo'
				})
				.add({
					targets: [document.querySelectorAll(".side-menu-text-container")],
					opacity: "1",
					duration: 200,
					easing: 'easeOutExpo'
				})

		} else {

			var timelineTwo = anime.timeline({autoplay: true});
			timelineTwo
				.add({
					targets: [document.querySelectorAll(".side-menu-text-container")],
					opacity: "0",
					duration: 200,
					easing: 'easeOutExpo'
				})
				.add({
					targets: sidebar,
					width: "0em",
					opacity: "1",
					duration: 500,
					easing: 'easeOutExpo'
				})
				
			
		}

		
	}

	className = "menu-toggle";

	render() {

		let result = (



				<div className={this.className} onClick={()=> this._handleClick()}>
					<div className="hamburger">
						<span></span>
						<span></span>
						<span></span>
					</div>
					<div className="cross">
						<span></span>
						<span></span>
					</div>
				</div>


			);

		return result;
	}
}
