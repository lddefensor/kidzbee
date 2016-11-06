import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import sinon from 'sinon';


import CommandTile from '../../src/components/CommandTile'; 

function createCommandTile()
{
	const label = 'My Command Tile';
	return  shallow(<CommandTile>{label}</CommandTile>);
}

describe('Command Tile', function(){
	
	const btn = createCommandTile();
	
	it('click handler is defined on props', () => { 
		expect(btn.props().onClick);	
	});
	
	
	it('btn should have the classes "btn, btn-block, btn-tile"', () => {
	    expect(btn.hasClass('btn'));
	    expect(btn.hasClass('btn-block'));
	    expect(btn.hasClass('btn-tile'));
	});
	
	it('click handler is called', () => { 
		var onClick = sinon.spy();
		var newBtn = shallow(<CommandTile onClick={onClick}>'My Command Tile'</CommandTile>);
		 
		newBtn.find('button').simulate('click');
		
		expect(onClick.calledOnce).toEqual(true);
		
	});
	
});


  
  