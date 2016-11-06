import React, {PropTypes} from 'react';  
import FontAwesome from 'react-fontawesome';   

function ResultsTile(props){
	return ( 
		<div className='results-tile'>
			<div className={'text-success ' + (props.correctAnswers === 0 ? 'hide': '')}>
				{props.correctAnswers} <FontAwesome name='check-circle' />
			</div>
			<div className={'text-warning ' + (props.skipped === 0 ? 'hide': '')}>
				{props.skipped} <FontAwesome name='ellipsis-h' />
			</div>
			<div className={'text-danger ' + (props.wrongAnswers === 0 ? 'hide': '')}>
				{props.wrongAnswers} <FontAwesome name='times-circle' />
			</div>
		</div>
	)
}

ResultsTile.propTypes = {
	correctAnswers: PropTypes.number,
	skipped: PropTypes.number,
	wrongAnswers: PropTypes.number
};

ResultsTile.defaultProps = {
	correctAnswers: 0,
	skipped: 0,
	wrongAnswers: 0
};
 
export default ResultsTile;