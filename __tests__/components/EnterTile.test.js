import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';

import EnterTile from '../../src/components/EnterTile';

function createCommandTile()
{
	const label = 'My Enter Tile';
    return shallow(<EnterTile>{label}</EnterTile>); 
}
it('className is btn-success', () => {
	
	const btn = createCommandTile();
    expect(btn.className == 'btn-success'); 
}); 


it('btn should have the classes "btn-success"', () => {
    const btn = createCommandTile();  
    expect(btn.hasClass('btn-success'));
});
  