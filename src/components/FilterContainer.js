import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchBarName, getResultsFromFilterButtons, techstarsFilterButtonClicked, cohortFilterButtonClicked, statusFilterButtonClicked, branchFilterButtonClicked } from '../actions/index';
// import { Link } from 'react-router-dom';

// Components
import SearchBar from './SearchBar';
import FilterButton from './FilterButton';

class FilterContainer extends Component {

  state = {
  filter_option_arrays: {
      techstars: [],
      state: [],
      status: [],
      cohort: [],
      branch: []
    }
  }

  render() {
    return <div>
        <SearchBar addMessage={this.props.addMessage} searchBarName={this.props.searchBarName}/>
        <div className="filter-button-overall-container">
          {this.props.filterNames.map((filterName, index) => {
            return <div key={index} className='filter-button-individual-container'>
              <FilterButton filterName={filterName} checkboxOptionDataToFilterContainer={this.checkboxOptionDataToFilterContainer}/>
            </div>
          })}
        </div>
        <div className="search-reset-button-overall-container">
          <button className="waves-effect waves-light btn search-button" onClick={this.searchButtonFilter}>Search</button>
          <button className="waves-effect waves-light btn red darken-1 reset-button" onClick={this.resetResults}>Reset Filters</button>
        </div>
    </div>
  }

  checkboxOptionDataToFilterContainer = (checkboxName, checkboxValue, checkboxChecked) => {
    const filter_option_arrays = this.state.filter_option_arrays;
      const filterProperties = ["techstars", "state", "cohort", "status", "branch"];
      filterProperties.forEach((filterBy) => {
        if (filterBy === checkboxName && checkboxChecked){
          if (filterBy === "techstars"){
            filter_option_arrays.techstars.push(checkboxValue);
            this.setState({filter_option_arrays});
          } else if (filterBy === "cohort"){
            filter_option_arrays.cohort.push(Number(checkboxValue));
            this.setState({filter_option_arrays});
          }  else if (filterBy === "status"){
            filter_option_arrays.status.push(Number(checkboxValue));
            this.setState({filter_option_arrays});
          } else if (filterBy === "branch"){
            filter_option_arrays.branch.push(Number(checkboxValue));
            this.setState({filter_option_arrays});
          }
      }  else if (filterBy === checkboxName && !checkboxChecked){
        if (filterBy === "techstars"){
          filter_option_arrays.techstars.splice(-1,1);
          this.setState({filter_option_arrays});
        } else if (filterBy === "cohort"){
          filter_option_arrays.cohort.splice(-1,1);
          this.setState({filter_option_arrays});
        }  else if (filterBy === "status"){
          filter_option_arrays.status.splice(-1,1);
          this.setState({filter_option_arrays});
        } else if (filterBy === "branch"){
          filter_option_arrays.branch.splice(-1,1);
          this.setState({filter_option_arrays});
        }
      }
    })
  }

  searchButtonFilter = () => {
    this.props.getResultsFromFilterButtons(this.state.filter_option_arrays);
  }

  resetResults = () => {
    this.props.resetResults();
    this.props.techstarsFilterButtonClicked(false);
    this.props.cohortFilterButtonClicked(false);
    this.props.statusFilterButtonClicked(false);
    this.props.branchFilterButtonClicked(false);
  }

}

const mapDispatchToProps = (dispatch) => {
    return {
        searchBarName: (name) => dispatch(searchBarName(name)),
        getResultsFromFilterButtons: (data) => dispatch(getResultsFromFilterButtons(data)),
        techstarsFilterButtonClicked: (status) => dispatch(techstarsFilterButtonClicked(status)),
        cohortFilterButtonClicked: (status) => dispatch(cohortFilterButtonClicked(status)),
        statusFilterButtonClicked: (status) => dispatch(statusFilterButtonClicked(status)),
        branchFilterButtonClicked: (status) => dispatch(branchFilterButtonClicked(status)),
    };
};

const mapStateToProps = (state) => {
    return {
        filterNames: state.filterNames
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterContainer);
