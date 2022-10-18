import React from 'react';
import './styles.css'

export const PageLayoutcomponents = (props) => {


  return (
    <div className="container">
      <div className="container-form">
      <div className="container-login">
      {props.children}
      </div>
      </div>
      
    </div>
  );
};
