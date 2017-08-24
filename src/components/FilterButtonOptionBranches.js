import React, { Component } from 'react';
import { connect } from 'react-redux';

class FilterButtonOptionBranches extends Component {

  checkboxAnswer = (e) => {
    this.props.checkboxOptionData(e.target.name, e.target.value,e.target.checked);
  }

  render() {

    let branchesFilterOptions;
    if(!this.props.filterButtonOptions.branches) {
      branchesFilterOptions = [];
    } else {
      branchesFilterOptions = this.props.filterButtonOptions.branches;
    }

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
}

const mapStateToProps = (state) => {
    return {
      filterButtonOptions: state.filterButtonOptions,
      branchFilterButtonClickedStatus: state.branchFilterButtonClickedStatus
    };
};

export default connect(mapStateToProps, null)(FilterButtonOptionBranches);
