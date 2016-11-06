import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import sinon from 'sinon';


import CommandButtons from '../../src/components/CommandButtons';  

function createCommandButtons(props)
{ 
	return  shallow(
		<CommandButtons 
			answerIndex={props.answerIndex}
			onEnterClick={props.onEnterClick}  
			onSkipClick={props.onSkipClick}  
			onClearClick={props.onClearClick}  
		/> 
	);
}

describe('Command Buttons', function(){
	 
	it("howdy", () => {
		expect(true).toEqual(false);
	})
});


  
  