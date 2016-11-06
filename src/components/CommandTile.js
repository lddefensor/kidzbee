import React from 'react'; 

/*
 * when enter key is pressed or tile is clicked
 */

function CommandTile(props){ 
	if(props.disabled)	{
		return (
			<button type="button" 
				disabled
				className={'disabled btn btn-block btn-tile ' + props.className}>
				{props.children}
			</button>
		)
	}
	return ( 
			<button type="button" 
				onClick={props.onClick}
				className={'btn btn-block btn-tile ' + props.className}>
				{props.children}
		</button>
	)
}

CommandTile.defaultProps = {
	className: ''
}
 
export default CommandTile;