import { Component } from "react";

class Filter extends Component {
  render() {
    return (
      <>
        <label>
          Find contact by name
          <br />
          <input value={this.props.filter} type="text" name="filter" onChange={this.props.onChange} />
        </label>
      </>
    );
  }
}

export default Filter;
