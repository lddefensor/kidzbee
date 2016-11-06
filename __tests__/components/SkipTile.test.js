import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';

import SkipTile from '../../src/components/SkipTile';
 
function createCommandTile()
{
	const label = 'My Skip Tile';
    return shallow(<SkipTile>{label}</SkipTile>); 
}
it('className is btn-warning', () => {
	
	const btn = createCommandTile();
    expect(btn.className == 'btn-warning'); 
}); 


it('btn should have the classes "btn-warning"', () => {
    const btn = createCommandTile();  
    expect(btn.hasClass('btn-warning'));
});
  