import React from "react"

function Button(props){
  return(
    <button type={props.type} onClick={props.onClick}  className={props.className} style={props.style}>{props.btn}</button>
  )
}

export default Button