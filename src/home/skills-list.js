import React from 'react';
import './skills-list.css';
import { SkillElement } from './skills-element';
import FadeInSection from '../features/fade-in';


export class SkillsList extends React.Component {


	render() {

		let result = (

				<FadeInSection>

					<div id="skill-container" className="skill-container">
						<h1 className="skills-top-title">SKILLS</h1>
						<div className="skills-list">
							<SkillElement number={1} category={"key-expert"} skillText={"Comfortable"} />
							<SkillElement number={2} category={"key-novice"} skillText={"Some Experience"}  />
						</div>
						<h1 className="skills-subtitle right">Development</h1>
						<div className="skills-list">
							<SkillElement number={3} category={"expert"} skillText={"REACT"} />
							<SkillElement number={4} category={"expert"} skillText={"HTML5"}  />
							<SkillElement number={5} category={"expert"} skillText={"CSS"} />
							<SkillElement number={6} category={"expert"} skillText={"D3"} />
							<SkillElement number={7} category={"novice"} skillText={"NODE"} />
							<SkillElement number={8} category={"expert"} skillText={"GIT"} />
							<SkillElement number={9} category={"novice"} skillText={"DJANGO"} />
							<SkillElement number={10} category={"novice"} skillText={"AGILE METHODS"} />
							<SkillElement number={11} category={"expert"} skillText={"RESPONSIVE DESIGN"} />
							<SkillElement number={12} category={"novice"} skillText={"RESTFUL APIS"} />
							<SkillElement number={13} category={"novice"} skillText={"CROSS BROWSER COMPATIBILITY"} />
						</div>
						<h1 className="skills-subtitle left">Data Science</h1>
						<div className="skills-list">
							<SkillElement number={14} category={"expert"} skillText={"PYTHON"} />
							<SkillElement number={15} category={"expert"} skillText={"PANDAS"} />
							<SkillElement number={16} category={"novice"} skillText={"NUMPY"} />
							<SkillElement number={17} category={"novice"} skillText={"NLP"} />
							<SkillElement number={18} category={"expert"} skillText={"EXCEL"} />
							<SkillElement number={19} category={"novice"} skillText={"SQL"} />
						</div>
						<h1 className="skills-subtitle right">Design</h1>
						<div className="skills-list">
							<SkillElement number={20} category={"novice"} skillText={"PHOTOSHOP"} />
							<SkillElement number={21} category={"expert"} skillText={"ILLUSTRATOR"} />
							<SkillElement number={22} category={"expert"} skillText={"UX DESIGN"} />
							
						</div>
						<h1 className="skills-subtitle left">Misc</h1>
						<div className="skills-list">
							<SkillElement number={23} category={"expert"} skillText={"OSINT"} />
						</div>
					</div>
				</FadeInSection>

			);

		return result;
	}
}