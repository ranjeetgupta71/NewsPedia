import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  pageSize = 15;
  apiKey = process.env.REACT_APP_NEWS_API;

  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <LoadingBar color="#f11946" progress={100} height={2} />
          <Routes>
            <Route
              exact
              path="/"
              element={<News pageSize={this.pageSize} apiKey={this.apiKey} key="general" country="in" category="general" />}
            />
            <Route
              exact
              path="/general"
              element={<News pageSize={this.pageSize} apiKey={this.apiKey} key="general" country="in" category="general" />}
            />
            <Route
              exact
              path="/business"
              element={<News pageSize={this.pageSize} apiKey={this.apiKey} key="business" country="in" category="business" />}
            />
            <Route
              exact
              path="/entertainment"
              element={<News pageSize={this.pageSize} apiKey={this.apiKey} key="entertainment" country="in" category="entertainment" />}
            />
            <Route
              exact
              path="/health"
              element={<News pageSize={this.pageSize} apiKey={this.apiKey} key="health" country="in" category="health" />}
            />
            <Route
              exact
              path="/science"
              element={<News pageSize={this.pageSize} apiKey={this.apiKey} key="science" country="in" category="science" />}
            />
            <Route
              exact
              path="/sports"
              element={<News pageSize={this.pageSize} apiKey={this.apiKey} key="sports" country="in" category="sports" />}
            />
            <Route
              exact
              path="/technology"
              element={<News pageSize={this.pageSize} apiKey={this.apiKey} key="technology" country="in" category="technology" />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
