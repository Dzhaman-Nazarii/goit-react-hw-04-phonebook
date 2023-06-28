import PropTypes from 'prop-types';

export default function Filter() {

  const handleSearch = ({target}) => {
    this.props.onChange(target.value)
  }

    return (
      <label>
        Find contact by name
      <input name='search' placeholder='Search...' onChange={handleSearch}></input>
    </label>
    )
}

Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
}