import PropTypes from 'prop-types';
import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
export default class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  capitaliseFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.capitaliseFirstLetter(this.props.category)} - NewsPedia`;
  }

  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9b19a7bfe25b401f883fa706fe3c5339&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    // it is lifecycle method, runs after render method
    this.updateNews();
  }
  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${
      this.props.category
    }&apiKey=9b19a7bfe25b401f883fa706fe3c5339&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;

    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    });
  };

  handleNextClick = async () => {
    await this.setState({
      page: this.state.page + 1,
    });
    this.updateNews();
  };
  handlePrevClick = async () => {
    await this.setState({
      page: this.state.page - 1,
    });
    this.updateNews();
  };
  render() {
    return (
      <>
        <h1 className="text-center" style={{ margin: '33px' }}>
          NewsPedia - Top {this.capitaliseFirstLetter(this.props.category)} HeadLines
        </h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {!this.state.loading &&
                // // {this.state.articles.map((element,index) => {
                //  return <div className="col-md-4" key = {index}></div>
                this.state.articles.map((element, index) => {
                  return (
                    <div className="col-md-4" key={index}>
                      <NewsItem
                        title={element.title}
                        description={element.description}
                        imageUrl={element.urlToImage}
                        newsUrl={element.url}
                        author={element.author}
                        date={element.publishedAt}
                        source={element.source.name}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}
