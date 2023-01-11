import React from "react"

function Input(props){
  return(
    <input type={props.type} name={props.name} value={props.value} onChange={props.onChange} id={props.id} className={props.className} placeholder={props.placeholder} />
  )
}

export default Input