import React from 'react';
import './love-element.css';


import anime from 'animejs/lib/anime.es.js';

export class LoveElement extends React.Component {

	_handleMouseOver(loveNumber) {

		// Select Wrapper Element
		const wrapper = document.querySelector("#love-element-inner-wrapper" + loveNumber);

		// Animate On MouseOver

		var timeline = anime.timeline({
			easing: 'easeOutExpo'
		})

		timeline
			.add({
				targets: wrapper,
				opacity: .75,
			});
	}

	_handleMouseOut(loveNumber) {

		// Select Wrapper Element
		const wrapper = document.querySelector("#love-element-inner-wrapper" + loveNumber);

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

			

				<div id={"love-element" + this.props.loveNumber} className="love-element" onMouseOver={() => this._handleMouseOver(this.props.loveNumber) } onMouseOut={()=> this._handleMouseOut(this.props.loveNumber)}>

					<div className="love-element-wrapper">
						<div id={"love-element-inner-wrapper" + this.props.loveNumber} className="love-element-inner-wrapper">
							<p className="love-element-text">{this.props.loveText}</p>
						</div>
						<img className="love-element-image" src={this.props.image}/>
					</div>

				</div>


			

			);

		return result;
	}
}