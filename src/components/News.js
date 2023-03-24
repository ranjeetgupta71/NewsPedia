import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export default class News extends Component {
  constructor(){
      super();
      // console.log("hello im constructor from news component");
      this.state = {
        articles : [],
        loading:false,
        page:1
      }
    }

    async componentDidMount(){ // it is lifecycle method, runs after render method
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=9b19a7bfe25b401f883fa706fe3c5339&page=1&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
      let data = await fetch(url);
      let parsedData = await data.json()
      console.log(parsedData);
      this.setState({
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        loading: false
      })
      console.log(this.loading)
    }
    handleNextClick= async ()=>{
      if(!(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize))){
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=9b19a7bfe25b401f883fa706fe3c5339&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);

        console.log(this.loading)
        this.setState({
          page:this.state.page + 1,
          articles: parsedData.articles,
          loading :false
        })
      }
    }
    handlePrevClick= async ()=>{
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=9b19a7bfe25b401f883fa706fe3c5339&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading: true})
      let data = await fetch(url);
      let parsedData = await data.json()
      console.log(parsedData);

      this.setState({
        page: this.state.page - 1,
        articles: parsedData.articles,
        loading:false
      })
    }
  render() {
    return (
      <div className='container my-3'>
        <h1 className="text-center">NewsPedia - Top HeadLines</h1>
        {this.state.loading && <Spinner/>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element)=>{
            return <div className="col md-4" key={element.url}>
                <NewsItem title={element.title} description = {element.description} imageUrl={element.urlToImage}
                newsUrl={element.url}/>
                </div>
          })}
          <div className="container d-flex justify-content-between">
            <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
            <button type="button" disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}>Next&rarr;</button>
          </div>
        </div>
      </div>
    )
  }
}
