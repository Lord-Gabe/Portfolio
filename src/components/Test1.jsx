import { useState} from "react";
import Time from "./Time";
import profileImage from '../assets/Pro2.png'//To get an image into the project
import bg from '../assets/Octagon.jpg'
import armageddon from '../assets/armageddon.png'
import TD from '../assets/TD.png'
import ques from '../assets/Question.png'
import { Link } from "react-router-dom";

export default function Test1(props){
    const [name,setName]= useState("User");
    const [num,setnum] = useState(0);

    const user = {
        id: "1G84B3H84JF",
        create_date:"20/5/2025",
        day:"Tuesday"
    }

    const fruits = ['Apple','Pineapple','Tangerine','Mango','Guava'] //Array

    const fruits2 = [
        //Array objects
        {name: "Apple", price: "#1000"},
        {name: "Pineapple", price: "#3000"},
        {name: "Tangerine", price: "#500"},
        {name: "Mango", price: "#200"},
        {name: "Guava", price: "#100"}
    ]

    const person1 = {//Object
        name: "Samuel",
        age: 24,
        profession: "Student"
    }

    const person2 = {//Object
        name: "Amazing Grace",
        age: 18,
        profession: "Student"
    }

    function add(){
        var namus = prompt("What is your name?"); //To ask for a value
        if ((namus == "") || (namus == null) || (namus == undefined)){
            alert("Type in a valid name");//To display an alert type message
        }else{
            if (namus.length < 4){
                alert("Name must be atleast 4 characters long");
            }else{
                setName(namus);
                setnum(num + 1);
            }
        }
    }

        //To go to next page 
        function next_page(){
            <Link to="/Affliates"></Link>;
        }

        function upper_page(){
            <Link to="/Donate"></Link>;
        }

  return (
    <>
    <head>
        <title>LG's Studio</title>
    </head>

    <header>
        <div id="head">
            <h2 id="title">
                LG STUDIO
            </h2>
            <ul id="nav">
                <il> <a id= "c" href="/Affliates" onClick={next_page()}>Affliates</a> </il>
                <il> <a id="d" href="/Donate" onClick={upper_page()}>Donate</a> </il>
            </ul>
        </div>
    </header>
    
    <div id="clock">
        <h3>Current Time: <Time/> </h3><br/><br/>
    </div>
        

        {/* <p> Your default reference code number: {user.id}. Created on {user.create_date} {user.day}
        </p>
        <p> Welcome {name} with customer number: {num}</p>
        <button type="submit" onClick={add}>Count</button><br/> */}

      
            {/* <img id="img" src={cover} height="500" width="750"/>    */}

 
            <br/><br/>
            <section id="sec1-profile">
                <img id="profile-img" src={profileImage} height="450" width="350"/>
            </section>
            <section id="sec1-intro">
                <div id="intro">
                    <section id="inner-black">
                        <h2 id="intro-head-black">Just a brief info</h2><br/>
                    <p>My name is Gabriel or simply call me Gabe</p> 
                    <p>Overall, just learning how to do this is much of a science on its own, but due to my downpart of not having data
                        and access to my laptop for about a month, ive been really slowed down. I do hope to catch up soon.
                    </p>
                    </section>
                </div>
            </section>
            <br/>
    

            <br/><br/><br/><br/><br/>
                {/* <h2>Companions</h2>
                <p>Simply just calling in the passed props(objects and its properties in this case): </p>
                <p>1. Name: {person1.name} <br/>
                    Age: {person1.age} <br/>
                    Work: {person1.profession}</p> Props wont work since i'm trying to link pages
                <p>2. Name: {person2.name}<br/>
                    Age: {person2.age} <br/>
                    Work: {person2.profession}</p><br/>
             */}
            
            <br/>
                {/* <h2>Favorite fruits</h2>
                <p>The list below contains a list of all fruits which are most preferred to this coder:</p>
                <h5>
                    <ul>
                    {fruits.map((fruit) => <li key={fruit}>{fruit}</li>)}
                    <p>A new thoughtup price of said fruits in Nigeria as of date:</p>
                    {fruits2.map((fruit2) => <li key={fruit2.name}>{fruit2.name} {fruit2.price}</li>)}
                    </ul> 
                </h5>
             */}

            <br/><br/>
            
            <div id="vision">
                    <h2>Vision and Ambition</h2>
                    <p id="goldenrod-text">The future holds alot of secrets which can only been seen by those who prepare for it today
                        So my Vision as well as my Ambition can be stated in this sentence:
                    </p>
                    <p id="goldenrod-text">
                        .......................................................Loading.......................................................
                    </p>
                    <p id="goldenrod-text">
                        Yes, something huge is cooking and coming my way. I just know it. So i just depend on God and wait
                        on Him to do as He wish to do for me. Tho it wont be too easy to get there but i know that the 
                        Lord Almighty, the creator of the heavens and the earth will do it for me.
                    </p>
            </div>
            <img id="bg-vision" src={bg} width="400" height="400"/>
                <br/>
            

            <br/><br/><br/><br/><br/><br/><br/>

            <div>
                <h2>Past projects</h2>
                <p>
                    Over the past year, i have released two games so far with one yet to be released under reworking
                    and debugging and the other under development. These things do take alot of time to make and more 
                    than one plans on the projects due to error and bug fixes, unexpectances along the way and so on.
                    The two games released on our partner website Itch.io are:
                </p><br/>
                <section id="projects-img">
                    <img src={armageddon} width="200" height="200"/>
                    <a href="https://lord-gabe.itch.io/armageddon" target="_blank">Armageddon</a>
                </section>
                <section id="projects-img1">
                    <img src={TD} width="200" height="200"/>
                    <a href="https://lord-gabe.itch.io/the-deadline" target="_blank">The Deadline</a>
                </section>
                <section id="projects-img2">
                    <img id="soon" src={ques} width="200" height="210"/>
                    <a href="">Coming Soon</a>
                </section>
                
            </div>

            <br/><br/><br/><br/><br/><br/>
            
        <footer id="foot">
            All rights reserved
            <h3>&copy; LG Studio 2025</h3>
        </footer>
    </>
  )
}
