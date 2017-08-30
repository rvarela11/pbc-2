import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getResultsOnLoad, navClickedOption } from '../actions/index';

// Components
import Nav from './Nav';
import Header from './Header';
import FilterContainer from './FilterContainer';
import Card from './Card';

class AlumniHomePage extends Component {

  componentDidMount () {
    //function to get the array with all the founders data
    this.props.getResultsOnLoad();
  }

  render() {
    //Set founders array to prepare the Cards. The results is first undefined so it is set to an emtpy array.
    let founders;
    if(!this.props.results.founders) {
      founders = [];
    } else {
      founders = this.props.results.founders;
    }

    return <div>
      <Nav navClickedOption={this.props.navClickedOption}/>
      <Header pathname={this.props.location.pathname}/>
      <div className="search-filters-card-overall-container">
        <FilterContainer pathname={this.props.location.pathname}/>
        <div className="card-overall-container">
          {founders.map((info, index) => {
            return (
              <Card pathname={this.props.location.pathname} info={info} key={index}/>
            )})}
        </div>
      </div>
    </div>
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        navClickedOption: (navOption) => dispatch(navClickedOption(navOption)),
        getResultsOnLoad: () => dispatch(getResultsOnLoad()),
    };
};

const mapStateToProps = (state) => {
    return {
        results: state.results
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlumniHomePage);
