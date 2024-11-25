import { Article } from './Article';
import ArticleCard from './ArticleCard';
import LlatestNews from './LatetNews';
import './Articles.scss';

type ArticlesProps = {
  articles: Article[];
};

const Articles: React.FC<ArticlesProps> = ({ articles = [] }) => {
  // TODO: load latest news
  return (
    <div className="articles-container">
      <div className="card latest-news">
        <LlatestNews articles={articles.slice(0, 10)} />
      </div>
      {articles.map((article) => (
        <div className="card" key={article.url}>
          <ArticleCard {...article} />
        </div>
      ))}
    </div>
  );
};

export default Articles;
