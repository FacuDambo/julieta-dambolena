import React from 'react'
import Header from '../Header/Header'
import TypeEffect from './TypeEffect'

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
            </section>
        </main>
    )
}

export default Home