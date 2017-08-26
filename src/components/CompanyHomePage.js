import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCompanyResultsOnLoad, getResultsOnLoad, navClickedOption } from '../actions/index';

// Components
import Nav from './Nav';
import Header from './Header';
import FilterContainer from './FilterContainer';
import CardCompany from './CardCompany';

class CompanyHomePage extends Component {

  componentDidMount () {
    //function to get the array with all the company data
    this.props.getCompanyResultsOnLoad();
  }

  render() {

    let companies;
    if(!this.props.results.companies) {
      companies = [];
    } else {
      companies = this.props.results.companies;
    }

    console.log(companies);

    return <div>
      <Nav navClickedOption={this.props.navClickedOption}/>
      <Header/>
      <div className="search-filters-card-overall-container">
        <FilterContainer resetResults={this.props.getResultsOnLoad}/>
        <div className="card-overall-container">
          {companies.map((info, index) => {
            return (
              <CardCompany info={info} key={index}/>
            )})}
        </div>
      </div>
    </div>
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCompanyResultsOnLoad: () => dispatch(getCompanyResultsOnLoad()),
        navClickedOption: (navOption) => dispatch(navClickedOption(navOption)),
        getResultsOnLoad: () => dispatch(getResultsOnLoad()),
    };
};

const mapStateToProps = (state) => {
    return {
        results: state.results
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CompanyHomePage);
