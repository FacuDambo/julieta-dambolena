import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Loader from '../Loader/Loader'
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import PortfolioContent from './PortfolioContent'

const Portfolio = () => {
    const [loading, setLoading] = useState(true)
    const [changing, setChanging] = useState(0)

    useEffect(() => {
        AOS.init();
        AOS.refresh();
        setTimeout(() => {
            setLoading(false)
        }, 1200);

    }, [])
    
    console.log(changing);
    
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
                    {
                    changing === 0 ? 
                    <div className='first-section portfolio'>
                        <article className='portfolio-card' onClick={() => setChanging(1)}>
                            <div className='img-container'>
                                <img src="assets/nft.jpg" alt="" />
                            </div>
                            <div className='port-text-container'>
                                <h3>NFT Marketing: 3 Strategies to Ramp Up Your Project</h3>
                                <p>NFT marketing is hard. You need to jump through hoops before actually converting your audience into loyal followers —or, better still, customers.The truth is that NFT marketing is simply a different breed. It's not like anything marketers have faced before, and their strategies need to adapt to meet new and complex demands.</p>
                                <i>September 10th 2022</i>
                            </div>
                        </article>

                        <article className='portfolio-card' onClick={() => setChanging(2)}>
                            <div className='img-container'>
                                <img src="assets/music.jpg" alt="" />
                            </div>
                            <div className='port-text-container'>
                                <h3>Will NFTs Bring the Next Big Revolution to the Music Industry?</h3>
                                <p>The music industry has gone through a hundred revolutions and then some. Singers, musicians, producers, and other major players in the sector are constantly exploring new ways to monetize their work while providing value for avid music fans.</p>
                                <i>September 9th 2022</i>
                            </div>
                        </article>

                        <article className='portfolio-card' onClick={() => setChanging(3)}>
                            <div className='img-container'>
                                <img src="assets/web3.jpg" alt="" />
                            </div>
                            <div className='port-text-container'>
                                <h3>Web3: A Rebranding Effort for Crypto?</h3>
                                <p>Web3 is a term you may have heard thrown around a lot lately. And I mean, a lot. Proponents tout it as the future of the internet, as a potential catalyst that will completely transform the way we interact and behave online. Others are a bit more skeptical. They believe Web3 is just a fad, a passing trend that will go away soon. In fact, many deem it a fruitless rebranding effort for cryptocurrency —an attempt to hide all its current flaws under the rug.
                                </p>
                                <i>September 8th 2022</i>
                            </div>
                        </article>
                    </div> 
                    : <PortfolioContent 
                        pTitle={changing === 1 ? "NFT Marketing: 3 Strategies to Ramp Up Your Project" : changing === 2 ? "Will NFTs Bring the Next Big Revolution to the Music Industry?" : changing === 3 ? "Web3: A Rebranding Effort for Crypto?" : null} 
                        pDate={changing === 1 ? "September 10th 2022" : changing === 2 ? "September 9th 2022" : changing === 3 ? "September 8th 2022" : null}
                        changing={changing} 
                        setChanging={setChanging}>
                    </PortfolioContent>
                    }

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