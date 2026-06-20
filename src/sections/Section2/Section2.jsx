import './Section2.css'
import ArticleLink from './ArticleLinkComponent/ArticleLink'

export default function Section2() {
    return (
        <div className="section2-container">
            <span className='header'>New</span>
            <div className="article-links">
                <ArticleLink 
                    headline={"Hydrogen VS Electric Cars"}
                    subheadline={"Will hydrogen-fueled cars ever catch up to EVs?"}
                />
                <div className="line"></div>
                <ArticleLink 
                    headline={"The Downsides of AI Artistry"}
                    subheadline={"What are the possible adverse effects of on-demand AI image generation?"}
                />
                <div className="line"></div>
                <ArticleLink 
                    headline={"Is VC Funding Drying Up?"}
                    subheadline={"Private funding by VC firms is down 50% YOY. We take a look at what that means."}
                />
            </div>
        </div>
    )
}