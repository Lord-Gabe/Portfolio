import { Link } from "react-router-dom"

export default function Test2(){

    //to previous page
    function prev_page(){
        <Link to="/affiliates"></Link>
    }
    function home_page(){
        <Link to="/"></Link>
    }

    return(
        <>
            <head>
                <title>LG Studio: Donation</title>
            </head>
            <header>
                <div id="head">
                    <h2 id="title">
                        LG STUDIO
                    </h2>
                    <ul id="nav">
                        <il> <a id="c" href="/" onClick={home_page()}>Home</a></il>
                        <il> <a id= "d" href="/affiliates" onClick={prev_page()}>Projects</a> </il>
                    </ul>
                </div>
            </header>

            <h1>Donate</h1>
            <section id="sec2-intro">    
                <p>
                    Undergoing all kinds of projects and making them available to the public for free is not an easy task.
                    It requires a lot of time, effort and resources. If you would like to support my work, please consider making a donation.
                </p><br/>
            </section><br/><br/>
            <section id="sec2-intro">
                <h2>Bank details</h2>
                <h3>
                    Bank Name: OPay<br/>
                    Bank Number: 8034456641<br/>
                    Account Name: GABRIEL OLUSEGUN OLUWAGBEMIGA
                </h3><br/>
            </section>
            <br/><br/><br/><br/><br/>

            <footer id="foot">
                All rights reserved
                <h3>&copy; LG Studio 2025</h3>
            </footer>
        </>
    )
}