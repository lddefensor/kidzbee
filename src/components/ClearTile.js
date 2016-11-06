import React from 'react'; 
import CommandTile from './CommandTile.js';
  
/*
 * when backspace key is pressed or tile is clicked
 */

function ClearTile(props){
	return (
		<CommandTile  
			disabled={props.disabled}
			className='btn-danger'
			onClick={props.onClick}
		>
		{props.children}
		</CommandTile>
	)
}
 
export default ClearTile;