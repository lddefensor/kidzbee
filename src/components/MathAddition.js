import React, { PropTypes } from 'react';  

//custom imports
import RowContainer from './RowContainer.js';  
import ItemCounter from './ItemCounter.js';
import Cards from './Cards.js'; 
import AnswerContainer from './AnswerContainer.js';  
import NumberTiles from './NumberTiles.js';

import '../css/MathAddition.css';

/*
 * Math App returns three cards 
 */

function MathAddition(props) {   
    return (
      <div>    
        <ItemCounter 
        	level={props.level}
        	answeredItems={props.answeredItems}
        	items={props.items}
        />
        
        <Cards cards={props.cards} answerIndex={props.answerIndex}/>
    	 
    	<AnswerContainer 
    			myAnswer={props.myAnswer}
    			answerIndex={props.answerIndex}
				onEnterClick={props.onEnterClick}  
				onSkipClick={props.onSkipClick}  
				onClearClick={props.onClearClick}  
    			correct={props.correct}
    			correctAnswers={props.correctAnswers}
    			wrongAnswers={props.wrongAnswers}
    			skipped={props.skipped}
    	 />
    	
		<NumberTiles currentKey={props.keyPressed} onTileClick={props.onTileClick}/>   
      </div>
    ); 
}

MathAddition.propTypes = {
	answeredItems: PropTypes.number,
	items: PropTypes.number,
	
	answerIndex: PropTypes.number,
	cards: PropTypes.array.isRequired,
	
	myAnswer: PropTypes.number,
	onEnterClick: PropTypes.func,
	onSkipClick: PropTypes.func,
	onClearClick: PropTypes.func,
	correct: PropTypes.bool,
	correctAnswers: PropTypes.number,
	wrongAnswers: PropTypes.number,
	skipped: PropTypes.number
};

MathAddition.defaultProps = {
	cards: [0, 0, 0]
}

export default MathAddition;