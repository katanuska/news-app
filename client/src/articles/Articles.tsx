import { Article } from './Article';
import ArticleCard from './ArticleCard';
import LlatestNews from './LatetNews';
import './Articles.scss';
import { ReactElement } from 'react';

type ArticlesProps = {
  articles: Article[];
};

const Articles: React.FC<ArticlesProps> = ({ articles = [] }) => {
  // TODO: load latest news
  return (
    <div>
      <h1>Articles</h1>

      <div className="articles-container">
        <div className="card latest-news">
          <LlatestNews articles={articles.slice(0, 10)} />
        </div>
        {articles.map((article) => (
          <div className="card">
            <ArticleCard key={article.url} {...article} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;