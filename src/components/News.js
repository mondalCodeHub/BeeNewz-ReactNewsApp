import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import propTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
// import css from './App.css'

export class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 6,
        category: 'general',
    }

    static propTypes = {
        country: propTypes.string,
        pageSize: propTypes.number,
        category: propTypes.string,
    }
    // CAPITALIZE FUNCTION [capitalizeFirstLetter() ]
    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    //THIS.PROPS [(this.props)]
    constructor(props) {
        super(props);
        console.log("CONSTRUCTOR - NEWS COMPONENT");
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
        }
        document.title = `BeeNewz - ${this.capitalizeFirstLetter(this.props.category)} `;
    }
    //UPDATE NEWS FUNCTION [updateNews()]
    async updateNews(pageNo) {
        this.props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        this.props.setProgress(30);
        let parsedData = await data.json();
        console.log(parsedData);
        this.props.setProgress(70);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
        this.props.setProgress(100);
    }
    //componentDidMount
    async componentDidMount() {
        this.updateNews();
    }
    // FETCHING MORE DATA (INFINITE SCROLL :{fetchMoreData() })
    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 });
        // this.updateNews();
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        // this.setState({ loading: true }) 
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults
        })
    }
    // REACT RENDER
    render() {
        return (
            <>

                <div className="topHeadline" style={{ textAlign: 'center', textTransform: 'uppercase', margin: '13px' , marginTop:'60px' }}><h1 className="bee"> <b> BEE NEWZ TOP HEADLINES</b>  <span className="theme" style={{ color: 'white', backgroundColor: 'green', paddingLeft: '5px', paddingRight: '5px', borderRadius: '6px' }}>{this.capitalizeFirstLetter(this.props.category)} </span></h1>  </div>


                {this.state.loading && <Spinner />}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                >
                    <div className="container">

                        {/* </div> */}

                        <div className="row style1">
                            {!this.state.loading && this.state.articles.map((element) => {

                                return <div className="col-md-4 newsx " key={element.url}>
                                    <NewsItem title={element.title ? element.title.slice(0,115) : " "} description={element.description ? element.description : " "} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source.name} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </>
        )
    }
}
export default News 
