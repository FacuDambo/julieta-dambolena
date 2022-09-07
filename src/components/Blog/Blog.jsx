import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Loader from '../Loader/Loader'


//will use later
//remember adding animations
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
                button="I still want your help"
                image="assets/image6.png"/>

                <section className='main-container'>
                    <div className='first-section'>
                        
                    </div>

                    <div className='fifth-section'>
                        <h3>Ready to get started?</h3>
                        <p>I'd love to hear more about your project</p>
                        <Link to='/contact' className='contact-btn'><span>CONTACT</span></Link>
                    </div>
                </section>
                
                <Footer />
            </main>
        )
    }
}

export default Blog