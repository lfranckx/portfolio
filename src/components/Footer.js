import React from 'react';
import '../styles/Footer.scss';

export default function Footer() {
    return (
        <footer className='footer-container'>
            <div className='footer-container'>
                <section id='copyright'>
                    <p>Copyright © 2021. All rights reserved.</p>
                    <p>Designed &amp; created by Lachlan Franckx</p>
                </section>

                <section id='contact-links'>
                        <a  href="mailto: lfranckx@gmail.com">
                            <i className="fas fa-paper-plane"></i>
                        </a>

                        <a
                            href='https://github.com/lfranckx'
                            target='_blank'
                            className='social-icon-link github'
                            aria-label='Github'
                            rel="noreferrer noopener"
                        >
                            <i className="fab fa-github icon"></i>
                        </a>
                        <a
                            href='https://www.linkedin.com/in/lachlanfranckx/'
                            target='_blank'
                            className='social-icon-link twitter'
                            aria-label='LinkedIn'
                            rel="noreferrer noopener"
                        >
                        <i className='fab fa-linkedin icon' />
                        </a>
                        <a
                            href='https://www.facebook.com/lfranckx/'
                            target='_blank'
                            className='social-icon-link facebook'
                            aria-label='Facebook'
                            rel="noreferrer noopener"
                        >
                            <i className='fab fa-facebook-f icon' />
                        </a>
                        <a
                            href='https://www.instagram.com/lachnr0ll/'
                            target='_blank'
                            className='social-icon-link instagram icon'
                            aria-label='Instagram'
                            rel="noreferrer noopener"
                        >
                            <i className='fab fa-instagram icon' />
                        </a>
                </section>
            </div>
        </footer>
    );
}