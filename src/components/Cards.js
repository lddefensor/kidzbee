import React, { PropTypes } from 'react'; 

import SignCard from './SignCard.js';
import RowContainer from './RowContainer.js';

/*
 * Card
 */

function Card(props){  
	return (
		<div className={'card ' + props.className + (props.hidden?' answer-card': '')}>
			<div>
				<div className={props.hidden ? 'hide' : ''}>
					{props.children == null ? '' : props.children  }
				</div>
			</div>
		</div>
	)
}

Card.propTypes = {
	hidden: PropTypes.bool.isRequired
}

Card.defaultProps = {
	className: 'col-xs-3'
};

function Cards(props)
{
	return (
		<RowContainer className='card-row'>
			 
	    		<Card hidden={props.answerIndex === 0}>
	    			{props.cards[0]}
	 			</Card>
	    		<SignCard>+</SignCard> 
	    		<Card hidden={props.answerIndex === 1}>
	    			{props.cards[1]}
	 			</Card>  
	    		<SignCard>=</SignCard> 
	    		<Card hidden={props.answerIndex === 2}> 
	    			{props.cards[2]}
	 			</Card> 
    	</RowContainer>
	)
}

Cards.propTypes = {
	cards: PropTypes.array.isRequired,
	answerIndex: PropTypes.oneOf([0,1,2])
};
 

Cards.Card = Card;
export default Cards;