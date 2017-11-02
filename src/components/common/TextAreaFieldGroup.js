import React from 'react';
import PropTypes from 'prop-types';
// import classnames from 'classnames';

const TextAreaFieldGroup = ({field, value, label, placeholder, title, error, type,
    onChange, rows, cols, wrap }) => {
  return (
    // <div className={classnames('form-group', {'has-error': error})}>
    <div className='form-group'>
      <label className="control-label">{label}</label>
      <textarea
        onChange={onChange}
        value={value}
        type={type}
        name={field}
        placeholder={placeholder}
        title={title}
        className="form-control"
        rows={rows}
        cols={cols}
        wrap={wrap}
      />
       {error && <span className='help-block'>{error}</span>}
    </div>
  );
};

TextAreaFieldGroup.propTypes = {
  field: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  title: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  rows: PropTypes.string,
  cols: PropTypes.string,
  maxlength: PropTypes.string,
  wrap: PropTypes.string
};

TextAreaFieldGroup.defaultProps = {
  type: 'textarea',
  value: ''
};

export default TextAreaFieldGroup;
