import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import TypeEffect from './TypeEffect'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Loader from '../Loader/Loader'
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        AOS.init();
        AOS.refresh();

        setTimeout(() => {
            setLoading(false)
        }, 1200);
    }, [])

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    if (loading) {
        return (
            <Loader />
        )
    } else {
        return (
            <main>
                <Header 
                title={<TypeEffect />}
                parag={<p data-aos="zoom-in-right">I write and translate content for Web3 companies that want to break through the noise.</p>} 
                button="Let's work together"
                image="assets/image5.png"/>
    
                <section className='main-container'>
                    <div className='first-section'>
                        <div>
                            <h3 data-aos="fade-down" data-aos-delay="100">Your one-stop freelancer for all your Web3 content needs</h3>
                            <span data-aos="fade-up" data-aos-delay="200" className='eng-spa'>IN ENGLISH AND SPANISH</span>
                        </div>
                        <p data-aos="fade-up" data-aos-delay="300">I work with <span>Web3 companies</span> that are harnessing the power of blockchain, crypto, NFTs, the metaverse and other <span>emerging technologies</span> to bring innovative ideas to life. With domain-specific knowledge and a passion for tech and all things digital, I write and translate everything from blog posts and social media copy to white papers and roadmaps.</p>
                    </div>
    
                    <div className='second-section'>
                        <div>
                            <h3 data-aos="zoom-in" data-aos-delay="100">This is how I make your life easier.</h3>
                            <div className="life-easier" data-aos="zoom-in-up" data-aos-delay="200">
                                <h4>Translation & Localization</h4>
                                <p>Culturally relevant translations to expand your reach.</p>
                            </div>
                            <div className="life-easier" data-aos="zoom-in-up" data-aos-delay="300">
                                <h4>Content writing</h4>
                                <p>Engaging, one-of-a-kind content to build an audience and offer value.</p>
                            </div>
                            <div className="life-easier" data-aos="zoom-in-up" data-aos-delay="400">
                                <h4>Content planning</h4>
                                <p>A fool-proof strategy to align your content across all channels.</p>
                            </div>
                        </div>
                    </div>
    
                    <div className='third-section'>
                        <h3 data-aos="fade-down" data-aos-delay="100">These are my areas of expertise</h3>
                        <div>
                            <span className="expertise" data-aos="flip-left" data-aos-delay="100">Blockchain</span>
                            <span className="expertise" data-aos="flip-left" data-aos-delay="200">Crypto</span>
                            <span className="expertise" data-aos="flip-left" data-aos-delay="300">NFTs</span>
                            <span className="expertise" data-aos="flip-left" data-aos-delay="400">Metaverse</span>
                            <span className="expertise" data-aos="flip-left" data-aos-delay="500">Web3</span>
                            <span className="expertise" data-aos="flip-left" data-aos-delay="600">DeFi</span>
                            <span className="expertise" data-aos="flip-left" data-aos-delay="700">GameFi</span>
                            <span className="expertise" data-aos="flip-left" data-aos-delay="800">AI/ML</span>
                            <span className="expertise" data-aos="flip-left" data-aos-delay="900">Tech</span>
                            <span className="expertise" data-aos="flip-left" data-aos-delay="1000">Digital</span>
                        </div>
                    </div>
    
                    <div className='fourth-section-carousel'>
                        <h3 data-aos="fade-down" data-aos-delay="100">And this is what my clients are saying...</h3>

                        <Slider {...settings}>
                            <div data-aos="fade-up" data-aos-delay="200">
                                <q>Juliet is the most incredibly engaging writer I've read in a long time. When I received the first blog article from her - I was pulled in from the beginning and the content and writing style held my attention the entire time! I'm extremely pleased with her writing and she will be getting an abundance of business from me. Thank you for exceeding my expectations. I am officially wowed.</q>
                                <span>Marc - Founder & CEO at a GameFi company</span>
                            </div>
                            <div data-aos="fade-up" data-aos-delay="200">
                                <q>Julieta is a total professional. She is smart and easy to work with. I appreciate her expertise and professionalism. If you are looking for a collaborative writing partner, I highly recommend her.</q>
                                <span>Amy - Founder of a blockchain incubator</span>
                            </div>
                            <div data-aos="fade-up" data-aos-delay="200">
                                <q>I've worked extensively with Julieta. She's a first-class translator, the quality and speed are second to none, and she's also easy to work with and very responsive. A lot of the reports she helped us with were quite complicated and technical. So, if you're looking for help with translations, then I can only recommend contacting her.</q>
                                <span>Charles - Marketing Manager at a software development company</span>
                            </div>
                            <div data-aos="fade-up" data-aos-delay="200">
                                <q>It's a pleasure working with Julieta. She is such a great professional. Her work exceeds expectations, always impeccable and fast. The high quality of her work makes her my first option for translations.</q>
                                <span>Angela - Product Manager at a tech company</span>
                            </div>
                            <div data-aos="fade-up" data-aos-delay="200">
                                <q>Julieta's work is a masterpiece from start to finish, with each sentence dripping in creativity and imagination. Her dedication shines through every word that she puts on paper. Brilliant work ethic.</q>
                                <span>Moe - Copywriter at a blockchain network</span>
                            </div>
                            <div data-aos="fade-up" data-aos-delay="200">
                                <q>The grammar and style are flawless! Very good author. I highly recommend Julieta to anyone who needs a thoughtful long-form piece about technology. I will be hiring Julieta again.</q>
                                <span>Olga - Web Designer & Marketer</span>
                            </div>
                        </Slider>
                    </div>

                    <div className='fifth-section'>
                        <h3 data-aos="zoom-in" data-aos-delay="50">How can I help?</h3>
                        <p data-aos="zoom-out-up" data-aos-delay="100">I'd love to hear more about your project.</p>
                        <Link to='/contact' data-aos="zoom-in" data-aos-delay="200"><span>CONTACT</span></Link>
                    </div>
                </section>
                
                <Footer />
            </main>
        )
    }
}

export default Home