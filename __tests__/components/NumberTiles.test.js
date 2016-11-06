import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils'; 


import NumberTiles from '../../src/components/NumberTiles'; 

var NumberTile = NumberTiles.Tile;

function createNumberTiles(currentKey){
	return  shallow(<NumberTiles currentKey={currentKey}></NumberTiles>);
}

describe('Number Tiles', function(){
	 
	 const currentKey = 1;
	 var component = createNumberTiles(currentKey);
	 it('expects ten tiles', () => {
	 	
	 	expect(component.children().length).toEqual(10);
	 })
	 
	 //expects last child to be zero
	 it('expects values to be from 1 to 9 then 0', () => {
	 	var text = '1234567890';
	 	var initial = component.children().reduce(function(prev, curr){ 
	 		return prev +  (curr.props().children);
	 	},'');
	 	
	 	expect(initial).toEqual(text);
	 	
	 });
	 
	 
	it('expects currentKey has active props', () => {
		var index = currentKey - 1;
		if(currentKey == 0) index = 9;
		
		var act = component.children().get(index); 
		expect(act.props.active).toEqual(true);  
		
	});
	 
	 
	it('expects one active child', () => {
		
		var activeChildren = (component.findWhere(function(d){
			return d.props().active;
		}));
		expect(activeChildren.length).toEqual(1); 
	});
	
});


  
  