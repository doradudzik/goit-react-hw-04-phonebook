import css from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ filter, handleChange }) => {
  return (
    <form className={css.form}>
      <label>Find contacts by name:</label>
      <input
        className={css.input}
        type="text"
        value={filter}
        name="filter"
        onChange={handleChange}
      />
    </form>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Filter;
