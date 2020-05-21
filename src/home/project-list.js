import React from 'react';
import { ProjectElement } from './project-element';
import FadeInElement from '../features/fade-in';
import { biz, football, eat } from './project-element-text';
import { DotElement } from './dot-element';

import './project-list.css';

export class ProjectList extends React.Component {

	render() {


		let result = (

			
				<FadeInElement>
					<div id="project-list-wrapper" className="project-list-wrapper">
						<h1 className={"project-title-main"}>MY PROJECTS</h1>
						<ProjectElement link={biz.link} title={biz.title} subtitle={biz.subtitle} image={require("../images/sustainable-biz-game.png")} description={biz.description} projectNumber={1} />
						<ProjectElement link={football.link} title={football.title} subtitle={football.subtitle} image={require("../images/football-vis.png")} description={football.description} projectNumber={2}/>
						<ProjectElement link={eat.link} title={eat.title} subtitle={eat.subtitle} image={require("../images/can-i-eat-this.png")} description={eat.description} projectNumber={3}/>
						<div className="dot-wrapper">
							<DotElement dotNumber={1}/>
							<DotElement dotNumber={2}/>
							<DotElement dotNumber={3}/>
						</div>
					</div>
				</FadeInElement>
				




			


			);


		return result;
	}
}


export default ProjectList;