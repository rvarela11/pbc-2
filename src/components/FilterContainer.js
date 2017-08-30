import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchBarName, searchBarNameCompany, getResultsFromFilterButtons, getResultsFromFilterButtonsCompany, getResultsOnLoad, getCompanyResultsOnLoad } from '../actions/index';

// Components
import SearchBar from './SearchBar';
import FilterButton from './FilterButton';

class FilterContainer extends Component {

  // These objects are collected from the filter button options checkboxes and are used to make an API call
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
    pastFunding: [],
    stage:[],
    state: [],
    year: []
  }
  }

  render() {

    // filterNames are being brought in from the reducer initial state
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

  // Function is checking for the checkboxName to push the correct information into the object set in the components inital state
  checkboxOptionDataToFilterContainer = (checkboxName, checkboxValue, checkboxChecked) => {
    const filter_option_arrays = this.state.filter_option_arrays;
    const filter_option_arrays_company = this.state.filter_option_arrays_company;
    if (checkboxChecked){
        switch (checkboxName) {
          case 'techstars':
            if (this.props.pathname === "/") {
              filter_option_arrays.techstars.push(checkboxValue);
              this.setState({filter_option_arrays});
            } else {
              filter_option_arrays_company.techstars.push(checkboxValue);
              this.setState({filter_option_arrays_company});
            }
            break;
          case 'cohort':
            filter_option_arrays.cohort.push(Number(checkboxValue));
            this.setState({filter_option_arrays});
            break;
          case 'status':
            filter_option_arrays.status.push(Number(checkboxValue));
            this.setState({filter_option_arrays});
            break;
          case 'branch':
            filter_option_arrays.branch.push(Number(checkboxValue));
            this.setState({filter_option_arrays});
            break;
          case 'pastFunding':
            filter_option_arrays_company.pastFunding.push(checkboxValue);
            this.setState({filter_option_arrays_company});
            break;
          case 'stage':
            filter_option_arrays_company.stage.push(checkboxValue);
            this.setState({filter_option_arrays_company});
            break;
          default:
            break;
        }
    } else {
      switch (checkboxName) {
        case 'techstars':
          if (this.props.pathname === "/") {
            filter_option_arrays.techstars.splice(-1,1);
            this.setState({filter_option_arrays});
          } else {
            filter_option_arrays_company.techstars.splice(-1,1);
            this.setState({filter_option_arrays_company});
          }
          break;
        case 'cohort':
          filter_option_arrays.cohort.splice(-1,1);
          this.setState({filter_option_arrays});
          break;
        case 'status':
          filter_option_arrays.status.splice(-1,1);
          this.setState({filter_option_arrays});
          break;
        case 'branch':
          filter_option_arrays.branch.splice(-1,1);
          this.setState({filter_option_arrays});
          break;
        case 'pastFunding':
          filter_option_arrays_company.pastFunding.splice(-1,1);
          this.setState({filter_option_arrays_company});
          break;
        case 'stage':
          filter_option_arrays_company.stage.splice(-1,1);
          this.setState({filter_option_arrays_company});
          break;
        default:
          break;
      }
    }
  }

  // Function that will pass the text from the input to make the correct API call
  searchButtonFilter = () => {
    if (this.props.pathname === "/") {
      this.props.getResultsFromFilterButtons(this.state.filter_option_arrays);
    } else {
      this.props.getResultsFromFilterButtonsCompany(this.state.filter_option_arrays_company);
    }
  }

  // Function will make initial API call to get all results and set all buttons to false
  resetResults = () => {
    if (this.props.pathname === "/") {
      this.props.getResultsOnLoad();
    } else {
      this.props.getCompanyResultsOnLoad();
    }
  }

}

const mapDispatchToProps = (dispatch) => {
    return {
        searchBarName: (name) => dispatch(searchBarName(name)),
        searchBarNameCompany: (name) => dispatch(searchBarNameCompany(name)),
        getResultsFromFilterButtons: (data) => dispatch(getResultsFromFilterButtons(data)),
        getResultsFromFilterButtonsCompany: (data) => dispatch(getResultsFromFilterButtonsCompany(data)),
        getResultsOnLoad: () => dispatch(getResultsOnLoad()),
        getCompanyResultsOnLoad: () => dispatch(getCompanyResultsOnLoad()),
    };
};

const mapStateToProps = (state) => {
    return {
        filterNamesAlumni: state.filterNamesAlumni,
        filterNamesCompany: state.filterNamesCompany,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterContainer);
