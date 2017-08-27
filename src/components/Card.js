import React, { Component } from 'react';

class Card extends Component {
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
                      {this.cardContent(info)}
                    </ul>
                    <div className="card-image-techstars" style={{display: info.techstars ? 'flex' : 'none'}}>
                      <img alt="techstars logo" src="../images/techstars-logo-3.png"/>
                    </div>
                  </div>
                  <div className="card-action">
                    {this.cardChipContent(info)}
                  </div>
                </div>
              </div>
            </div>
    )
  }

  cardContent = (info) => {
    if (this.props.pathname === "/") {
      return <div>
        <div className="card-content-display card-content-name">
          <li><h4>{info.first_name}</h4></li>
          <li><h4>{info.last_name}</h4></li>
        </div>
        <li className="card-content__cohort"><i className="fa fa-graduation-cap" aria-hidden="true"></i><h6>Class of {info.year} - {info.location}</h6></li>
        <li className="card-content__email"><i className="fa fa-envelope" aria-hidden="true"></i><h6>{info.email}</h6></li>
        <li className="card-content__location"><i className="fa fa-globe" aria-hidden="true"></i><h6>{info.state}</h6></li>
      </div>
    } else {
      return <div>
        <li><h4>{info.name}</h4></li>
        <div className="card-content-display card-content__company-name-founder">
          <li><i className="fa fa-user" aria-hidden="true"></i></li>
          <li><h6>{info.first_name}</h6></li>
          <li><h6>{info.last_name}</h6></li>
        </div>
        <li className="card-content__email"><i className="fa fa-envelope" aria-hidden="true"></i><h6>{info.email}</h6></li>
        <li className="card-content__location"><i className="fa fa-globe" aria-hidden="true"></i><a href={this.website(info.website_url)} target="_blank">{info.website_url}</a></li>
      </div>
    }
  }

  cardChipContent = (info) => {
    if (this.props.pathname === "/") {
      return <div>
        <div className="chip blue lighten-4 black-text"> {info.year + " - " + info.location} </div>
        <div className="chip blue lighten-4 black-text"> {info.status} </div>
        <div className="chip blue lighten-4 black-text"> {info.branch} </div>
        <div className="chip blue lighten-4 black-text"> {info.state} </div>
      </div>
    } else {
      return <div>
        <div className="chip blue lighten-4 black-text"> {info.year_founded} </div>
        <div className="chip blue lighten-4 black-text"> {info.state} </div>
      </div>
    }
  }

  // Function to hyperlink the website. Only for the company tab
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

export default Card;
