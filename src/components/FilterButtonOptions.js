import React, { Component } from 'react';
import { connect } from 'react-redux';

class FilterButtonOptions extends Component {

  checkboxAnswer = (e) => {
    this.props.checkboxOptionData(e.target.name, e.target.value,e.target.checked);
  }

  render() {
    return <div>
      {this.showRightOption()}
    </div>
  }

  showRightOption = () => {
    let cohortsFilterOptions;
    let statusesFilterOptions;
    let branchesFilterOptions;
    let fundingFilterOptions;
    let stagesFilterOptions;

    //Alumni filter options
    if(!this.props.filterButtonOptions.cohorts) {
      cohortsFilterOptions = [];
      statusesFilterOptions = [];
      branchesFilterOptions = [];
    } else {
      cohortsFilterOptions = this.props.filterButtonOptions.cohorts;
      statusesFilterOptions = this.props.filterButtonOptions.statuses;
      branchesFilterOptions = this.props.filterButtonOptions.branches;
    }
    //Company filter options
    if (!this.props.filterButtonOptions.funding) {
      fundingFilterOptions = [];
      stagesFilterOptions = [];
    } else {
      fundingFilterOptions = this.props.filterButtonOptions.funding;
      stagesFilterOptions = this.props.filterButtonOptions.stages;
    }

    

    const filterName = this.props.filterName;
    if (filterName === 'TECHSTARS') {
      return <div>
          {this.props.techstarsFilterButtonClickedStatus &&
            <div className="filter-column filter-label">
              {this.props.techstarsFilterOptions.map((info, index)=> {
                return <div key={index}>
                  <input id={"techstars"+ index} type="checkbox" name="techstars" value={info} onChange={this.checkboxAnswer}/>
                  <label htmlFor={"techstars"+ index}>{info}</label>
                </div>
              })}
            </div>
          }
      </div>
    }
    else if (filterName === 'COHORT') {
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
    else if (filterName === 'STATUS') {
      return <div>
        {this.props.statusFilterButtonClickedStatus &&
          <div className="filter-column filter-label" >
            {statusesFilterOptions.map((info, index)=> {
              return <div key={index}>
                <input id={"status"+ index} type="checkbox" name="status" value={info.id} onChange={this.checkboxAnswer}/>
                <label htmlFor={"status"+ index}>{info.status}</label>
              </div>
            })}
          </div>
        }
      </div>
    }
    else if (filterName === 'BRANCH') {
      return <div>
        {this.props.branchFilterButtonClickedStatus &&
          <div className="filter-column filter-label" >
            {branchesFilterOptions.map((info, index)=> {
              return <div key={index}>
                <input id={"branch"+ index} type="checkbox" name="branch" value={info.id} onChange={this.checkboxAnswer}/>
                <label htmlFor={"branch"+ index}>{info.branch}</label>
              </div>
            })}
          </div>
        }
      </div>
    }
    else if (filterName === 'PAST FUNDING') {
      return <div>
        {this.props.pastFundingFilterButtonClickedStatus &&
          <div className="filter-column filter-label">
            {fundingFilterOptions.map((info, index)=> {
              return <div key={index}>
                <input id={"pastFunding"+ index} type="checkbox" name="pastFunding" value={info.type} onChange={this.checkboxAnswer}/>
                <label htmlFor={"pastFunding"+ index}>{info.type}</label>
              </div>
            })}
          </div>
        }
      </div>
    }
    else if (filterName === 'STAGE') {
      return <div>
        {this.props.stageFilterButtonClickedStatus &&
          <div className="filter-column filter-label">
            {stagesFilterOptions.map((info, index)=> {
              return <div key={index}>
                <input id={"stage"+ index} type="checkbox" name="stage" value={info.stage} onChange={this.checkboxAnswer}/>
                <label htmlFor={"stage"+ index}>{info.stage}</label>
              </div>
            })}
          </div>
        }
      </div>
    }
  }

}

const mapStateToProps = (state) => {
    return {
      techstarsFilterOptions: state.techstarsFilterOptions,
      filterButtonOptions: state.filterButtonOptions,
      techstarsFilterButtonClickedStatus: state.techstarsFilterButtonClickedStatus,
      cohortFilterButtonClickedStatus: state.cohortFilterButtonClickedStatus,
      statusFilterButtonClickedStatus: state.statusFilterButtonClickedStatus,
      branchFilterButtonClickedStatus: state.branchFilterButtonClickedStatus,
      pastFundingFilterButtonClickedStatus: state.pastFundingFilterButtonClickedStatus,
      stageFilterButtonClickedStatus: state.stageFilterButtonClickedStatus,
    };
};

export default connect(mapStateToProps, null)(FilterButtonOptions);
