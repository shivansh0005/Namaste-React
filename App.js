// var ele=document.getElementById("root");
// var heading=document.createElement("h1");
// heading.innerHTML="Hello Shivansh";
// ele.append(heading)
import React from "react";
import ReactDOM from "react-dom/client";
var ele=React.createElement(
    "div",
    {id:"Ajnino moto"},[
  React.createElement(
        "h2",
        {},
        "Hello world2"
    ),
    React.createElement(
        "h3",
        {},
        "Hello world2"
    )
],






);
console.log(ele)
var root=ReactDOM.createRoot(document.getElementById("root"))
root.render(ele);
