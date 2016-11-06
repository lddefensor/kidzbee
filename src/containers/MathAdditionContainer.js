import React, { PropTypes, Component } from 'react';   

//Math App
import MathAddition from '../components/MathAddition.js';
import * as mathHelpers from '../utils/mathHelpers.js';
import * as keyboardEventHelpers from '../utils/keyboardHelpers.js';
 

class MathAdditionContainer extends Component {   
	constructor(props){
		super(props);
		
		//container of answer
		this.valArray = [];
		
		var min = 0, max = 20, level = 0, items = 5;
		
		this.state = {
			correct: null,
			myAnswer: null,
			keyPressed: null,
			min: min,
			max: max,
			
			items: items,
			answeredItems: 0,
			wrongAnswers: 0,
			correctAnswers: 0,
			skipped: 0,
			 
			cards: this.getCards(min, max, level),
			answerIndex: 2,
			
			//levels
			level: 0,
			difficulty: 'Easy', //Easy, Medium, Difficult
		}; 
	} 
	
	getCards(min, max, level)
	{  
		var index = mathHelpers.getRandomInteger(0,1);
		var index2 = index === 0 ? 1 : 0;
		var addend1 = index === 0 ? level : mathHelpers.getRandomInteger(0,level);
		var addend2 = mathHelpers.getRandomInteger(min, max);
		 
		var cards = [];
		cards[index] = addend1;
		cards[index2] = addend2;
		cards[2] = addend1 + addend2;
		
		return cards;
	}
	    
	handleTileClick(event){  
		
		var number = parseInt(event.target.innerText, 10);
		
		if(isNaN(number)) {
			this.setState({
				keyPressed: null 
			}); 
			return;
		}
		
		this.valArray.push(number); 
		
		var answer = this.valArray.join('');
		answer = answer ? parseInt(answer, 10) : null;
		this.setState({
			keyPressed: number,
			myAnswer: answer
		}); 
	}
	
	handleEnterClick(event){  
		
		if(this.state.answerIndex == null)
		{
			return this.handleSkipClick(event);
		}
		  
		
		var answer = this.state.myAnswer;
		var answerIndex = this.state.answerIndex;
		var correctAnswers = this.state.correctAnswers;
		var wrongAnswers = this.state.wrongAnswers;
		var correct = this.state.correct; 
		var cards = this.state.cards;
		
		var ca = cards[answerIndex];
		correct = ca === answer;
		if(correct)
		{
			correctAnswers += 1;
		} 
		else
		{
			wrongAnswers += 1;
		} 
		
		this.setState({  
			answerIndex: null,
			correctAnswers: correctAnswers, 
			wrongAnswers: wrongAnswers,
			correct: correct
		}); 
		
	}
	
	handleSkipClick(event){ 
		
		this.context.router.push({
			pathname: '/' + this.state.answeredItems,
			state: this.state 
		});
		 
	}
	
	
	handleClearClick(event){

		if(this.state.answerIndex == null) return;
		
		this.valArray = [];
		
		this.setState({
			myAnswer: null
		});
	}
	
	
	onKeyUp(event){
		if(keyboardEventHelpers.isEnterKey(event))
		{
			this.handleEnterClick(event);
			return;
		}
		
		if(keyboardEventHelpers.isBackspaceKey(event))
		{
			this.handleClearClick(event);
			return;
		}
	}
	
	onKeyDown(event){  
		
		if(this.state.answerIndex == null) return;
		
		console.log(event.key);
		//check if it's enter key
		if(
			keyboardEventHelpers.isEnterKey(event) ||
			keyboardEventHelpers.isBackspaceKey(event)
		)
		{ 
			this.setState({
				keyPressed: null
			});
			return;
		}  
		//check if it's numeric
		var isNumeric = keyboardEventHelpers.isNumeric(event);
		
		var key = null;
		
		if(isNumeric) 
		{
			key = parseInt(event.key, 10);
			
			this.valArray.push(key);
		}
		
		var answer = this.valArray.join('');
		answer = answer ? parseInt(answer, 10) : null;
		this.setState({
			keyPressed: key,
			myAnswer: answer
		}); 
	}
	componentWillReceiveProps(nextProps)
	{
		var state = nextProps.location.state;
		this.valArray = [];
		if(state)
		{
			var level = state.level;
			var items = state.items;
			  
			var answeredItems = state.answeredItems;
			if(items == answeredItems)
			{ 
				level += 1;
				answeredItems = 0;
			}
			else 
				answeredItems += 1;
			
			var answer = state.myAnswer;
			var answerIndex = state.answerIndex; 
			var correct = state.correct;
			var skipped = state.skipped;
			var cards = state.cards;
			
			if(answer == null)
			{
				skipped +=  1;
			} 
			 
			var difficulty = state.difficulty;
			
			var index = Math.random() > 0.5 ? 0 : 1;
			var index2 = index == 0 ? 1 : 0;
			var addend1 = index == 0 ? level : mathHelpers.getRandomInteger(0,level);
			var addend2 = mathHelpers.getRandomInteger(state.min, state.max);
			
			 
			cards = [];
			cards[index] = addend1;
			cards[index2] = addend2;
			cards[2] = addend1 + addend2;
			
			this.valArray = [];
			
			this.setState({
				answeredItems: answeredItems, 
				answerIndex: 2,   
				skipped: skipped,
				level: level,
				cards: cards,
				myAnswer: null,
				correct: null,
			});
			
		}	
	}
	
	componentDidMount(){
		//add Event Handler to document
		document.addEventListener('keydown', this.onKeyDown.bind(this));
		document.addEventListener('keyup', this.onKeyUp.bind(this));
	}
	
	componentWillUnmount(){
		//remove event handler to document
		document.removeEventListener('keydown', this.onKeyDown);
		document.addEventListener('keyup', this.onKeyUp);
	}
	
	render() { 
		
		return ( 
			<div> 
				<MathAddition
					level={this.state.level}								
					cards={this.state.cards} 
					answerIndex={this.state.answerIndex}
					correct={this.state.correct}
					keyPressed={this.state.keyPressed}
					myAnswer={this.state.myAnswer}
					
					items={this.state.items}
					answeredItems={this.state.answeredItems}
					skipped={this.state.skipped}
					correctAnswers={this.state.correctAnswers}
					wrongAnswers={this.state.wrongAnswers}
					
					onEnterClick={this.handleEnterClick.bind(this)}
					onClearClick={this.handleClearClick.bind(this)}
					onSkipClick={this.handleSkipClick.bind(this)}
					onTileClick={this.handleTileClick.bind(this)}
				/> 
			</div>
			    
		);
	}
}

MathAdditionContainer.contextTypes = {
	router: PropTypes.object.isRequired
};
 
  
export default MathAdditionContainer;