import React from "react"
import { Link } from "react-router-dom";

class UserClass extends React.Component{
// class based component is a class that has a method render that returns a peice of jsx
  //React.component is a class that is given by react to us and  UserClass inherits the properties of this class

  constructor(props){

  
    super(props);
   
    this.state={
      userInfo:{
        name: "Dummyname",
        location :"Default",

        
       avatar_url:"https/dblADS",

        // avatar_url:"https:/",


      }
    };
  }
 
  async componentDidMount(){

    const data=await fetch("https://api.github.com/users/shivansh0005");
const json=await data.json();
console.log(json);

this.setState({
  userInfo:json,
});
   

    //We make Api call inside componentDidMount because  it will be called after the compknent loads other data and then when the data from api is fetched it will again re render
  }
render(){
  console.log("Render method called")
    const {name,location}=this.props;
        return (
            <div className="User-Card">

              {/* <img src={avatar_url} alt="" srcset="" /> */}
              <img src={this.state.userInfo.avatar_url} alt=""  />
              <h2>Name:{this.state.userInfo.name}</h2>
              <h3>Location:{this.state.userInfo.location}</h3>
              <h4>Contact Us:@shivansh_50</h4>
           
            </div>
          )
    }


}
export default UserClass;