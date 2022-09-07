import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Loader from '../Loader/Loader'
import AOS from "aos";
import "aos/dist/aos.css";

const AboutMe = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        AOS.init();
        AOS.refresh();

        setTimeout(() => {
            setLoading(false)
        }, 1200);
    }, [])

    if (loading) {
        return (
            <Loader />
        )
    } else {
        return (
            <main>
                <Header 
                title={<h1 className='dot' data-aos="zoom-in-right" data-aos-delay="200">Hi! I'm Julieta</h1>}
                parag={<p data-aos="zoom-in-right" data-aos-delay="300">Nice to meet you! I'm a freelance translator and content writer, and my goal is to help next-gen companies share their innovative ideas and projects with the world --in an engaging way and the language of their audience.</p>} 
                button="Let's work together"
                image="assets/image3.png"/>
    
                <section className='main-container'>
                    <div className='first-section'>
                        <div>
                            <h3 data-aos="fade-down" data-aos-delay="100">Here's a little bit about me</h3>
                            <span data-aos="fade-down" data-aos-delay="200">SPOILER ALERT: ORIGIN STORY INCOMING</span>
                        </div>
                        <p data-aos="fade-up" data-aos-delay="300">I graduated as an English-Spanish translator from the Universty of Buenos Aires and I've always been a bit of a word nerd --we're talking kept-a-childhood-poem-notebook and gets-angry-at-a-misplaced-comma kind of word nerd.</p>
                        <p data-aos="fade-up" data-aos-delay="400">But becoming a Web3 writer and translator wasn't always the plan. I first wanted to specialize in the legal field. I know, right? I actually have a law degree that is mocking me as we speak. But here's the good thing: my legal training gave me awesome argumentative tools. Now I can make a case --that is, sell-- pretty much anything.</p>
                    </div>
    
                    <div className='second-section'>
                        <div>
                            <p data-aos="fade-right" data-aos-delay="100">So, I switched gears and started taking more and more projects related to tech. I soon realized how exciting and full of possibilities this industry is and I started to learn and study and read. At one point, I had gained so much domain-specific knowledge that I just knew I had found my niche. Or it had found me.</p>
                            <p data-aos="fade-left" data-aos-delay="100">And on this niche-discovering journey, I realized there's a massive lack of writers and translators specializing in emerging technologies, such as blockchain, crypto, NFTs, the metaverse and Web3.</p>
                        </div>
                    </div>
    
                    <div className='third-section'>
                        <h3 data-aos="zoom-in-down" data-aos-delay="200">These emerging technologies can potentially change every aspect of our lives. And I decided it was time to tell the world</h3>
                    </div>
    
                    <div className='fourth-section'>
                        <div>
                            <p data-aos="zoom-in-left" data-aos-delay="200">So, now I partner with companies in the field to help them find their voice and share their innovative tech projects in a way that resonates with their target audience -- in their language.</p>
                        </div>
                    </div>
    
                    <div className='fifth-section'>
                        <h3 data-aos="zoom-in-left" data-aos-delay="200">Now it's your turn</h3>
                        <p data-aos="zoom-in-right" data-aos-delay="300">Tell me a bit about your project, and let's get to work!</p>
                        <Link to='/contact' data-aos="zoom-out" data-aos-delay="400">CONTACT</Link>
                    </div>
                </section>
                
                <Footer />
            </main>
        )
    }
}

export default AboutMe