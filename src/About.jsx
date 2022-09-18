import React from "react";
import { Link } from "react-router-dom";
import './About.css';
import img from './images/me.jpeg';

//class about extends React.Component<any, any>{
    //constructor(props: any){
      //super(props);
      //this.state = {
        //text:"",
      //}; 
    //}

    const About = () => {
        return(
        <>
        <Link to={'/About'}>
        <div className="about-info">
        </div>
        </Link>
        <div>
            <h1 className="title">About</h1>
            <div id = "preload">
            <img src={img} alt="profile" width="300" height="300"></img>
            </div>
            <p className="content">Hi <span role="img" aria-label="hello">👋</span> I'm Vijay. I was born and raised in Chennai. I did my undergrad in CSE from College Of Engineering Guindy, Anna University. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.</p> 
            <p className="content-2">I like to travel. I believe travelling gives you a new perspective to everything. You get to know a lot about the different cultures, the cuisines, their history, the language and all the small unique things every place has to offer. And I like to play cricket on weekends <span role="img" aria-label="winking">😉</span>.</p>
        </div>
        </>
        
        );
        
    }

export default About;