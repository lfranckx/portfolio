import React from "react";
import '../../../styles/Process.scss';
import { GiTalk, MdPhotoSizeSelectSmall, FaCode, MdDevices } from "react-icons/all";
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

export default function Process() {


    return (
        <div id={'process'}>
            <section className={'text-center'}>
                <h2 className={'h3'}>My Creative Process</h2>
                <div className={'bottom-line'}></div>
                <h3 className={'h4'}>I start with figuring out what the customer wants their application to do and how they want it to look.</h3>
                <div id={'timeline'}>
                    <ul>
                        <li className={'list-item'}>
                            <ScrollAnimation
                                animateIn="animate__fadeInRightBig"
                                offset={150}
                                duration={1}
                                animateOnce={true}
                            >
                                <div className={'card'}>
                                    <div className={'h1'}><GiTalk /></div>
                                    <h3>Discuss</h3>
                                    <p className={'h4'}>Meet with client and discuss project needs and desired design.</p>
                                </div>
                            </ScrollAnimation>
                        </li>
                        <li className={'list-item'}>
                            <ScrollAnimation
                                animateIn="animate__fadeInLeftBig"
                                offset={150}
                                duration={1}
                                animateOnce={true}
                            >
                                <div className={'card'}>
                                    <div className={'h1'}><MdPhotoSizeSelectSmall className={'card-icon'}/></div>
                                    <h3>Design Wireframes</h3>
                                    <p className={'h4'}>Create wireframes based on the conversation so the client can see what the project would look like when finished.</p>
                                </div>
                            </ScrollAnimation>
                        </li>
                        <li className={'list-item'}>
                            <ScrollAnimation
                                animateIn="animate__fadeInRightBig"
                                offset={150}
                                duration={1}
                                animateOnce={true}
                            >
                                <div className={'card'}>
                                    <div className={'h1'}><FaCode className={'card-icon'}/></div>
                                    <h3>Write Code</h3>
                                    <p className={'h4'}>Write functional code while remaining in communication with the client at each step to make sure their needs haven't changed.</p>
                                </div>
                            </ScrollAnimation>
                        </li>
                        <li className={'list-item'}>
                            <ScrollAnimation
                                animateIn="animate__fadeInLeftBig"
                                offset={150}
                                duration={1}
                                animateOnce={true}
                            >
                                <div className={'card'}>
                                    <div className={'h1'}><MdDevices className={'card-icon'}/></div>
                                    <h3>Make Responsive</h3>
                                    <p className={'h4'}>Make sure the website or application is responsive on all of the devices of the user audience.</p>
                                </div>
                            </ScrollAnimation>
                        </li>
                        <li className={'list-item'}>
                            <ScrollAnimation
                                animateIn="animate__fadeInRightBig"
                                offset={150}
                                duration={1}
                                animateOnce={true}
                            >
                                <div className={'card'}>
                                    <div className={'h1'}><i className="far fa-calendar-check h1"></i></div>
                                    <h3>Deliver Project</h3>
                                    <p className={'h4'}>Deliver the final product on time and with the approval of the client.</p>
                                </div>
                            </ScrollAnimation>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    )
}