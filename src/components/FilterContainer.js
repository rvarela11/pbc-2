import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchBarName, searchBarNameCompany, getResultsFromFilterButtons, getResultsFromFilterButtonsCompany, techstarsFilterButtonClicked, cohortFilterButtonClicked, statusFilterButtonClicked, branchFilterButtonClicked, pastFundingFilterButtonClicked, stageFilterButtonClicked } from '../actions/index';
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
    },
  filter_option_arrays_company: {
    techstars: [],
    funding: [],
    stage:[]
  }
  }

  render() {

    let filterNames;

    if (this.props.pathname === "/") {
      filterNames = this.props.filterNamesAlumni;
    } else {
      filterNames = this.props.filterNamesCompany;
    }

    return <div>
        <SearchBar pathname={this.props.pathname} searchBarName={this.props.searchBarName} searchBarNameCompany={this.props.searchBarNameCompany}/>
        <div className="filter-button-overall-container">
          {filterNames.map((filterName, index) => {
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
    const filter_option_arrays_company = this.state.filter_option_arrays_company;
      const filterProperties = ["techstars", "state", "cohort", "status", "branch", "pastFunding", "stage"];
      filterProperties.forEach((filterBy) => {
        if (filterBy === checkboxName && checkboxChecked){
          if (filterBy === "techstars"){
            if (this.props.pathname === "/") {
              filter_option_arrays.techstars.push(checkboxValue);
              this.setState({filter_option_arrays});
            } else {
              filter_option_arrays_company.techstars.push(checkboxValue);
              this.setState({filter_option_arrays_company});
            }
          } else if (filterBy === "cohort"){
            filter_option_arrays.cohort.push(Number(checkboxValue));
            this.setState({filter_option_arrays});
          }  else if (filterBy === "status"){
            filter_option_arrays.status.push(Number(checkboxValue));
            this.setState({filter_option_arrays});
          } else if (filterBy === "branch"){
            filter_option_arrays.branch.push(Number(checkboxValue));
            this.setState({filter_option_arrays});
          } else if (filterBy === "pastFunding") {
            filter_option_arrays_company.funding.push(checkboxValue);
            this.setState({filter_option_arrays_company});
          } else if (filterBy === "stage") {
            filter_option_arrays_company.stage.push(checkboxValue);
            this.setState({filter_option_arrays_company});
          }
      }  else if (filterBy === checkboxName && !checkboxChecked){
        if (filterBy === "techstars"){
          if (this.props.pathname === "/") {
            filter_option_arrays.techstars.splice(-1,1);
            this.setState({filter_option_arrays});
          } else {
            filter_option_arrays_company.techstars.splice(-1,1);
            this.setState({filter_option_arrays_company});
          }
        } else if (filterBy === "cohort"){
          filter_option_arrays.cohort.splice(-1,1);
          this.setState({filter_option_arrays});
        }  else if (filterBy === "status"){
          filter_option_arrays.status.splice(-1,1);
          this.setState({filter_option_arrays});
        } else if (filterBy === "branch"){
          filter_option_arrays.branch.splice(-1,1);
          this.setState({filter_option_arrays});
        } else if (filterBy === "pastFunding"){
          filter_option_arrays_company.funding.splice(-1,1);
          this.setState({filter_option_arrays_company});
        } else if (filterBy === "stage"){
          filter_option_arrays_company.stage.splice(-1,1);
          this.setState({filter_option_arrays_company});
        }
      }
    })
  }

  searchButtonFilter = () => {
    this.props.getResultsFromFilterButtons(this.state.filter_option_arrays);
    this.props.getResultsFromFilterButtonsCompany(this.state.filter_option_arrays_company);
    console.log(this.state.filter_option_arrays_company);
  }

  resetResults = () => {
    if (this.props.pathname === "/") {
      this.props.resetResults();
      this.props.techstarsFilterButtonClicked(false);
      this.props.cohortFilterButtonClicked(false);
      this.props.statusFilterButtonClicked(false);
      this.props.branchFilterButtonClicked(false);
    } else {
      this.props.resetResultsCompany();
      this.props.techstarsFilterButtonClicked(false);
      this.props.pastFundingFilterButtonClicked(false);
      this.props.stageFilterButtonClicked(false);
    }
  }

}

const mapDispatchToProps = (dispatch) => {
    return {
        searchBarName: (name) => dispatch(searchBarName(name)),
        searchBarNameCompany: (name) => dispatch(searchBarNameCompany(name)),
        getResultsFromFilterButtons: (data) => dispatch(getResultsFromFilterButtons(data)),
        getResultsFromFilterButtonsCompany: (data) => dispatch(getResultsFromFilterButtonsCompany(data)),
        techstarsFilterButtonClicked: (status) => dispatch(techstarsFilterButtonClicked(status)),
        cohortFilterButtonClicked: (status) => dispatch(cohortFilterButtonClicked(status)),
        statusFilterButtonClicked: (status) => dispatch(statusFilterButtonClicked(status)),
        branchFilterButtonClicked: (status) => dispatch(branchFilterButtonClicked(status)),
        pastFundingFilterButtonClicked: (status) => dispatch(pastFundingFilterButtonClicked(status)),
        stageFilterButtonClicked: (status) => dispatch(stageFilterButtonClicked(status)),
    };
};

const mapStateToProps = (state) => {
    return {
        filterNamesAlumni: state.filterNamesAlumni,
        filterNamesCompany: state.filterNamesCompany,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterContainer);
