function Article({ article }) {
  return (
    <div id="articleContainer">
      <h2 id="componentTitle">{article.title}</h2>
      <br />
      <span>{article.imageLink}</span>
      <br />
      <h4 id="articleAuthor">
        Un article de {article.author}, paru le {article.date}
      </h4>
      <div id="articleContent">
        <p>{article.content}</p>
      </div>
    </div>
  );
}

export default Article;
