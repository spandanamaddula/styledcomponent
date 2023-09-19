

// import logo from './logo.svg';
import './App.css';

import React from 'react'

 const StyledComponent = () => {
    const inlineStyle={
        backgroundColor:'orange',
        padding:'10px',
        borderRadius:'5px',
    };
  return (
    <div>
        <h1 style={inlineStyle}>Inline Style Example</h1>
        <p className="external style"> External Style Example</p>
        <StyledComponent/>
    </div>
  );
};
export default StyledComponent;

