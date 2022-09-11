import React from 'react'
import PortfolioText from './PortfolioText'

const PortfolioContent = (props) => {
    return (
        <div className='portfolio-opened'>
            <div className='port-header' style={{ backgroundImage: "url(/assets/nft.jpg)" }}>
                <div className='ph-title'>
                    <h3>{props.pTitle}</h3>
                    <i>{props.pDate}</i>
                </div>
            </div>
            <PortfolioText pType={props.pType} setChanging={props.setChanging}></PortfolioText> 
        </div>
    )
}

export default PortfolioContent