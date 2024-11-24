import { useState, useEffect, useCallback } from 'react';
import './App.scss';
import { apiFetch } from './api';
import { Link } from 'react-router-dom';
import { Article } from './articles/Article';
import Articles from './articles/Articles';
import Header from './layout/Header';
import SearchBar from './layout/SearchBar';
import CategoriesMenu, { Categorie } from './layout/CateogryMenu';

function App() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [category, setCategory] = useState<Categorie>('general');

  //TODO: add latest news withh infinit scroll
  //TODO: add search
  //TODO: add favorites

  const loadArticles = useCallback(async (category: Categorie) => {
    let url = '/articles';
    if (category && category != 'home') {
      url += '?category=' + category;
    }

    const response: Article[] = await apiFetch(url);
    setArticles(response);
  }, []);

  useEffect(() => {
    loadArticles(category);
  }, [loadArticles]);

  const handleSearch = (query: string) => {
    //TODO: implement search
    console.log('Search ' + query);
  };

  const handleCategoryChange = (category: Categorie) => {
    setCategory(category);
    loadArticles(category);
    console.log('Load category ' + category);
  };

  return (
    <>
      <Header />
      <div className="app">
        {/* TODO: page layout */}
        <Link to="/signup">Sign Up</Link>
        <Link to="/signin">Sign In</Link>
        <SearchBar onSearch={handleSearch} />
        <div className="pageContent">
          <CategoriesMenu
            category={category}
            onCategoryChange={handleCategoryChange}
          />

          <Articles articles={articles} />
        </div>
      </div>
    </>
  );
}

export default App;
