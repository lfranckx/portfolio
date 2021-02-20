import React, {useEffect, useState} from "react";
import { FaChevronRight } from "react-icons/fa";
import '../../styles/Resume.scss';
import Footer from '../Footer';

export default function Resume()  {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [contactOpen, toggleContact] = useState(false);
    const [skillsOpen, toggleSkills] = useState(false);
    const [projectsOpen, toggleProjects] = useState(false);
    const [clientProjectsOpen, toggleClientProjects] = useState(false);
    const [educationOpen, toggleEducation] = useState(false);
    const [experienceOpen, toggleExperience] = useState(false);

    return (
        <div className={'resume-page'}>
            <main className={'resume-container'}>
                <div className={'download-resume'}>
                    <a href={'/Docs/Web Dev Resume - Blue.pdf'} download={'/Docs/Web Dev Resume - Blue.pdf'}>Download Copy</a>
                </div>
                <section className={'resume-contact section'}>
                    <div className={'contact-item'}>
                        <div className={'flex'}>
                            <button className={'arrow'} onClick={() => toggleContact(!contactOpen)}>
                                <FaChevronRight className={contactOpen ? "rotate" : ""} />
                            </button>
                            <h2>&nbsp; Lachlan Franckx</h2>
                        </div>
                        <h3>Full-stack Developer</h3>
                    </div>
                    <div id={'section1'} className={contactOpen ? 'pad-u-2 pad-s-2 show' : 'hide'}>
                        <div>
                            <div className={'contact-item'}>
                                <p>Los Angeles, CA</p>
                                <a href={'https://github.com/lfranckx'}><i className="fab fa-github" /> /lfranckx</a>
                            </div>
                            <div className={'contact-item'}>
                                <p>(408)499-2830</p>
                                <a href={'https://www.linkedin.com/in/lachlanfranckx/'}><i className="fab fa-linkedin" /> /lachlanfranckx</a>
                            </div>
                            <div className={'contact-item'}>
                                <a href={'mailto: lfranckx@gmail.com'}>
                                    <i className="fas fa-envelope" /> lfranckx@gmail.com
                                </a>
                                <a href={'/'}>
                                    <i className="fab fa-facebook-f" /> /lfranckx
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={'resume-skills section'}>
                    <div className={'flex'}>
                        <button className={'arrow'} onClick={() => toggleSkills(!skillsOpen)}>
                            <FaChevronRight className={skillsOpen ? "rotate" : ""} />
                        </button>
                        <h3>&nbsp; Skills</h3>
                    </div>
                    <div id={'section2'} className={skillsOpen ? 'pad-u-2 pad-s-2 show' : "hide"}>
                        <ul id={'accordion'}>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>PostgreSQL</li>
                            <li>AWS-S3</li>
                            <li>jQuery</li>
                            <li>Shopify</li>
                            <li>Heroku</li>
                            <li>Zeit</li>
                            <li>RESTful APIs</li>
                            <li>AJAX</li>
                            <li>Multer</li>
                            <li>Enzyme</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Git/Github</li>
                            <li>Chrome Dev Tools</li>
                            <li>Google Analytics</li>
                        </ul>
                    </div>
                </section>

                <section className={'resume-projects section'}>
                    <div className={'flex'}>
                        <button className={'arrow'} onClick={() => toggleProjects(!projectsOpen)}>
                            <FaChevronRight className={projectsOpen ? "rotate" : ""} />
                        </button>
                        <h3>&nbsp; Full-Stack Applications</h3>
                    </div>
                    <div id={'section3'} className={projectsOpen ? 'pad-u-2 pad-s-2 show' : 'hide'}>
                        <div className={'travelog'}>
                            <a className={'project-name large-text'} href={'https://travelog-client.now.sh/'}>Travelog</a> | &nbsp;
                            <a className={'large-text'} href={'https://github.com/lfranckx/travelog-client'}>Client</a> | &nbsp;
                            <a className={'large-text'} href={'https://github.com/lfranckx/travelog-api'}>API</a>
                            <ul>
                                <li>Travel blogging sites for travel enthusiasts to connect and share stories and communicate on a unique platform.</li>
                                <li>Focused on creating great product usability and building an elegant UI to enhance the user experience.</li>
                                <li>Built an Express server that uses Multer middleware to communicate with an AWS S3 bucket for file storage
                                    and integrates with a relational database using PostgreSQL and Knex.</li>
                            </ul>
                        </div>
                        <div className={'workout-app'}>
                            <a className={'project-name large-text'} href={'https://workout-creator-capstone-client.vercel.app/'}>Workout App</a> | &nbsp;
                            <a className={'large-text'} href={'https://github.com/sarawarnock/workout-creator-capstone-client'}>Client</a> | &nbsp;
                            <a className={'large-text'} href={'https://github.com/sarawarnock/workout-creator-capstone-server'}>API</a>
                            <ul>
                                <li>Worked in a pair programming team to find solutions to previous bugs and problems within the app.</li>
                                <li>Restructured the user authentication using JWT and built a Stopwatch component using React Hooks.</li>
                                <li>Worked in a team environment with a web designer and developer to implement designs, responsiveness, and functionality of the app.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className={'client-projects section'}>
                    <div className={'flex'}>
                        <button className={'arrow'} onClick={() => toggleClientProjects(!clientProjectsOpen)}>
                            <FaChevronRight className={clientProjectsOpen ? "rotate" : ""} />
                        </button>
                        <h3>&nbsp; Professional Client Projects</h3>
                    </div>

                    <div  id={'section4'} className={clientProjectsOpen ? 'omg-artistry pad-u-2 pad-s-2 show' : 'hide'}>
                        <a className={'project-name large-text'} href={'https://oliviasmalley.com/'}>OMG Artistry</a>
                        <ul>
                            <li>Restructured the layout of a Shopify store making it easier for customers to navigate through the site.</li>
                            <li>Created live feeds from the client's Podcasts and Youtube channels</li>
                        </ul>
                    </div>
                </section>

                <section className={'resume-education section'}>
                    <div className={'flex'}>
                        <button className={'arrow'} onClick={() => toggleEducation(!educationOpen)}>
                            <FaChevronRight className={educationOpen ? "rotate" : ""} />
                        </button>
                        <h3>&nbsp; Education</h3>
                    </div>
                    <div id={'section5'} className={educationOpen ? 'pad-u-2 pad-s-2 show' : 'hide'}>
                        <a className={'large-text'} href={'https://www.thinkful.com/'}>Thinkful</a>
                        <p className={'large-text'}>Software Engineering Program</p>
                        <ul>
                            <li><p>Full-stack coding course focused on the iterative development cycle using new technologies and industry best practices.</p></li>
                            <li><p>Studied as an apprentice underneath the guidance of an industry professional.</p></li>
                            <li><p>Built Express servers and relational databases using PostgreSQL and Knex which support all CRUD operations.</p></li>
                            <li><p>Managed complex projects using agile development and maintaining version control using Git and Github.</p></li>
                        </ul>
                    </div>
                </section>

                <section className={'resume-experience '}>
                    <div className={'flex'}>
                        <button className={'arrow'} onClick={() => toggleExperience(!experienceOpen)}>
                            <FaChevronRight className={experienceOpen ? "rotate" : ""} />
                        </button>
                        <h3>&nbsp; Experience</h3>
                    </div>
                    <div id={'section6'} className={experienceOpen ? 'pad-u-2 pad-s-2 show' : 'hide'}>
                        <div>
                            <h4>Freelance</h4>
                            <ul>
                                <li>Worked with a management company for a celebrity hair and make-up artist to help optimize her online store for SEO and boost online sales.</li>
                                <li>Exceptional problem solving and decision making capabilities offering clients an array of solutions to choose from to best suit their needs.</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className={'pad-u-2'}>Musician/Producer</h4>
                            <ul>
                                <li>Recorded and toured professionally across the country and internationally teaching me skills in independence, collaboration, time-management, flexibility, boldness, self-sufficiency, improvisation, and self-marketing.</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}