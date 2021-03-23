import React from 'react';
import Typical from "react-typical";
import { Link } from "react-router-dom";

export default function Header(props) {
    return (
        <header>
            <h1>Full-stack Engineer, Front-end Developer &amp; Designer
                <br/>I design and code beautifully simple things.
            </h1>
            <h2></h2>
        </header>
    )

    // return (
    //         <header className='hero-container'>
    //             <video src={`${process.env.PUBLIC_URL}/videos/video-1.mp4`} autoPlay loop muted />
    //             <h1>I am Lachlan,
    //                 <Typical
    //                     className={"typical"}
    //                     steps={['React Developer.', 2500, 'Full-stack Engineer.', 2500, 'Web Designer.', 2500]}
    //                     loop={Infinity}
    //                 />
    //             </h1>
    //             <h2>I build web applications with a focus on the end user.</h2>

    //             <div className='hero-btns'>
    //                 <Link to={'/work'}
    //                       className='btn view-work .btn--large .btn--outline'
    //                 >
    //                     View My Work &nbsp; <i id={'book'} className="fas fa-book"></i>
    //                 </Link>
    //             </div>
    //         </header>
    //     )
}