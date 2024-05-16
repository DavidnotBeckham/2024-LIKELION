import './Article.css'

function Article(props) {
  return (
    <div className="article">
      <img src={props.image} alt="image"></img>
      <div className='jobDescription'>
        <div className='article-title'>{props.title}</div>
        <div className='article-description'>{props.description}</div>
        <div className='article-pay'>{props.pay}</div>
      </div>
    </div>
  );
}

export default Article;