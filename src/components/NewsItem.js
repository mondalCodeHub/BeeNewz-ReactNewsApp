import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let { title, description, imgUrl, newsUrl, author, publishedAt, source } = this.props;
        return (
            <div className='my-3 '>
                <div className="card test" >

                    <div className="sourxce" style={{ backgroundColor: '#0885713d' }}>
                        <span className="badge rounded-pill bg-success" style={{ textAlign: 'center', margin: '5px', marginLeft: '37%', padding: '5px', textTransform: 'uppercase' }}  >{source}</span>
                    </div>

                    <img src={!imgUrl ? "https://tinyurl.com/nmuv3kfs" : imgUrl} className="card-img-top newsximg" alt="( Morning Cup News )Image" />
                    <div className="card-body cardBody">
                        <h5 className="card-title newsTitle">{title}</h5>
                        <p className="card-text newsDescription">{!description?"No Descruiption availabele":description}</p>
                        <p><small>By:<b>{!author ? "Annynomous Source" : author} </b> | DATE: <b>{new Date(publishedAt).toGMTString()}</b></small></p>
                        <a href={newsUrl} target="_blank" className="btn btn-sm btn-secondary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem

