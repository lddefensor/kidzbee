import React, { PropTypes } from 'react'; 

import RowContainer from './RowContainer.js';
/*
 * Number Tile for keying answers
 */

function NumberTile(props){
	return (
		<div className={'col-xs-1 card tile ' + (props.active ? 'active' : '') } >
			<button className="btn btn-default" onClick={props.onTileClick} >
				{props.children}
			</button>
		</div>
	)
} 

NumberTile.propTypes = {
	active: PropTypes.bool
};

function NumberTiles(props){ 
	var tiles = Array.from(Array(10).keys()).slice(1);
	tiles.push(0); 
	
	var numberTiles = tiles.map(function(val,index){
		var active = val === props.currentKey;
		
		return <NumberTile active={active} key={index} onTileClick={props.onTileClick}>{val}</NumberTile>	
	}); 
	return (
		<RowContainer className="col-xs-12"> 
			{numberTiles}  
		</RowContainer>
	)
}

NumberTiles.propTypes = {
	currentKey: PropTypes.number
}

NumberTiles.Tile = NumberTile;

export default NumberTiles;