import React from 'react'; 
import CommandTile from './CommandTile.js';
  
/*
 * when backspace key is pressed or tile is clicked
 */

function SkipTile(props){
	return (
		<CommandTile  
			disabled={props.disabled}
			className='btn-warning'
			onClick={props.onClick}
		>
		{props.children}
		</CommandTile>
	)
}
 
export default SkipTile;