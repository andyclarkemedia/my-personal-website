import React from 'react';
import './project-element.css';


import anime from 'animejs/lib/anime.es.js';



export class ProjectElement extends React.Component {

	_handleMouseOver(projectNumber) {

		// Select Wrapper Element
		const wrapper = document.querySelector("#project-inner-wrapper" + projectNumber);

		// Animate On MouseOver

		var timeline = anime.timeline({
			easing: 'easeOutExpo'
		})

		timeline
			.add({
				targets: wrapper,
				opacity: .8,
			});
	}

	_handleMouseOut(projectNumber) {

		// Select Wrapper Element
		const wrapper = document.querySelector("#project-inner-wrapper" + projectNumber);

		// Animate On MouseOver

		var timeline = anime.timeline({
			easing: 'easeOutExpo'
		})

		timeline
			.add({
				targets: wrapper,
				opacity: 0,
			});
	}


	render() {


		let result = (

				<div id={ "project-element" + this.props.projectNumber } onMouseOver={() => this._handleMouseOver(this.props.projectNumber) } onMouseOut={() => this._handleMouseOut(this.props.projectNumber) } className="project-element-wrapper">



					<div className="project-element">

						<div id={"project-inner-wrapper" + this.props.projectNumber} className="project-inner-wrapper">

							<p className="project-subtitle">{this.props.subtitle}</p>
							<p className="project-title">{this.props.title}</p>
							<p className="project-description">{this.props.description}</p>
							<a href={this.props.link} target="_blank"><button className="project-button">View Project</button></a>

						</div>

						<img className="project-image" src={this.props.image}/>
					</div>

				</div>

			);

		return result;
	}

};

