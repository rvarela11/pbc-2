import React, { Component } from 'react';

class CardCompany extends Component {
  render() {
    const info = this.props.info;
    return (
            <div className="col s12 m7 card-outline" key={Math.random()}>
              <div className="card horizontal grey lighten-5">
                <div className="card-image">
                  <img alt="empty avatar" src="../images/empty_avatar.jpg"/>
                </div>
                <div className="card-stacked">
                  <div className="card-content">
                    <ul>
                      <li><h4>{info.name}</h4></li>
                      <div className="card-content-display card-content__company-name-founder">
                        <li><i className="fa fa-user" aria-hidden="true"></i></li>
                        <li><h6>{info.first_name}</h6></li>
                        <li><h6>{info.last_name}</h6></li>
                      </div>
                      <li className="card-content__email"><i className="fa fa-envelope" aria-hidden="true"></i><h6>{info.email}</h6></li>
                      <li className="card-content__location"><i className="fa fa-globe" aria-hidden="true"></i><a href={this.website(info.website_url)} target="_blank">{info.website_url}</a></li>
                    </ul>
                    <div className="card-image-techstars" style={{display: info.techstars ? 'flex' : 'none'}}>
                      <img alt="techstars logo" src="../images/techstars-logo-3.png"/>
                    </div>
                  </div>
                  <div className="card-action">
                    <div className="chip blue lighten-4 black-text"> {info.year_founded} </div>
                    <div className="chip blue lighten-4 black-text"> {info.state} </div>
                  </div>
                </div>
              </div>
            </div>
    )
  }
  website = (website) => {
    if (!website){
      website = [];
    } else {
      const h = website[0];
        if (h === "h"){
          return(
            website
          )
        } else {
          return (
            "http://" + website
          )
        }
    }
  }
}

export default CardCompany;
