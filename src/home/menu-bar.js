import React from 'react';
import './menu-bar.css';
import anime from 'animejs/lib/anime.es.js';
import { SkillElement } from './skills-element';
import { Hamburger } from './hamburger';

export class MenuBar extends React.Component {

	_handleMouseOver(id) {

		if (id.includes("comfort")) {
			anime({
				targets: [document.querySelector(id)],
				scale: 1.2,
				easing: 'easeOutExpo'
			})

				anime({
				targets: [document.querySelectorAll(".skill-element-novice")],
				scale: .6,
				easing: 'easeOutExpo'
			})
		} else if (id.includes("learn")) {
			anime({
				targets: [document.querySelector(id)],
				scale: 1.2,
				easing: 'easeOutExpo'
			})

				anime({
				targets: [document.querySelectorAll(".skill-element-expert")],
				scale: .6,
				easing: 'easeOutExpo'
			})
		}


	}

	_handleMouseOut(id) {
		anime({
			targets: [document.querySelectorAll(".skill-element"), document.querySelector(id)],
			scale: 1,
			easing: 'easeOutExpo'
		})
	}

	render() {

		let result = (

				<div className="full-menu-wrapper">
					<div className="menu-bar">
						
						<div className="menu-text-container">
							<Hamburger/>
							<a href="#timeline-list"><p id="menu-timeline" className="menu-text">MY TIMELINE</p></a>
							<a href="#project-list-wrapper"><p id="menu-projects" className="menu-text">PROJECTS</p></a>
							<a href="#skill-container"><p id="menu-skills" className="menu-text">SKILLS</p></a>
							<a href="#bottom-photo"><p id="menu-love" className="menu-text">THINGS I LOVE</p></a>
							<a href="#get-in-touch-wrapper"><p id="menu-contact" className="menu-text">GET IN TOUCH</p></a>
						</div>
					</div>
					<div className="skill-menu">
						<div id="comfort-menu" className="skill-box" onMouseOver={()=> this._handleMouseOver("#comfort-menu")} onMouseOut={()=> this._handleMouseOut("#comfort-menu")} >
							<p className="skill-text-menu">Comfortable</p>
						</div>
						<div id="learn-menu" className="skill-box" onMouseOver={()=> this._handleMouseOver("#learn-menu")} onMouseOut={()=> this._handleMouseOut("#learn-menu")}>
							<p className="skill-text-menu">Some Experience</p>
						</div>
					</div>
				</div>

			);

		return result;
	}
}


// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};





const scrollFunction = function() {

	// Make Menu Appear 

	const topWrapper = document.querySelector('.top-wrapper').getBoundingClientRect();
	

	const menu = document.querySelector('.side-menu-wrapper');


	if (topWrapper.bottom < 50) {
		document.querySelector('.menu-bar').style.top = "0";
		menu.style.display = 'block';
		anime({
			targets: menu,
			opacity: 1,
			
			easing: "easeOutExpo",
			duration: 500
		})
	} else {
		document.querySelector('.menu-bar').style.top = "-100px";
		menu.style.display = "none";
	}


	// Get Positions Timeline 

	const timeline = document.querySelector('.timeline-list').getBoundingClientRect();


	if ((timeline.top < 0) && (timeline.bottom > 0)) {
		document.querySelector("#menu-timeline").style.color = "#d4a59a";
	} else {
		document.querySelector("#menu-timeline").style.color = "#eae7dc";
	}

	// Get Positions Project 

	const projects = document.querySelector('.project-list-wrapper').getBoundingClientRect();


	if ((projects.top < 0) && (projects.bottom > 0)) {
		document.querySelector("#menu-projects").style.color = "#d4a59a";
	} else {
		document.querySelector("#menu-projects").style.color = "#eae7dc";
	}


	// Get Positions Skills 

	const skills = document.querySelector('.skill-container').getBoundingClientRect();


	if ((skills.top < 0) && (skills.bottom > 0)) {
		document.querySelector("#menu-skills").style.color = "#d4a59a";
	} else {
		document.querySelector("#menu-skills").style.color = "#eae7dc";
	}

	// Get Positions Love 

	const love = document.querySelector('.bottom-photo').getBoundingClientRect();


	if ((love.top < 0) && (love.bottom > 0)) {
		document.querySelector("#menu-love").style.color = "#d4a59a";
	} else {
		document.querySelector("#menu-love").style.color = "#eae7dc";
	}

	// Get Positions Contact 

	const contact = document.querySelector('.get-in-touch-wrapper').getBoundingClientRect();


	if ((contact.top < 0) && (contact.bottom > 0)) {
		document.querySelector("#menu-contact").style.color = "#d4a59a";
	} else {
		document.querySelector("#menu-contact").style.color = "#eae7dc";
	}

	// Skills boxes 

	const skillOne = document.querySelector('#skill-element1');
	const skillTwo = document.querySelector('#skill-element2');
	const skillMenu = document.querySelector('.skill-menu');

	if ((skillOne.getBoundingClientRect().top < -100) && (love.top > 250)) {
		skillMenu.style.display = "flex";
		anime({
				targets: skillMenu,
				opacity: 1,
				duration: 200,
				easing: 'easeOutExpo'
			})
	} else {
		
		anime({
				targets: skillMenu,
				opacity: 0,
				duration: 300,
				easing: 'easeOutExpo'
			})

	}



}



