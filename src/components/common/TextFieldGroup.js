import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextFieldGroup = ({field, value, label, placeholder, title, maxLength, error, type, onChange }) => {
  return (
    <div className={classnames('form-group', {'has-error': error})}>
      <label htmlFor={field} className="control-label col-xs-3">{label}</label>
      <div className='col-xs-9'>
      <input
        style={{"width" : "100%"}}
        className="form-control"
        name={field}
        onChange={onChange}
        value={value}
        type={type}
        placeholder={placeholder}
        title={title}
        maxLength={maxLength}
        width={maxLength}
      />
       {error && <span className='help-block'>{error}</span>}
       </div>
    </div>
  );
};

TextFieldGroup.propTypes = {
  field: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  title: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

TextFieldGroup.defaultProps = {
  type: 'text',
  value: ''
};

export default TextFieldGroup;
