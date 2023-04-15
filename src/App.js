import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const pageSize = 15;
  const apiKey = process.env.REACT_APP_NEWS_API;
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <LoadingBar color="#f11946" progress={100} height={2} />
        <Routes>
          <Route exact path="/" element={<News pageSize={pageSize} apiKey={apiKey} key="general" country="in" category="general" />} />
          <Route
            exact
            path="/general"
            element={<News pageSize={pageSize} apiKey={apiKey} key="general" country="in" category="general" />}
          />
          <Route
            exact
            path="/business"
            element={<News pageSize={pageSize} apiKey={apiKey} key="business" country="in" category="business" />}
          />
          <Route
            exact
            path="/entertainment"
            element={<News pageSize={pageSize} apiKey={apiKey} key="entertainment" country="in" category="entertainment" />}
          />
          <Route exact path="/health" element={<News pageSize={pageSize} apiKey={apiKey} key="health" country="in" category="health" />} />
          <Route
            exact
            path="/science"
            element={<News pageSize={pageSize} apiKey={apiKey} key="science" country="in" category="science" />}
          />
          <Route exact path="/sports" element={<News pageSize={pageSize} apiKey={apiKey} key="sports" country="in" category="sports" />} />
          <Route
            exact
            path="/technology"
            element={<News pageSize={pageSize} apiKey={apiKey} key="technology" country="in" category="technology" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
