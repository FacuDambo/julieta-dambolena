import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className='logo-parag'>
                <img src="assets/white-logo.png" alt="logo" />
                <p>I'm a translator and content writer helping next-gen companies share their vission and ideas in the blockchain, crypto, NFT, and Web3 space.</p>
            </div>

            <div className='mail-inputs'>
                <span>Let's be friends</span>

                <form>
                    <label htmlFor="full-name">Full Name</label>
                    <input type="text" name="full-name" id="full-name" />
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" />
                    <input type="submit" value="Send" />
                </form>
            </div>
        </footer>
    )
}

export default Footer