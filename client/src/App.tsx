import { useState, useEffect } from 'react';
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

  //TODO: add latest news withh infinit scroll
  //TODO: add search
  //TODO: add favorites

  useEffect(() => {
    const getArticles = async () => {
      const response: Article[] = await apiFetch('/articles');
      setArticles(response);
    };

    getArticles();
  }, []);

  const handleSearch = (query: string) => {
    //TODO: implement search
    console.log('Search ' + query);
  };

  const handleCategoryChange = (category: Categorie) => {
    //TODO: implement category change
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
        <CategoriesMenu
          selectedCategory="favorites"
          onCategoryChange={handleCategoryChange}
        />
        <Articles articles={articles} />
      </div>
    </>
  );
}

export default App;
