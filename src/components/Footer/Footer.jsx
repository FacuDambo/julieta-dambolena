import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className='logo-parag'>
                <img src="assets/white-logo.png" alt="logo" />
                <p>I'm a translator and content writer helping Web3 companies share their vision and ideas in the new digital ecosystem.</p>
            </div>

            <div className='socials'>
                <span>Let's be friends</span>
                <div>
                    <ul>
                        <li>
                            <a href="https://www.linkedin.com/in/julieta-dambolena/">
                                <img src="assets/linkedin.svg" alt="linkedin logo" />
                            </a>
                        </li>
                        <li>
                            <a href="https://medium.com/@julietadambolena">
                                <img src="assets/medium.svg" alt="medium logo" />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/JuliDambolena">
                                <img src="assets/twitter.svg" alt="twitter logo" />
                            </a>
                        </li>
                        <li>
                            <a href="mailto:hello@julietadambolena.com">
                                <img src="assets/gmail.svg" alt="twitter logo" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer