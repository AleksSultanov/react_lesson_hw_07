import PropTypes from 'prop-types';
import cn from 'classnames';
import classes from './styles.module.css';

export function Field({ label, fullWidth, value, onChange, type = 'text', col_1, col_2, error, disabled }) {
  return (
    <div
      className={cn(classes.field, {
        [classes.fullWidth]: fullWidth,
        [classes.col_1]: col_1,
        [classes.col_2]: col_2,
        [classes.error]: error,
      })}
    >
      <label  className={cn(classes.label, {
                          [classes.error]: error,
                        })} >
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        className={classes.input}
        type={type}
        disabled={disabled}
      />
    </div>
  );
}

Field.propTypes = {
  label: PropTypes.string,
  fullWidth: PropTypes.bool,
  value: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  col_1: PropTypes.bool,
  col_2: PropTypes.bool,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
};