type LatestNewsAticle = {
  title: string;
  publishedAt: Date;
  url: string;
};

type LatestNewsProps = {
  articles: LatestNewsAticle[];
};

const LlatestNews: React.FC<LatestNewsProps> = ({ articles }) => {
  return (
    <div>
      {articles.map((article) => (
        <div key={article.url}>
          <p>{article.publishedAt.toString()}</p>
          <h2>{article.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default LlatestNews;
