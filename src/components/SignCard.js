import React from 'react'; 

/*
 * Sign (like + or =)
 */

function SignCard(props){
	return (
		<div className='col-xs-1 sign card'>
			<div>
				{props.children}
			</div>
		</div>
	)
}
 
export default SignCard;