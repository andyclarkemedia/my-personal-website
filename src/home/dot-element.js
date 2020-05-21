
import React from 'react';
import './dot-element.css';


export class DotElement extends React.Component {


	handleClick(dotNumber)  {

		const dots = document.querySelectorAll(".dot-element");

		dots.forEach(function(item) {
			item.style.opacity = .4;
		})

		document.querySelector("#dot-" + dotNumber).style.opacity = .8;


		// Select Project Elements

		const projects = document.querySelectorAll('.project-element-wrapper');

		projects.forEach(function(item) {
			item.style.display = "none";
		})

		const currentProject = document.querySelector("#project-element" + dotNumber);

		currentProject.style.display = "flex";

	}


	render() {

		let result = (

				<div id={"dot-" + this.props.dotNumber} className="dot-element" onClick={ () => this.handleClick(this.props.dotNumber) } >
					
				</div>


			);

		return result;
	}
}