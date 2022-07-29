import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Loader from '../Loader/Loader'
import Slider from "react-slick";

const Services = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
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
                title={<h1 className='dot'>Here's how I can help</h1>}
                parag={<p>My services are all meant to make your life easier and help your company expand its reach, drive more traffic, and boost brand awareness --at a regional and international level.</p>} 
                button="Let's work together"/>

                <section className='main-container'>
                    <div className='first-section first-service'>
                        <div>
                            <aside>
                                <h3>Translation & Localization</h3>
                                <span>ENGLISH - SPANISH</span>
                            </aside>
                            <p>Bring global awareness to your brand and expand into new markects with culturally relevant translations.</p>
                            <Link to='/contact' className='contact-btn'>I want to expand my reach</Link>
                        </div>

                        <div>
                            <p>The lingo in the blockchain & crypto space is unique. Your translated content should reflect that. </p>
                            <p>My translation process is designed to produce content that resonates with your community, and all translations are adapted not only to the target audience, but also to its cultural nuances. I follow SEO translation practices and offer international keyword research to make sure your translated content ranks as good as the original version.</p>
                        </div>
                    </div>

                    <div className='second-section second-service'>
                        <div>
                            <div>
                                <p>Your content represents your brand.</p>
                                <p>Whether it's a blog post, social media copy or your project's white paper,  your content should reflect you tone of voice and be 100% tailored to your business. I draft all sorts of content with the target market and audience in mind, following on-page SEO best practices to help you find your way to the first page of Google.</p>
                            </div>

                            <div>
                                <aside>
                                    <h3>Content Writing</h3>
                                    <span>ENGLISH - SPANISH</span>
                                </aside>
                                <p>Engaging, one-of-a-kind  content to build an audience and offer value while driving traffic to your channels.</p>
                                <Link to='/contact' className='contact-btn'>I want to grow an audience</Link>
                            </div>
                        </div>
                    </div>

                    <div className='third-section third-service'>
                        <div>
                            <aside>
                                <h3>Content planning</h3>
                            </aside>
                            <p>A fool-proof strategy to align your content across all channels and make the best of each piece.</p>
                            <Link to='/contact' className='contact-btn'>Help me plan my content</Link>
                        </div>

                        <div>
                            <p>Don't let your busy schedule get in the way of your brand's content strategy.</p>
                            <p>In this fast-paced digital world, it's hard for entrepreneurs, creators and marketing teams to stay on top of things and deliver good content constantly. I can help you plan your content monthly and align it across all channels, so that you don't need to worry about coming up with topics and ideas to share.</p>
                        </div>
                    </div>

                    <div className='fourth-section-carousel'>
                        <h3>Others have tried my services. This is what they are saying...</h3>

                        <Slider {...settings}>
                            <div>
                                <q>Juliet is the most incredibly engaging writer I've read in a long time. When I received the first blog article from her - I was pulled in from the beginning and the content and writing style held my attention the entire time! I'm extremely pleased with her writing and she will be getting an abundance of business from me. Thank you for exceeding my expectations. I am officially wowed.</q>
                                <span>Marc - Founder & CEO at a GameFi company</span>
                            </div>
                            <div>
                                <q>Julieta is a total professional. She is smart and easy to work with. I appreciate her expertise and professionalism. If you are looking for a collaborative writing partner, I highly recommend her.</q>
                                <span>Amy - Founder of a blockchain incubator</span>
                            </div>
                            <div>
                                <q>I've worked extensively with Julieta. She's a first-class translator, the quality and speed are second to none, and she's also easy to work with and very responsive. A lot of the reports she helped us with were quite complicated and technical. So, if you're looking for help with translations, then I can only recommend contacting her.</q>
                                <span>Charles - Marketing Manager at a software development company</span>
                            </div>
                            <div>
                                <q>It's a pleasure working with Julieta. She is such a great professional. Her work exceeds expectations, always impeccable and fast. The high quality of her work makes her my first option for translations.</q>
                                <span>Angela - Product Manager at a tech company</span>
                            </div>
                            <div>
                                <q>Julieta's work is a masterpiece from start to finish, with each sentence dripping in creativity and imagination. Her dedication shines through every word that she puts on paper. Brilliant work ethic.</q>
                                <span>Moe - Copywriter at a blockchain network</span>
                            </div>
                            <div>
                                <q>The grammar and style are flawless! Very good author. I highly recommend Julieta to anyone who needs a thoughtful long-form piece about technology. I will be hiring Julieta again.</q>
                                <span>Olga - Web Designer & Marketer</span>
                            </div>
                        </Slider>
                    </div>

                    <div className='fifth-section'>
                        <h3>Sounds good?</h3>
                        <p>Let's get to work! How can I help?</p>
                        <Link to='/contact' className='contact-btn'>CONTACT</Link>
                    </div>
                </section>
                
                <Footer />
            </main>
        )
    }
}

export default Services