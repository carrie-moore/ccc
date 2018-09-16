import React from "react"
import containerStyles from "./container.module.css"

export default props => <h1 className="shadow" style={{ 
  fontFamily: 'Montserrat', 
  fontWeight: '300', 
  fontSize: '5rem',
  textTransform: 'uppercase',
  textAlign: 'center',
   }}>
  {props.headerText}</h1>

