import React from 'react';
import './timeline-list.css';
import TimelineElement from './timeline-element';
import { cardiff, glasgow, timelineArray } from './timeline-element-text';
import { FadeInSection } from '../features/fade-in';



class TimelineList extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
    };

    //this.update = this.update.bind(this);
    
  }

	render() {

		


		let result = (

			<div id="timeline-list" className="timeline-list">

				<h1 className="timeline-main-title">Here's what I've done so far ...</h1>

				{
					this.props.timeline.map(function(timelineElement, index) {


						return (
							
								<TimelineElement link={timelineArray[index].link} title={timelineArray[index].title} subtitle={timelineArray[index].subtitle} date={timelineArray[index].date} description={timelineArray[index].description} image={timelineArray[index].image} hoverText={timelineArray[index].hoverText} timelineElement={timelineElement}/>
							
						);
					})
				}

			</div>


			);

		return result;
	}
}


export default TimelineList;