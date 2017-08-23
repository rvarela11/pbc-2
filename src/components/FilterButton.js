import React, { Component } from 'react';
import { connect } from 'react-redux';
import { techstarsFilterButtonClicked, cohortFilterButtonClicked, statusFilterButtonClicked, branchFilterButtonClicked } from '../actions/index';

import FilterButtonOptionTechstar from './FilterButtonOptionTechstar';
import FilterButtonOptionCohorts from './FilterButtonOptionCohorts';
import FilterButtonOptionStatuses from './FilterButtonOptionStatuses';
import FilterButtonOptionBranches from './FilterButtonOptionBranches';

class FilterButton extends Component {

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
      default:
    }
  }

  render() {
    let showRightOption;

    switch (this.props.filterName) {
      case 'TECHSTARS':
      showRightOption = <FilterButtonOptionTechstar/>
        break;
      case 'COHORT': showRightOption = <FilterButtonOptionCohorts/>;
        break;
      case 'STATUS': showRightOption = <FilterButtonOptionStatuses />;
        break;
      case 'BRANCH': showRightOption = <FilterButtonOptionBranches />;
        break;
      default:
    }

    return <div>
      <h6 className="waves-effect waves-light btn black white-text filter-button" onClick={this.buttonClicked}> {this.props.filterName} </h6>
      {showRightOption}
    </div>
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        techstarsFilterButtonClicked: (status) => dispatch(techstarsFilterButtonClicked(status)),
        cohortFilterButtonClicked: (status) => dispatch(cohortFilterButtonClicked(status)),
        statusFilterButtonClicked: (status) => dispatch(statusFilterButtonClicked(status)),
        branchFilterButtonClicked: (status) => dispatch(branchFilterButtonClicked(status)),
    };
};

const mapStateToProps = (state) => {
    return {
        techstarsFilterButtonClickedStatus: state.techstarsFilterButtonClickedStatus,
        cohortFilterButtonClickedStatus: state.cohortFilterButtonClickedStatus,
        statusFilterButtonClickedStatus: state.statusFilterButtonClickedStatus,
        branchFilterButtonClickedStatus: state.branchFilterButtonClickedStatus,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterButton);
