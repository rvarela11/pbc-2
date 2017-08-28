import React, { Component } from 'react';
import { connect } from 'react-redux';

class FilterButtonOptionPastFunding extends Component {

  checkboxAnswer = (e) => {
    this.props.checkboxOptionData(e.target.name, e.target.value,e.target.checked);
  }

  render() {

    let fundingFilterOptions;
    if(!this.props.filterButtonOptions.funding) {
      fundingFilterOptions = [];
    } else {
      fundingFilterOptions = this.props.filterButtonOptions.funding;
    }


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
}

const mapStateToProps = (state) => {
    return {
        filterButtonOptions: state.filterButtonOptions,
        pastFundingFilterButtonClickedStatus: state.pastFundingFilterButtonClickedStatus
    };
};

export default connect(mapStateToProps, null)(FilterButtonOptionPastFunding);
