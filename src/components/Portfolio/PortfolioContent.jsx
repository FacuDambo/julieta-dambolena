import React from 'react'
import PortfolioText from './PortfolioText'

const PortfolioContent = (props) => {
    let bg = "url(/assets/nft.jpg)"
    if (props.changing === 1) {
        bg = "url(/assets/nft.jpg)"
    } else if (props.changing === 2) {
        bg = "url(/assets/music.jpg)"
    } else if (props.changing === 3){
        bg = "url(/assets/web3.jpg)"
    }

    return (
        <div className='portfolio-opened'>
            <div className='port-header' style={{ backgroundImage: bg }}>
                <div className='ph-title'>
                    <h3>{props.pTitle}</h3>
                    <i>{props.pDate}</i>
                </div>
            </div>
            <PortfolioText pType={props.changing} setChanging={props.setChanging}></PortfolioText> 
        </div>
    )
}

export default PortfolioContent