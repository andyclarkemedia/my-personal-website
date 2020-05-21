
import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import HeaderImage from './home/top-image';
import TimelineElement from './home/timeline-element';
import TimelineList from './home/timeline-list';
import { timelineArray } from './home/timeline-element-text';
import ProjectList from './home/project-list';
import { MiddleImage } from './home/middle-image';
import { SkillsList } from './home/skills-list';
import { SecondMidPhoto } from './home/second-mid-photo';
import { BottomPhoto } from './home/bottom-photo';
import { GetInTouch } from './home/get-in-touch';
import { MenuBar } from './home/menu-bar';
import { SideMenu } from './home/side-menu';

import './style.css';

import './App.css';



class App extends React.Component  {


  render () {

    let result = (


    <div>
      
      
      <MenuBar/>
      <SideMenu/>
      <HeaderImage/>
      <TimelineList timeline={timelineArray}/>
      <MiddleImage/>
      <ProjectList/>
      <SecondMidPhoto/>
      <SkillsList/>
      <BottomPhoto/>
      <GetInTouch/>



    </div>
     

      );


    return result;


  }
  
}


export default App;


ReactDOM.render(<App/>, document.getElementById("root"));