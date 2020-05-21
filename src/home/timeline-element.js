import React from 'react';
import './timeline-element.css';
import FadeInSection from '../features/fade-in';





class TimelineElement extends React.Component {



	render() {

		let result = (
			<FadeInSection>
			<div>
				
				<div className="timeline-element-wrapper">

					<div className="image-container container">
						<img className="timeline-image image" src={this.props.image} />
						<div className="middle">
							<p className="hover-text">{this.props.hoverText}</p>
							<a href={this.props.link} target="_blank"><button className="timeline-button">View Site</button></a>
						</div>
					</div>
					<h1 className="timeline-title">{this.props.title}</h1>
					<h2 className="timeline-subtitle">{this.props.subtitle + ", " + this.props.date}</h2>
					<p className="timeline-description">{this.props.description}</p>
					

				</div>
			</div>
			</FadeInSection>
			);

		return result;
	}
}


export default TimelineElement;