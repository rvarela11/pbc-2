import React, { Component } from 'react';
import { connect } from 'react-redux';

class FilterButtonOptionTechstar extends Component {
  render() {
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
}

const mapStateToProps = (state) => {
    return {
        techstarsFilterOptions: state.techstarsFilterOptions,
        techstarsFilterButtonClickedStatus: state.techstarsFilterButtonClickedStatus
    };
};

export default connect(mapStateToProps, null)(FilterButtonOptionTechstar);
