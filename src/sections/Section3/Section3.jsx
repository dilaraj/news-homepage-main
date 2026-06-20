import './Section3.css'
import TopArticleLink from './TopArticleLinkComponent/TopArticleLink'

import image1 from '../../assets/images/image-retro-pcs.jpg'
import image2 from '../../assets/images/image-top-laptops.jpg'
import image3 from '../../assets/images/image-gaming-growth.jpg'

export default function Section3() {
    return (
        <div className="section3-container">
            <TopArticleLink 
                image={image1}
                ranking={'01'}
                title={'Reviving Retro PCs'}
                subtitle={'What happens when old PCs are given modern upgrades?'}
            />
            <TopArticleLink 
                image={image2}
                ranking={'02'}
                title={'Top 10 Laptops of 2022'}
                subtitle={'Our best picks for various needs and budgets.'}
            />
            <TopArticleLink 
                image={image3}
                ranking={'03'}
                title={'The Growth of Gaming'}
                subtitle={'How the pandemic has sparked fresh opportunities.'}
            />
        </div>
    )
}