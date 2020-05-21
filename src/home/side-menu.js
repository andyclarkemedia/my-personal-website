import React from 'react';
import './side-menu.css';
import anime from 'animejs/lib/anime.es.js';


export class SideMenu extends React.Component {

	render() {

		let result = (
			<div className="side-menu-wrapper">

				<div className="side-menu-text-container">
					<a href="#timeline-list"><p id="menu-timeline" className="menu-text side-menu-text">MY TIMELINE</p></a>
					<a href="#project-list-wrapper"><p id="menu-projects" className="menu-text side-menu-text">PROJECTS</p></a>
					<a href="#skill-container"><p id="menu-skills" className="menu-text side-menu-text">SKILLS</p></a>
					<a href="#bottom-photo"><p id="menu-love" className="menu-text side-menu-text">THINGS I LOVE</p></a>
					<a href="#get-in-touch-wrapper"><p id="menu-contact" className="menu-text side-menu-text">GET IN TOUCH</p></a>
				</div>

				


			</div>
			);


		return result;
	}
}