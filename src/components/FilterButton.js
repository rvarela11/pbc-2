import React, { Component } from 'react';
import FilterButtonOptions from './FilterButtonOptions';

class FilterButton extends Component {

  state = {
    show: false
  }

  render() {
    return <div>
      <h6 className="waves-effect waves-light btn black white-text filter-button" onClick={this.buttonClicked}> {this.props.filterName} </h6>
      <FilterButtonOptions show={this.state.show} filterName={this.props.filterName} checkboxOptionData={this.checkboxOptionData}/>
    </div>
  }

  buttonClicked = () => {
    this.setState({show: !this.state.show});
  }

  checkboxOptionData = (checkboxName, checkboxValue, checkboxChecked) => {
    this.props.checkboxOptionDataToFilterContainer(checkboxName, checkboxValue, checkboxChecked);
  }

}

export default FilterButton;
