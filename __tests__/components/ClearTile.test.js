import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';

import ClearTile from '../../src/components/ClearTile'; 

function createCommandTile()
{
	const label = 'My Clear Tile';
    return shallow(<ClearTile>{label}</ClearTile>); 
}
it('className is btn-danger', () => {
	
	const btn = createCommandTile();
    expect(btn.className == 'btn-danger'); 
}); 


it('btn should have the classes "btn-danger"', () => {
    const btn = createCommandTile();  
    expect(btn.hasClass('btn-danger'));
});
  