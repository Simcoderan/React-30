import React from 'react'

function Four() {

    const items =['Item1','Item2', 'Item3','Item4','Item5',]

  return (
  <ul>

    {items.map((item,index)=>{

       return  <li key={index}>{item}</li>
       
    })}
  </ul>
  )
}

export default Four
