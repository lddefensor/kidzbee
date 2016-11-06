export function isNumeric(keyboardEvent){
	return !isNaN(parseInt(keyboardEvent.key, 10));
}

export function isEnterKey(keyboardEvent){
	return keyboardEvent.key === 'Enter';
}

export function isBackspaceKey(keyboardEvent){
	return keyboardEvent.key === 'Backspace';
}

