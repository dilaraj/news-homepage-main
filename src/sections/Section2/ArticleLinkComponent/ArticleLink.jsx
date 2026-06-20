import './ArticleLink.css'

export default function ArticleLink({ headline, subheadline}) {
    return (
        <div className="article-link-container">
            <span className="headline">{headline}</span>
            <span className="subheadline">{subheadline}</span>
        </div>
    )
}