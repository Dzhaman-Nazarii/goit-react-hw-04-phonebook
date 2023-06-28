import { Component } from 'react'
import PropTypes from 'prop-types';

export default class Filter extends Component {

  handleSearch = ({target}) => {
    this.props.onChange(target.value)
  }

  render() {
    return (
      <label>
        Find contact by name
      <input name='search' placeholder='Search...' onChange={this.handleSearch}></input>
    </label>
    )
  }
}

Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
}