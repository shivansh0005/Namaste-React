// var ele=document.getElementById("root");
// var heading=document.createElement("h1");
// heading.innerHTML="Hello Shivansh";
// ele.append(heading)
import React from "react";
import ReactDOM from "react-dom/client";



//H1 TAG USING JSX

//JSX(trasnpiled before it reaches the JS)->Parcel
//transpiled into react.create element
const jsxheading=<h1 id="Heading" >Namaste Shivansh</h1>
console.log(jsxheading)
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxheading);

//Component-{class based and functional based}

const HeadingComponent=()=>{
  return   <h1>Namaste BIPIN</h1>
}

const A=function(){
    return (

       
        <>
        {1+2}
         <HeadingComponent/>
        <h1> Namaste chintu</h1>
<h2 id="Heading" >Namaste Shivansh</h2>
</>)

    }

    const n=<span>I am an element</span>
    const b=(<div>
      {n}
    <HeadingComponent/>
<h1>Hello</h1>
    </div>)

    const B=()=>{
     return <h1>
      {b}
      {2+3}</h1>
    }

root.render(<B/>)
