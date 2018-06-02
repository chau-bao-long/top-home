import React from 'react';

class Portfolio extends React.Component {
  render() {
    return (
      <div>
        <nav className="side">
            <div className="side__inner">
                <div className="top"><a href="#">Chau Bao Long</a></div>
                <div className="bottom">
                    <a href="https://www.instagram.com/topcancode/">INSTAGRAM</a>
                    <a href="https://twitter.com/topcbl">TWITTER</a>
                    <a href="mailto:topcbl@gmail.com">EMAIL ME</a>
                </div>
            </div>
        </nav>

       <section className="section section--hello" id="hello">
            <div className="section__inner">
                <div className="block">
                    <a className="pre" href="#intro"><span>#0</span>Hello</a>
                    <h2>I'm Long, please call me Top</h2>
                    <ul className="anchornav">
                        <li><a href="#intro">Intro <span>#1 What is going on?</span></a></li>
                        <li><a href="#about">About <span>#2 Who is this guy?</span></a></li>
                        <li><a href="#clients">Clients <span>#3 Who did he work for?</span></a></li>
                        <li><a href="#portfolio">Portfolio <span>#4 What did he do?</span></a></li>
                        <li><a href="#contact">Contact <span>#5 Write him a message</span></a></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="section section--intro" id="intro">
            <div className="section__inner">
                <div className="block">
                    <a className="pre" href="#intro"><span>#1</span>Intro</a>
                    <h1>Volker Otto is a<br/>
                        Web Architect<br/>
                        based in Norderstedt<br/>
                        Germany.</h1>
                    <p className="lead">
                        See small bits of his design work on <a href="https://dribbble.com/hellovolker" className="link">Dribbble</a>, quick thoughts on <a href="https://twitter.com/hellovolker" className="link">Twitter</a>, and a full resume on <a href="#" className="link">Linkedin</a>.
                    </p>
                </div>
            </div>
        </section>

        <section className="section section--about" id="about">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10" preserveAspectRatio="none">
                <polygon points="100 0 100 10 0 10" />
            </svg>

            <div className="section__inner">
                <div className="block">
                    <a className="pre" href="#about"><span>#2</span>Building</a>
                    <h2>Volker works for companies and agencies, creating responsive web applications.</h2>
                    <p className="lead">Building the right foundation to ongoing optimization and support. In short, he tries to make the web a better place.</p>
                </div>
            </div>

        </section>

        <section className="section section--clients" id="clients">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10" preserveAspectRatio="none">
                <polygon points="100 10 0 0 0 10" />
            </svg>

            <div className="section__inner">
                <div className="block">
                    <a className="pre" href="#clients"><span>#3</span>Clients</a>
                    <h2>Volker works with corporations, institutions and startups in a wide range of industries.</h2>
                    <p className="lead">Here are some of his clients, he has had the pleasure working with:</p>
                </div>
            </div>

        </section>

        <section className="section section--portfolio1" id="portfolio">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 100 C 20 0 50 0 100 100 Z"></path>
            </svg>

            <div className="section__inner">
                <div className="block">
                    <a className="pre" href="#portfolio"><span>#4</span>Portfolio</a>
                    <h2>Portfolio Item #1</h2>
                    <p className="lead">Here are some of his clients, he has had the pleasure working with.</p>
                </div>
            </div>
        </section>


        <section className="section section--portfolio" id="portfolio2">
            <div className="section__inner">
                <div className="block">
                    <h2>Portfolio Item #2</h2>
                    <p>Descripton of said portfolio item.</p>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 102" preserveAspectRatio="none" className="bottom">
                <path d="M0 0 L50 100 L100 0 Z"></path>
            </svg>
        </section>


        <section className="section section--contact" id="contact">
            <div className="section__inner">
                <div className="block">
                    <a className="pre" href="#contact"><span>#5</span>Get in touch</a>
                    <h2>For work inquiries<div>please email:</div>
                        <span><a href="mailto:hello@volkerotto.net">hello@volkerotto.net</a></span></h2>
                    <p className="lead">More links: <a href="https://dribbble.com/hellovolker">Dribbble</a>, <a href="https://twitter.com/hellovolker">Twitter</a> and <a href="https://www.linkedin.com/in/ottovolker">Linkedin</a>.</p>
                </div>
            </div>
        </section>
      </div>
    );
  }
}

export default Portfolio;
