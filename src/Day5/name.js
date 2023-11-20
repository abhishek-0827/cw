import React from 'react'

export default function Name(studentName) {
    try{
        if(studentName==="Ajay")
        {
            throw new Error("Ajay name is not acceptable")
        }
    }
    catch(error){
         console.log(error)
         document.write("write any other name"); 
    }
    finally
    {
        Document.write("always execute")
    }
  return (
    <div>
      <h1>My name is{studentName}</h1>
    </div>
  )
}
