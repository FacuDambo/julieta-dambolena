import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Loader from '../Loader/Loader'
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";

const Portfolio = () => {
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
                title={<h1 className='dot' data-aos="zoom-in-right" data-aos-delay="200">Your blog could look like this</h1>}
                parag={<p data-aos="zoom-in-right" data-aos-delay="300">Here's a little taste of what I do. I can help you bring your blog to life and make the best of it. Let's populate it with insightful content --in English or Spanish!</p>} 
                button="Let's do this!"
                image="assets/image1.png"/>

                <section className='main-container'>
                    <div className='first-section'>
                        
                    </div>

                    <div className='fourth-section-carousel light-green'>
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
                        <h3 data-aos="zoom-in" data-aos-delay="50">Ready to get to work?</h3>
                        <p data-aos="zoom-out-up" data-aos-delay="100">I'd love to hear more about your project</p>
                        <Link to='/contact' className='contact-btn' data-aos="zoom-in" data-aos-delay="200"><span>CONTACT</span></Link>
                    </div>
                </section>
                
                <Footer />
            </main>
        )
    }
}

export default Portfolio