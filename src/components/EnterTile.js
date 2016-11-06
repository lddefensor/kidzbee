import React from 'react'; 

import CommandTile from './CommandTile.js';
/*
 *
 *  when enter key is pressed or tile is clicked
 */

function EnterTile(props){
	return (  
		<CommandTile  
			disabled={props.disabled}
			className='btn-success'
			onClick={props.onClick}
		>
		{props.children}
		</CommandTile>  
	)
}
 
export default EnterTile;