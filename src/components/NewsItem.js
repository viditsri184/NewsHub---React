import React, { Component } from 'react';

export class NewsItem extends Component {
    render() {
        let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
        return (
            <div className='my-3'>
                <div className="card">
                    <div className='d-flex position-absolute justify-content-end' style={{right: '0'}}>
                    <span className="badge rounded-pill bg-danger" style={{left : '90%', zIndex : '1'}}>{source}</span>
                    </div>
                    <img src={!imageUrl?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN7c9YNU8-BL7li7aelS0ij4SzIY27-U0tvQ&usqp=CAU":imageUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <p className="card-text"><small className="text-primary">By {!author?"Unknown": author} on {new Date(date).toGMTString()}</small></p>
                            <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
