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
            <Header />
            <main>
                <section className={'container skills-container'}>
                    <div>
                        <h3 className={'h3'}>I specialize in </h3>
                        <div className={'bottom-line'}></div>
                        <h3 className={'h4'}>Allowing my client's needs to dictate design while keeping responsiveness at the forefront.</h3>
                    </div>
                    <ul className={'skills-list'}>
                        <li className={'skills-card'}>
                            <i className="fas fa-brain skill-icon"></i>
                            <h3>Conceptualize</h3>
                            <p className={'skills-desc'}>Planning out user stories and outlining the technical tasks to achieve the project's purpose</p>
                        </li>
                        <li className={'skills-card'}>
                            <i className="fas fa-code skill-icon"></i>
                            <h3>Development</h3>
                            <p className={'skills-desc'}>Writing functional front-end and back-end code that is testable and effective in its purpose.</p>
                        </li>
                        <li className={'skills-card'}>
                            <i className="fas fa-tv skill-icon"></i>
                            <h3>Design</h3>
                            <p className={'skills-desc'}>Making the project look as good as it functions.</p>
                        </li>
                        <li className={'skills-card'}>
                            <i className="fas fa-user skill-icon"></i>
                            <h3>UI/UX</h3>
                            <p className={'skills-desc'}>Making the user experience as good as the code that drives it.</p>
                        </li>
                    </ul>
                </section>
                <Process />
            </main>
            <Footer />
        </>
    );
}