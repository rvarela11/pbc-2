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
                      <div className="card-content-display card-content-name">
                        <li><h4>{info.first_name}</h4></li>
                        <li><h4>{info.last_name}</h4></li>
                      </div>
                      <li className="card-content__cohort"><i className="fa fa-graduation-cap" aria-hidden="true"></i><h6>Class of {info.year} - {info.location}</h6></li>
                      <li className="card-content__email"><i className="fa fa-envelope" aria-hidden="true"></i><h6>{info.email}</h6></li>
                      <li className="card-content__location"><i className="fa fa-globe" aria-hidden="true"></i><h6>{info.state}</h6></li>
                    </ul>
                    <div className="card-image-techstars" style={{display: info.techstars ? 'inline-block' : 'none'}}>
                      <img alt="techstars logo" src="../images/techstars-logo-3.png"/>
                    </div>
                  </div>
                  <div className="card-action">
                    <div className="chip blue lighten-4 black-text"> {info.year + " - " + info.location} </div>
                    <div className="chip blue lighten-4 black-text"> {info.status} </div>
                    <div className="chip blue lighten-4 black-text"> {info.branch} </div>
                    <div className="chip blue lighten-4 black-text"> {info.state} </div>
                  </div>
                </div>
              </div>
            </div>
    )
  }
}

export default Card;
