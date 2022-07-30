import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Loader from '../Loader/Loader'

const Blog = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
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
                title={<h1 className='dot'>Welcome to my blog</h1>}
                parag={<p>Not everyone is ready to invest in professional help. I get that. That's why I offer educational resources to teach tech & blockchain companies how to DIY their content and marketing strategies.</p>} 
                button="I still want your help"/>

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

                    <div className='second-section'>
                        <div>
                            <h3>Don't have time to work on your content yourself? <br /> Let me help!</h3>
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

                    <div className='fifth-section'>
                        <h3>Ready to get started?</h3>
                        <p>I'd love to hear more about your project</p>
                        <Link to='/contact' className='contact-btn'>CONTACT</Link>
                    </div>
                </section>
                
                <Footer />
            </main>
        )
    }
}

export default Blog