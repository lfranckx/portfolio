import React from 'react';
import Typical from "react-typical";
import { Link } from "react-router-dom";

export default function Header(props) {
    return (
            <header className='hero-container'>
                <video src={'https://lfranckx.github.io/portfolio/videos/video-1.mp4'} autoPlay loop muted />
                <h1>I am Lachlan, a
                    <Typical
                        className={"typical"}
                        steps={['React Developer.', 2500, 'Full-stack Engineer.', 2500, 'Web Designer.', 2500]}
                        loop={Infinity}
                    />
                </h1>
                <h2>I build web applications with a focus on the end user.</h2>

                <div className='hero-btns'>
                    <Link to={'/portfolio'}
                          className='btn view-work .btn--large .btn--outline'
                    >
                        View My Work &nbsp; <i id={'book'} className="fas fa-book"></i>
                    </Link>
                </div>
            </header>
        )
}