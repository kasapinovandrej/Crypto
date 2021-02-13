import React from 'react'

const Button = (props) => <button style={{ backgroundColor: props.color }} onClick={props.func} >{props.name}</button>


export default Button
