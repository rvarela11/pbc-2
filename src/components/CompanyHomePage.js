import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCompanyResultsOnLoad, getResultsOnLoad, navClickedOption } from '../actions/index';

// Components
import Nav from './Nav';
import Header from './Header';
import FilterContainer from './FilterContainer';
import Card from './Card';

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

    return <div>
      <Nav navClickedOption={this.props.navClickedOption}/>
      <Header pathname={this.props.location.pathname}/>
      <div className="search-filters-card-overall-container">
        <FilterContainer resetResults={this.props.getResultsOnLoad} resetResultsCompany={this.props.getCompanyResultsOnLoad} pathname={this.props.location.pathname}/>
        <div className="card-overall-container">
          {companies.map((info, index) => {
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
