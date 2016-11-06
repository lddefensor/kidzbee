import React from 'react';  
import '../css/bootstrap.css';
import '../css/main.css'; 

function App(props) {
    return (
      <div>
      	{props.children}
      </div>
    );
  } 

export default App;