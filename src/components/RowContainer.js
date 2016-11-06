import React, { PropTypes } from 'react'; 

/*
 * RowContainer
 */

function RowContainer(props){
	return (
	<div className={'row row-container ' + props.className}> 
		<div>
			{props.children} 
		</div>
	</div>
	)
}

RowContainer.defaultProps = {
	className: ''
};

RowContainer.propTypes = {
	className: PropTypes.string
};
 
export default RowContainer;