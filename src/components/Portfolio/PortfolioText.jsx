import React from 'react'

const PortfolioText = (props) => {
    return (
        <div className='port-content'>
            {props.pType === 1 ? 
            <div>
                <p>NFT marketing is hard. You need to jump through hoops before actually converting your audience into loyal followers —or, better still, customers.</p>
                <p>The truth is that NFT marketing is simply a different breed. It's not like anything marketers have faced before, and their strategies need to adapt to meet new and complex demands.</p>
                
                <h4>Why Is NFT Marketing Different?</h4>
                <p>There are three main reasons why NFT marketing is different from the rest.</p>
                <p>On the one hand, most people are still undecided regarding NFTs. They don't see the appeal and don't quite understand the concept of digital ownership. Some even believe it's all a massive scam. This requires marketers to step over a huge mountain of skepticism before they can get to their audience.</p>
                
                <h4>Top 3 Strategies to Successfully Market Your NFTs</h4>
                <p>Despite this troubling scenario, a couple of tactics have proven helpful for NFT marketing. Let's explore them and discover how they can help you avoid crickets on your communication channels.</p>

                <ol>
                        <li>Solid Storytelling</li>
                    <p>People love a good story. So, give the people what they want.</p>
                    <p>By harnessing the power of storytelling, you can attract a new audience with engaging tales and maintain the much-needed attention of your current followers. The key is engaging your audience with interesting and relatable content that will bring them closer to your brand.</p>
                    <p>So, tell a story. Any story. Share with your audience the storyline of your NFT gaming project, how your PFP idea came to life, or the challenges you had to face to launch your generative art collection. Offer them a peek into your backstage, share your creative process, and introduce your team.</p>
                    <p>Your project is surrounded by more stories than you can imagine.</p>

                        <li>Educate Your Audience</li>
                    <p>NFTs are a nascent technology. There's a lot of information out there, but most of it is pretty repetitive or simply regurgitates the same ideas over and over again.</p>
                    <p>So, bring something new to the table. Tell your audience about NFTs by putting out content that adds value and helps them understand the ecosystem and its potential. Don't just cling to someone else's ideas. Come up with your own and share those insights with the world.</p>
                    <p>Providing your audience with valuable educational and helpful content will position you as an authority in the space and allow you to build trust.</p>
                    <p>Partnerships are a great way to take these efforts to another level. By working alongside experts in the field, you can educate your audience and expand your reach. So, get in touch with NFT leaders and experts, interact with them, and invite them to collaborate —maybe do a live stream or an AMA on social media. Ask questions. Provide answers.</p>

                        <li>Nurturing Your Community</li>
                    <p>A solid community is the backbone of a successful NFT project. There are several ways to grow and foster your NFT community, but the key here will always be to engage meaningfully with them.</p>
                    <p>What does this mean? Well, first of all, be authentic and accessible. Tell them who you are, what you do, and why you do it. Make yourself available to them and share every detail of your project. Answer their questions on social media genuinely —you know, not like a bot.</p>
                    <p>Another critical aspect of building a solid community is promoting interaction and dialogue among its members across all your channels. You can achieve that by engaging them in fun contests or giveaways, placing strategic CTAs in all your communications, and establishing open channels for them to interact freely.</p>
                </ol>

                <h4>A Few Parting Words</h4>
                <p>Marketing your NFT project is definitely not an easy task. There's no one-size-fits-all method to make people fall in love with your NFTs, and the field is still too new to tell what will work and what won't.</p>
                <p>However, by applying these strategies and adapting them to suit their project's tone and style better, marketers will get one step closer to taming NFT marketing and helping the industry move forward.</p>
            </div>
            : props.pType === 2 ? 
            <div>
                adsasddasnkjlfdaskjhnilofsdg kjhilosvfa kjnl asdbvf  iasdF  PI FAWEQp ifaweqr p urqf   wep uhn weFQ F  IEQ
            </div>
            : props.pType === 3 ? 
            <div>
                3
            </div>
            : null}
            <span onClick={() => {props.setChanging(0)}}><b className="material-symbols-outlined back-arrow">arrow_back</b><i>Back to portfolio</i></span>
        </div>
    )
}

export default PortfolioText