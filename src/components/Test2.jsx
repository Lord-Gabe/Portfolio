import { Link } from "react-router-dom"
import img1 from "../assets/NIIT.jpg"
import img2 from "../assets/Itchio.jpg"


export default function Test2(){

    //to previous page
    function next_page(){
        <Link to="/Donate"></Link>
    }
    function home_page(){
        <Link to="/"></Link>
    }

    return(
        <>
            <head>
                <title>LG Studio: Affliates</title>
            </head>
            <header>
                <div id="head">
                    <h2 id="title">
                        LG STUDIO
                    </h2>
                    <ul id="nav">
                        <il> <a id="c" href="/" onClick={home_page()}>Home</a> </il>
                        <il> <a id= "d" href="/Donate" onClick={next_page()}>Donate</a> </il>
                    </ul>
                </div>
            </header>

            <h1>Affliates</h1><br/>
            <section id="sec2-intro"> 
                <br/> 
                
                <p id="photo_txt">
                    We are partnered at the moment with National Institute of Information and Technology  
                    <a href="https://www.niit.com/nigeria/">(NIIT)</a>, 
                    grooming young scholars and even many who of age have come to learn about the use of computer softwares and its 
                    applicability in their work places.
                    It is undoubtably notable how technology has so much blended into our daily lives and activites making
                    life easier and simplier even to future generations.
                </p>
                <img id="icons" src={img1}  width={"350px"} height={"350px"}/>
            </section>
            <br/><br/>

            <section id="sec2-intro">    
                <br/>
                
                <p id="photo_txt">
                    We are also partnered with <a href="https://itch.io/">Itch.io</a>. A very notable and fun place to be in where you connect with various
                    game developers be it 2D or 3D, discussing, sharing ideas, engaging in competitions, learning, collaborating,
                    getting feedbacks on projects, even publishing your very own game.
                </p>
                <img id="icons" src={img2}  width={"350px"} height={"350px"}/>
            </section>

            
            <br/><br/><br/><br/><br/>
            <footer id="foot">
                All rights reserved
                <h3>&copy; LG Studio 2025</h3>
            </footer>
        </>
    )
}