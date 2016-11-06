import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils'; 

import * as mathHelpers from '../../src/utils/mathHelpers'; 


import Cards from '../../src/components/Cards'; 

var Card = Cards.Card;

function createCards(cards){
	return  shallow(<Cards cards={cards}></Cards>);
}

describe('Cards', function(){
	 
	 var cards = [
	 	mathHelpers.getRandomInteger(0,10),
	 	mathHelpers.getRandomInteger(0,10),
	 	mathHelpers.getRandomInteger(0,10),
	 ];
	 
	 var component = createCards(cards);
	 
	 //should have five children 
	 it('has five children', () => {
	 	expect(component.children().length).toEqual(5);
	 });
	 
	 it('contents should be the value of cards with + = in between', () => {
	 	var text = cards[0] + '+' + cards[1] + '=' + cards[2];
	 	
	 	var initial = component.children().reduce(function(prev, curr){ 
	 		return prev +  (curr.props().children);
	 	},'');
	 	
	 	expect(initial).toEqual(text);
	 });  
	 
	 	 
});


  
  