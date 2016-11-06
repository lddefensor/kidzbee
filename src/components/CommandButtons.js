import React from 'react'; 
import EnterTile from './EnterTile.js';
import SkipTile from './SkipTile.js';
import ClearTile from './ClearTile.js';
   
function CommandButtons(props){
	return (
		<div className='command-buttons'>
			<EnterTile 
				disabled={props.answerIndex == null}
				onClick={props.onEnterClick}  
				> 
					Answer 
			</EnterTile>
			<SkipTile 
				onClick={props.onSkipClick}  
				>
					{props.answerIndex == null ? 'Next' : 'Skip'} 
			</SkipTile>
			<ClearTile
				onClick={props.onClearClick}  
				>
					Clear 
			</ClearTile>
		</div>
	)
}
 
export default CommandButtons;