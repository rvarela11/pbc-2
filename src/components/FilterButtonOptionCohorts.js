import React, { Component } from 'react';
import { connect } from 'react-redux';

class FilterButtonOptionCohorts extends Component {
  render() {

    let cohortsFilterOptions;
    if(!this.props.results.cohorts) {
      cohortsFilterOptions = [];
    } else {
      cohortsFilterOptions = this.props.results.cohorts;
    }

    return <div>
      {this.props.cohortFilterButtonClickedStatus &&
        <div className="filter-column filter-label" >
          {cohortsFilterOptions.map((info, index)=> {
            return <div key={index}>
              <input id={"cohort"+ index} type="checkbox" name="cohort" value={info.id} onChange={this.checkboxAnswer}/>
              <label htmlFor={"cohort"+ index}>{info.year + " - " + info.location}</label>
            </div>
          })}
        </div>
      }
    </div>
  }
}

const mapStateToProps = (state) => {
    return {
      results: state.results,
      cohortFilterButtonClickedStatus: state.cohortFilterButtonClickedStatus
    };
};

export default connect(mapStateToProps, null)(FilterButtonOptionCohorts);
