import React, { useEffect } from 'react';
import '../../../styles/Home.scss';
import Header from "./Header";
import Process from "./Process";
import Footer from '../../Footer';

export default function Home() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <header>
                <h1>
                    Freelance Web Developer &amp; Designer based in Los Angeles<br/>
                    Expereienced in building beautiful and effective online stores.
                </h1>

                <div className="container">
                    <div>
                        <img src="" alt="laptop" />
                    </div>
                    <h2>
                        Fully responsive,<br/>
                        custom designed,<br/>
                        Shopify stores<br/>
                        &amp; themes.
                    </h2>
                </div>
            </header>
            
            <Footer />
        </>
    );
}