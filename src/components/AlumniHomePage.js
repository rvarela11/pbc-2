import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getResultsOnLoad, navClickedOption, searchBarName } from '../actions/index';

// Components

import Nav from './Nav';
import Header from './Header';
import SearchBar from './SearchBar';
import FilterButton from './FilterButton';
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
      founders = [];
    }

    return <div>
      <Nav navClickedOption={this.props.navClickedOption}/>
      <Header/>
        <div className="search-filters-card-overall-container">
          <SearchBar addMessage={this.props.addMessage} searchBarName={this.props.searchBarName}/>
          <div className="filter-button-overall-container">
            {this.props.filterNames.map((filterName, index) => {
              return <div key={index} className='filter-button-individual-container'>
                <FilterButton filterName={filterName}/>
              </div>
            })}
          </div>
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
        searchBarName: (name) => dispatch(searchBarName(name)),
        getResultsOnLoad: () => dispatch(getResultsOnLoad()),
    };
};

const mapStateToProps = (state) => {
    return {
        filterNames: state.filterNames,
        results: state.results
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlumniHomePage);
