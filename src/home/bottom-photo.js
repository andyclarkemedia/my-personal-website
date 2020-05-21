import React from 'react';
import './bottom-photo.css';
import { LoveElement } from './love-element';

export class BottomPhoto extends React.Component {

	render() {

		let result = (

				<div id="bottom-photo" className="bottom-photo">
					<h1 className="love-title">THINGS I LOVE</h1>
					<div className="love-element-container">
						<LoveElement loveNumber={1} loveText={"BASKETBALL"} image={require('../images/love-images/basketball.png')}/>
						<LoveElement loveNumber={2} loveText={"LIVE MUSIC"} image={require('../images/love-images/live-music.png')}/>
						<LoveElement loveNumber={3} loveText={"BEACHES"} image={require('../images/love-images/beaches.png')}/>
						<LoveElement loveNumber={4} loveText={"DRIVING"} image={require('../images/love-images/driving.png')}/>
						<LoveElement loveNumber={5} loveText={"WALKING"} image={require('../images/love-images/walking.png')}/>
						<LoveElement loveNumber={6} loveText={"DRAWING & ANIMATION"} image={require('../images/love-images/drawing.png')}/>
						<LoveElement loveNumber={7} loveText={"WOODWORK"} image={require('../images/love-images/woodwork.png')}/>
						<LoveElement loveNumber={8} loveText={"TRAVEL"} image={require('../images/love-images/travel.png')}/>
						<LoveElement loveNumber={9} loveText={"FOOTBALL"} image={require('../images/love-images/football.png')}/>
						<LoveElement loveNumber={10} loveText={"BARBECUES"} image={require('../images/love-images/barbecue.png')}/>
					</div>
				</div>

			);

		return result;

	}
}