import React, { Component } from 'react'

export class NewsItems extends Component {
  render() {

    let {title , description , imageURL , url,author,publish} = this.props ;
    return (
      <div>
        
        <div className="card" >
            <img src={imageURL} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}
                </h5>
                <p className="card-text">{description}</p>
                  <p class="card-text"><small class="text-muted">By:{author?author : "Unknown"} and on : {new Date(publish).toGMTString()} .</small></p>
                <a href={url} target = "_blank" rel="noreferrer"  className="btn btn-primary" >Read More</a>
            </div>
</div>
      </div>
    )
  }
}

export default NewsItems
