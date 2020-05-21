import React from 'react';
import './skills-element.css';
import FadeInSection from '../features/fade-in';
import anime from 'animejs/lib/anime.es.js';

export class SkillElement extends React.Component {


	componentDidUpdate() {
		
	}


	_handleMouseOver (number) {
		

		if ((number === 1) || (number === 100)) {
				anime({
				targets: [document.querySelector("#skill-element" + number)],
				scale: 1.2,
				easing: 'easeOutExpo'
			})

				anime({
				targets: [document.querySelectorAll(".skill-element-novice")],
				scale: .6,
				easing: 'easeOutExpo'
			})


		} else if ((number === 2) || (number === 200)) {
			anime({
				targets: [document.querySelector("#skill-element" + number)],
				scale: 1.2,
				easing: 'easeOutExpo'
			})

				anime({
				targets: [document.querySelectorAll(".skill-element-expert")],
				scale: .6,
				easing: 'easeOutExpo'
			})
		}


		anime({
			targets: document.querySelector("#skill-element" + number),
			scale: 1.15,
			easing: 'easeOutExpo'
		})
	}

	_handleMouseOut (number) {
		anime({
			targets: document.querySelectorAll(".skill-element"),
			scale: 1,
			easing: 'easeOutExpo'
		})
	}

	render() {

		let className = 'skill-element';

		if (this.props.category === "expert") {
			className += " skill-element-expert"
		} else if (this.props.category === "key-expert") {
			className += " skill-element-expert-key"
		} else if (this.props.category === "key-novice") {
			className += " skill-element-novice-key"
		}

		else {
			className += " skill-element-novice"
		}

		let result = (

			<FadeInSection>
				<div id={"skill-element" + this.props.number} className={className} onMouseOver={()=> this._handleMouseOver(this.props.number) } onMouseOut={() => this._handleMouseOut(this.props.number) } >
					<p className="skill-text" >{this.props.skillText}</p>
				</div>
			</FadeInSection>

			);

		return result
	}
}