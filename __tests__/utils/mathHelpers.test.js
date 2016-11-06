import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import sinon from 'sinon';


import * as mathHelpers from '../../src/utils/mathHelpers'; 


it("generated random integer is within min max", () => {
	var min = 0;
	var max = 20;
	
	var integer = mathHelpers.getRandomInteger(0, 20);
	
	var withinBounds = min <= integer && integer <= max;
	
	expect(withinBounds).toEqual(true);
});

  
  