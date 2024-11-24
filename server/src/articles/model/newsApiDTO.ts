export interface ArticleResponse {
  title: string;
  url: string;
  urlToImage: string | null;
  publishedAt: Date;
  source: {
    id: string;
  };
}

export interface NewsApiTopHeadlinesSuccessResponse {
  status: 'ok';
  totalResults: number;
  articles: ArticleResponse[];
}

export interface NewsApiErrorResponse {
  status: 'error';
  code: string;
  message: string;
}

export type NewsApiTopHeadlinesResponse =
  | NewsApiTopHeadlinesSuccessResponse
  | NewsApiErrorResponse;

export interface SourceResponse {
  id: string;
  category: string;
}

export interface NewsApiSourcesSuccessResponse {
  status: 'ok';
  sources: SourceResponse[];
}

export type NewsApiSourcesResponse =
  | NewsApiSourcesSuccessResponse
  | NewsApiErrorResponse;
