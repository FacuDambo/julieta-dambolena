import React, { useEffect, useState, useRef } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Loader from '../Loader/Loader'
import emailjs from '@emailjs/browser';
import AOS from "aos";
import "aos/dist/aos.css";

const Blog = () => {
    const form = useRef();
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        AOS.init();
        AOS.refresh();
        setTimeout(() => {
            setLoading(false)
        }, 1200);
    }, [])

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_cr9t43a', 'template_ef043gv', form.current, 'vF5DZkdxmmXIZKFnN')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    if (loading) {
        return (
            <Loader />
        )
    } else {
        return (
            <main>
                <Header 
                title={<h1 className='question' data-aos="zoom-in-right" data-aos-delay="200">Ready to get to work</h1>}
                parag={<p data-aos="zoom-in-right" data-aos-delay="300">I'd be happy to hear more about your project and help you take it to the next level.</p>} 
                button="Let's do this!"
                image="assets/image2.png"/>

                <section className='main-container contact'>
                    <div className='first-section'>
                        <div>
                            <h3 className='dot' data-aos="zoom-out-down" data-aos-delay="200">You know where to find me</h3>
                            <p data-aos="zoom-out-down" data-aos-delay="300">Drop me a message! I'd love to hear more about your project.</p>
                        </div>

                        <form ref={form} onSubmit={sendEmail}>
                            <div className='inputbox' data-aos="zoom-out-down" data-aos-delay="300">
                                <input type="text" name="name" required="required" />
                                <span>Nombre completo</span>
                            </div>
                            <div className='inputbox' data-aos="zoom-out-down" data-aos-delay="400">
                                <input type="email" name="from_email" required="required" />
                                <span>Email</span>
                            </div>
                            <div className='inputbox' data-aos="zoom-out-down" data-aos-delay="500">
                                <input type="text" name="subject" required="required" />
                                <span>Tema</span>
                            </div>
                            <div className='inputbox' data-aos="zoom-out-down" data-aos-delay="600">
                                <textarea name="message" required="required" />
                                <span>Mensaje</span>
                            </div>

                            <button className="cssbuttons-io-button" data-aos="zoom-out-down" data-aos-delay="700"> Enviar
                                <div className="icon">
                                    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
                                </div>
                            </button>
                        </form>
                    </div>
                </section>
                
                <Footer />
            </main>
        )
    }
}

export default Blog