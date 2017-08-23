import React, { Component } from 'react';
import { connect } from 'react-redux';

class FilterButtonOptionBranches extends Component {
  render() {

    let branchesFilterOptions;
    if(!this.props.results.branches) {
      branchesFilterOptions = [];
    } else {
      branchesFilterOptions = this.props.results.branches;
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
      results: state.results,
      branchFilterButtonClickedStatus: state.branchFilterButtonClickedStatus
    };
};

export default connect(mapStateToProps, null)(FilterButtonOptionBranches);
