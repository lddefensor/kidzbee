import React, {PropTypes} from 'react'; 

import RowContainer from './RowContainer.js'; 
import Cards from './Cards.js'; 
import CommandButtons from './CommandButtons.js'; 
import ResultsTile from './ResultsTile.js'; 

var Card = Cards.Card;
 
function AnswerContainer(props){
	
	var answerClass = props.correct == null ? '' : (props.correct?  'correct': 'wrong');  
	
	return (
		<RowContainer  className='card-row'>
    		<ResultsTile 
    			correctAnswers={props.correctAnswers}
    			wrongAnswers={props.wrongAnswers}
    			skipped={props.skipped}
    		/>
    		<Card className={'my-answer answer-card ' + answerClass}hidden={false}>
    			{props.myAnswer}
    		</Card>
    	
    		<CommandButtons 
    			answerIndex={props.answerIndex}
				onEnterClick={props.onEnterClick}  
				onSkipClick={props.onSkipClick}  
				onClearClick={props.onClearClick}  
    		/>
    	</RowContainer>
	)
}

AnswerContainer.propTypes = {
	answerIndex: PropTypes.number,
	correct: PropTypes.bool,
	correctAnswers: PropTypes.number,
	myAnswer: PropTypes.number,
	onSkipClick: PropTypes.func,
	onClearClick: PropTypes.func,
	onEnterClick: PropTypes.func,
	skipped: PropTypes.number,
	wrongAnswers: PropTypes.number
};

AnswerContainer.defaultProps = {
	correctAnswers: 0,
	skipped: 0,
	wrongAnswers: 0
}
 
export default AnswerContainer;