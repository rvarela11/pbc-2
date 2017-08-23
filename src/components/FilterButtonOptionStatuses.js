import React, { Component } from 'react';
import { connect } from 'react-redux';

class FilterButtonOptionStatuses extends Component {
  render() {

    let statusesFilterOptions;
    if(!this.props.results.statuses) {
      statusesFilterOptions = [];
    } else {
      statusesFilterOptions = this.props.results.statuses;
    }

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
}

const mapStateToProps = (state) => {
    return {
      results: state.results,
      statusFilterButtonClickedStatus: state.statusFilterButtonClickedStatus
    };
};

export default connect(mapStateToProps, null)(FilterButtonOptionStatuses);
