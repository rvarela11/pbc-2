import React, { Component } from 'react';
import { connect } from 'react-redux';

class FilterButtonOptionStage extends Component {

  checkboxAnswer = (e) => {
    this.props.checkboxOptionData(e.target.name, e.target.value,e.target.checked);
  }

  render() {

    let stagesFilterOptions;
    if(!this.props.filterButtonOptions.stages) {
      stagesFilterOptions = [];
    } else {
      stagesFilterOptions = this.props.filterButtonOptions.stages;
    }

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

const mapStateToProps = (state) => {
    return {
        filterButtonOptions: state.filterButtonOptions,
        stageFilterButtonClickedStatus: state.stageFilterButtonClickedStatus
    };
};

export default connect(mapStateToProps, null)(FilterButtonOptionStage);
