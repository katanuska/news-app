import { Article } from './model/article';
import {
  ArticleResponse,
  NewsApiTopHeadlinesResponse,
  NewsApiSourcesResponse,
  SourceResponse,
} from './model/newsApiDTO';

// News API top headlines documentation: https://newsapi.org/docs/endpoints/top-headlines

const NEWS_API = 'https://newsapi.org/v2';
const TOP_HEADLINES_API = '/top-headlines';
const SOURCES_API = '/sources';

const API_KEY_PARAM = 'apiKey';
const COUNTRY_PARAM = 'country';
const CATEGORY_PARAM = 'category';
const SEARCH_PARAM = 'q';
const SORTY_BY_PARAM = 'sortBy';
const PAGE_PARAM = 'page';
const PAGE_SIZE_PARAM = 'pageSize';

const COUNTRY = 'us'; // TODO: put to environment if more than one country should be supported
const SORT_BY = 'publishedAt';
const PAGE = 1;
const PAGE_SIZE = 30;

const OK_STATUS = 'ok';

//TODO: cache somehere
let newsApiSources: SourceResponse[] = [];

const removeArticlesFromUnknownSources = (
  articles: ArticleResponse[]
): ArticleResponse[] => {
  return articles.filter((article) => article.source?.id);
};

const callNewsApiSources = async () => {
  if (!process.env.NEWS_API_KEY) {
    throw new Error('API_KEY for fetching data from NewsAPI is missing');
  }

  const searchParams: Record<string, any> = new URLSearchParams();
  searchParams.append(API_KEY_PARAM, process.env.NEWS_API_KEY);
  searchParams.append(COUNTRY_PARAM, COUNTRY);

  const baseUrl = new URL(NEWS_API + SOURCES_API);
  baseUrl.search = searchParams.toString();

  const response = await fetch(baseUrl);
  const sourceResponse: NewsApiSourcesResponse = await response.json();

  if (sourceResponse.status != OK_STATUS) {
    throw new Error('Error fetching from news API: ' + sourceResponse.message);
  }

  return sourceResponse.sources;
};

const callNewsApiTopHeadlines = async (
  category: string | undefined,
  search: string | undefined
): Promise<ArticleResponse[]> => {
  if (!process.env.NEWS_API_KEY) {
    throw new Error('API_KEY for fetching data from NewsAPI is missing');
  }

  const searchParams: Record<string, any> = new URLSearchParams();
  searchParams.append(API_KEY_PARAM, process.env.NEWS_API_KEY);
  searchParams.append(COUNTRY_PARAM, COUNTRY);
  if (category) {
    searchParams.append(CATEGORY_PARAM, category);
  }
  if (search) {
    searchParams.append(SEARCH_PARAM, search);
  }
  searchParams.append(SORTY_BY_PARAM, SORT_BY);
  searchParams.append(PAGE_PARAM, PAGE);
  searchParams.append(PAGE_SIZE_PARAM, PAGE_SIZE);

  const baseUrl = new URL(NEWS_API + TOP_HEADLINES_API);
  baseUrl.search = searchParams.toString();
  console.log(baseUrl);

  const response = await fetch(baseUrl);
  const articlesResponse: NewsApiTopHeadlinesResponse = await response.json();

  if (articlesResponse.status != OK_STATUS) {
    throw new Error(
      'Error fetching from news API: ' + articlesResponse.message
    );
  }

  return articlesResponse.articles;
};

export const loadArticles = async (
  category: string | undefined,
  search: string | undefined
): Promise<Article[]> => {
  let articlesResponse = await callNewsApiTopHeadlines(category, search);
  articlesResponse = removeArticlesFromUnknownSources(articlesResponse);

  let articles: Article[];
  if (category) {
    articles = articlesResponse.map((article) => ({ ...article, category }));
  } else {
    if (!newsApiSources.length) {
      newsApiSources = await callNewsApiSources();
    }
    articles = articlesResponse.map((article) => {
      const articleSource = newsApiSources.find(
        (source) => source.id === article.source.id
      );
      return { ...article, category: articleSource?.category };
    });
  }

  return articles;
};
