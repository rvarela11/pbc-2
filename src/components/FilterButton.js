import React, { Component } from 'react';
import { connect } from 'react-redux';
import { techstarsFilterButtonClicked, cohortFilterButtonClicked, statusFilterButtonClicked, branchFilterButtonClicked, pastFundingFilterButtonClicked, stageFilterButtonClicked } from '../actions/index';

import FilterButtonOptions from './FilterButtonOptions';

class FilterButton extends Component {

  render() {
    return <div>
      <h6 className="waves-effect waves-light btn black white-text filter-button" onClick={this.buttonClicked}> {this.props.filterName} </h6>
      <FilterButtonOptions filterName={this.props.filterName} checkboxOptionData={this.checkboxOptionData}/>
    </div>
  }

  buttonClicked = () => {
    switch (this.props.filterName) {
      case 'TECHSTARS': this.props.techstarsFilterButtonClicked(!this.props.techstarsFilterButtonClickedStatus);
        break;
      case 'COHORT': this.props.cohortFilterButtonClicked(!this.props.cohortFilterButtonClickedStatus);
        break;
      case 'STATUS': this.props.statusFilterButtonClicked(!this.props.statusFilterButtonClickedStatus);
        break;
      case 'BRANCH': this.props.branchFilterButtonClicked(!this.props.branchFilterButtonClickedStatus);
        break;
      case 'PAST FUNDING': this.props.pastFundingFilterButtonClicked(!this.props.pastFundingFilterButtonClickedStatus);
        break;
      case 'STAGE': this.props.stageFilterButtonClicked(!this.props.stageFilterButtonClickedStatus);
        break;
      default:
    }
  }

  checkboxOptionData = (checkboxName, checkboxValue, checkboxChecked) => {
    this.props.checkboxOptionDataToFilterContainer(checkboxName, checkboxValue, checkboxChecked);
  }

}

const mapDispatchToProps = (dispatch) => {
    return {
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
        techstarsFilterButtonClickedStatus: state.techstarsFilterButtonClickedStatus,
        cohortFilterButtonClickedStatus: state.cohortFilterButtonClickedStatus,
        statusFilterButtonClickedStatus: state.statusFilterButtonClickedStatus,
        branchFilterButtonClickedStatus: state.branchFilterButtonClickedStatus,
        pastFundingFilterButtonClickedStatus: state.pastFundingFilterButtonClickedStatus,
        stageFilterButtonClickedStatus: state.stageFilterButtonClickedStatus,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterButton);
