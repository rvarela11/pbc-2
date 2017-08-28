import React, { Component } from 'react';
import { connect } from 'react-redux';
import { techstarsFilterButtonClicked, cohortFilterButtonClicked, statusFilterButtonClicked, branchFilterButtonClicked, pastFundingFilterButtonClicked, stageFilterButtonClicked } from '../actions/index';

import FilterButtonOptionTechstar from './FilterButtonOptionTechstar';
import FilterButtonOptionCohorts from './FilterButtonOptionCohorts';
import FilterButtonOptionStatuses from './FilterButtonOptionStatuses';
import FilterButtonOptionBranches from './FilterButtonOptionBranches';
import FilterButtonOptionPastFunding from './FilterButtonOptionPastFunding';
import FilterButtonOptionStage from './FilterButtonOptionStage';

class FilterButton extends Component {

  render() {

    let showRightOption;
    switch (this.props.filterName) {
      case 'TECHSTARS': showRightOption = <FilterButtonOptionTechstar checkboxOptionData={this.checkboxOptionData}/>;
        break;
      case 'COHORT': showRightOption = <FilterButtonOptionCohorts checkboxOptionData={this.checkboxOptionData}/>;
        break;
      case 'STATUS': showRightOption = <FilterButtonOptionStatuses checkboxOptionData={this.checkboxOptionData}/>;
        break;
      case 'BRANCH': showRightOption = <FilterButtonOptionBranches checkboxOptionData={this.checkboxOptionData}/>;
        break;
      case 'PAST FUNDING': showRightOption = <FilterButtonOptionPastFunding checkboxOptionData={this.checkboxOptionData}/>;
        break;
      case 'STAGE': showRightOption = <FilterButtonOptionStage checkboxOptionData={this.checkboxOptionData}/>;
        break;
      default:
    }

    return <div>
      <h6 className="waves-effect waves-light btn black white-text filter-button" onClick={this.buttonClicked}> {this.props.filterName} </h6>
      {showRightOption}
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
