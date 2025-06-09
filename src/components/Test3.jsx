import { Link } from "react-router-dom"

export default function Test2(){

    //to previous page
    function prev_page(){
        <Link to="/Affliates"></Link>
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
                        <il> <a id= "d" href="/Affliates" onClick={prev_page()}>Affliates</a> </il>
                    </ul>
                </div>
            </header>

            <h1>Donate</h1>
            <section id="sec2-intro">    
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae eaque quod cumque possimus rem recusandae tenetur,
                    id molestias at dolorem esse dignissimos suscipit neque ut atque, nisi minus veritatis. Quisquam.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae eaque quod cumque possimus rem recusandae tenetur,
                    id molestias at dolorem esse dignissimos suscipit neque ut atque, nisi minus veritatis. Quisquam.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae eaque quod cumque possimus rem recusandae tenetur,
                    id molestias at dolorem esse dignissimos suscipit neque ut atque, nisi minus veritatis. Quisquam.
                </p><br/>
            </section><br/><br/>
            <section id="sec2-intro">
                <h2>Bank details</h2>
                <h3>
                    Bank Name: OPay<br/>
                    Bank Number: 1234567890<br/>
                    Account Name: Gbxbxbxbxbx
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