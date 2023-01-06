import React from "react"

function Button(props){
  return(
    <button type={props.type}  className={props.className} style={props.style}>{props.btn}</button>
  )
}

export default Button