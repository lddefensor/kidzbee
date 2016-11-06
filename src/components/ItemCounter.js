import React, {PropTypes} from 'react'; 

import RowContainer from './RowContainer.js';   
 
function ItemCounter(props){
	 
	return ( 
    	<RowContainer>
        	<div className="alert alert-info">  
        		Level: {props.level || '0'} &nbsp;&nbsp; 
        		{props.answeredItems}/{props.items} 
        	</div>
        </RowContainer>
	)
}

ItemCounter.propTypes = {
	answeredItems: PropTypes.number,
	items: PropTypes.number
};

ItemCounter.defaultProps = {
	answeredItems: 0,
	items: 0
};
 
export default ItemCounter;