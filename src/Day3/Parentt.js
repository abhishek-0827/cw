import React,{useState} from 'react'

export default function Parentt() {
    const[college,setcollege]=useState("SKCET")
  return (
    <div>
      <h1>my college is {college}</h1>
      <button onClick={()=>setcollege("ATRIA")}>click on</button>
    </div>
  )
}
