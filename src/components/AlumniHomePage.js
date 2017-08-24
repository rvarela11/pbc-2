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
    //function to get the array with all the users data
    this.props.getResultsOnLoad();
  }

  render() {

    let founders;
    if(!this.props.results.founders) {
      founders = [];
    } else {
      founders = this.props.results.founders;
    }

    return <div>
      <Nav navClickedOption={this.props.navClickedOption}/>
      <Header/>
      <div className="search-filters-card-overall-container">
        <FilterContainer/>
        <div className="card-overall-container">
          {founders.map((info, index) => {
            return (
              <Card info={info} key={index}/>
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
