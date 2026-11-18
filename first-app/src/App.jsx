import React from "react";
import AddToCart from "./AddToCart";


function App(){
  //JsCode

  let name = "John"

  

  return(
    // HTML Code
    <div>
     <h2>My Name is {name}  </h2>

     <h1>Welcome To React</h1>
     <p>Hello Guys</p>

     <input placeholder="Enter your Name"  />

     <AddToCart />
    </div>
  )
}

export default App