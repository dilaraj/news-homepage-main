import './TopArticleLink.css'

export default function TopArticleLink({image, ranking, title, subtitle}) {
    return (
        <div className="top-article-container">
            <img src={image} alt="Article Image" className="article-img" />
            <div className="article-info">
                <span className="ranking">{ranking}</span>
                <span className="article-title">{title}</span>
                <span className="article-subtitle">{subtitle}</span>
            </div>
        </div>
    )
}