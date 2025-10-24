import { Link } from "react-router-dom"
import cs from '../assets/CS.png'
import fr from '../assets/FR.png'
import ni from '../assets/NI.png'
import armageddon from '../assets/armageddon.png'
import TD from '../assets/TD.png'
import compBiz from '../assets/compBiz.png'
import CosmicO from '../assets/CosmicO.png'
import TheLight from '../assets/TheLight.png'
import nova from '../assets/nova.png'

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
                <title>LG Studio: Past Projects</title>
            </head>
            <header>
                <div id="head">
                    <h2 id="title">
                        LG STUDIO
                    </h2>
                    <ul id="nav">
                        <il> <a id="c" href="/" onClick={home_page()}>Home</a> </il>
                    </ul>
                </div>
            </header>

            <h2>PROJECTS</h2>
                <h3>Games</h3>
                <p className="fade-in-text"> 
                    Over the past year, i have released two games so far with one yet to be released under reworking
                    and debugging and the other under development. These things do take alot of time to make and more 
                    than one plans on the projects due to error and bug fixes, unexpectances along the way and so on.
                    The two games released on our partner website Itch.io are:
                </p><br/>
                <div id="services">
                <div className="service-grid fade-up">
                    <section className="service-card scale-hover">
                        <img src={armageddon} width="200" height="200" className="scale-hover"/><br/>
                        <a href="https://lord-gabe.itch.io/armageddon" target="_blank">Armageddon</a>
                    </section>
                    <section className="service-card scale-hover">
                        <img src={TD} width="200" height="200" className="scale-hover"/><br/>
                        <a href="https://lord-gabe.itch.io/the-deadline" target="_blank">The Deadline</a>
                    </section>
                    <section className="service-card scale-hover">
                        <img src={CosmicO} width="200" height="200" className="scale-hover"/><br/>
                        <a href="https://cosmic-outlaws-4e3de.web.app/" target="_blank">Cosmic Outlaws</a>
                    </section>
                    <section className="service-card scale-hover">
                        <img src={TheLight} width="200" height="200" className="scale-hover"/><br/>
                        <a href="https://lord-gabe.itch.io/the-light" target="_blank">The Light</a>
                    </section>
                </div>
                </div>
                
                <br/><br/><br/>
                <h3>Websites</h3>
                <p className="fade-in-text">
                    I also have been engaged in making websites on the side track too
                    and some websites i have worked on in the past include:
                </p><br/>
                <div id="services">
                    <div className="service-grid">
                        <section className="service-card scale-hover">
                            <img src={ni} width="200" height="200" className="scale-hover"/><br/>
                            <a href="">Neseria</a>
                        </section>
                        <section className="service-card scale-hover">
                            <img src={cs} width="200" height="210" className="scale-hover"/><br/>
                            <a href="">Country Search</a>
                        </section>
                        <section className="service-card scale-hover">
                            <img src={compBiz} width="200" height="210" className="scale-hover"/><br/>
                            <a href="https://lord-gabe.github.io/Landing_page/">BizBrand</a>
                        </section>
                        <section className="service-card scale-hover">
                            <img src={nova} width="200" height="210" className="scale-hover"/><br/>
                            <a href="https://novatech-psi.vercel.app/">Novatech </a>
                        </section>
                    </div>
                </div>

            
            <br/><br/><br/><br/><br/>
            <footer id="foot">
                All rights reserved
                <h2 id="footer">&copy; LG Studio 2025</h2>
            </footer>
        </>
    )
}