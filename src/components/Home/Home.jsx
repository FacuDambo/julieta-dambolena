import React from 'react'
import Header from '../Header/Header'
import TypeEffect from './TypeEffect'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'

const Home = () => {
    return (
        <main>
            <Header 
            title={<TypeEffect />}
            parag={<p>I write and translate content for next-gen companies that are harnessing the power of <span>blockchain</span> and other emerging technologies.</p>} 
            button="Let's work together"/>

            <section className='main-container'>
                <div className='first-section'>
                    <div>
                        <h3>Your one-stop freelancer for all your content needs</h3>
                        <span>IN ENGLISH AND SPANISH</span>
                    </div>
                    <p>I work with <span>tech companies</span> that are harnessing the power of blockchain, crypto, NFTs, the metaverse, Web3, and other <span>emerging technologies</span> to bring innovative ideas to life.With domain-specific knowledge and a passion for tech and all things digital, I write and translateeverything from blog posts and social media copy to white papers and roadmaps.</p>
                </div>

                <div className='second-section'>
                    <div>
                        <h3>This is how I make your life easier.</h3>
                        <div className="life-easier">
                            <h4>Translation & Localization</h4>
                            <p>Culturally relevant translations to expand your reach.</p>
                        </div>
                        <div className="life-easier">
                            <h4>Content writing</h4>
                            <p>Engaging, one-of-a-kind content to build an audience and offer value.</p>
                        </div>
                        <div className="life-easier">
                            <h4>Content planning</h4>
                            <p>A fool-proof strategy to align your content across all channels.</p>
                        </div>
                    </div>
                </div>

                <div className='third-section'>
                    <h3>These are my areas of expertise</h3>
                    <div>
                        <span className="expertise">Blockchain</span>
                        <span className="expertise">Crypto</span>
                        <span className="expertise">NFTs</span>
                        <span className="expertise">Metaverse</span>
                        <span className="expertise">Web3</span>
                        <span className="expertise">DeFi</span>
                        <span className="expertise">GameFi</span>
                        <span className="expertise">AI/ML</span>
                        <span className="expertise">Tech</span>
                        <span className="expertise">Digital</span>
                    </div>
                </div>

                <div className='fourth-section'>
                    <div>
                        <h3>And this is what my clients are saying...</h3>
                        <q>Juliet is the most incredibly engaging writer I've read in a long time. When I received the first blog article from her - I was pulled in from the beginning and the content and writing style held my attention the entire time! I'm extremely pleased with her writing and she will be getting an abundance of business from me. Thank you for exceeding my expectations. I am officially wowed.</q>
                    </div>
                </div>

                <div className='fifth-section'>
                    <h3>How can I help?</h3>
                    <p>I'd love to hear more about your project.</p>
                    <Link to='/contacts'>CONTACT</Link>
                </div>
            </section>
            
            <Footer />
        </main>
    )
}

export default Home