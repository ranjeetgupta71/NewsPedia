import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  pageSize = 15;
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News pageSize={this.pageSize} key="general" country="in" category="general" />} />
            <Route exact path="/general" element={<News pageSize={this.pageSize} key="general" country="in" category="general" />} />
            <Route exact path="/business" element={<News pageSize={this.pageSize} key="business" country="in" category="business" />} />
            <Route
              exact
              path="/entertainment"
              element={<News pageSize={this.pageSize} key="entertainment" country="in" category="entertainment" />}
            />
            <Route exact path="/health" element={<News pageSize={this.pageSize} key="health" country="in" category="health" />} />
            <Route exact path="/science" element={<News pageSize={this.pageSize} key="science" country="in" category="science" />} />
            <Route exact path="/sports" element={<News pageSize={this.pageSize} key="sports" country="in" category="sports" />} />
            <Route
              exact
              path="/technology"
              element={<News pageSize={this.pageSize} key="technology" country="in" category="technology" />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
