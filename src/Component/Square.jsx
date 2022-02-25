import React from 'react'

function Square({value, onClick, style}) {
  return (
    <row>
      <button style={style} onClick={onClick}>{value}</button>
    </row>
    
  )
}


export default Square;