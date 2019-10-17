import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export default function Button({
  type,
  name,
  className,
  value,
  label,
  placeholder,
  onchange,
  errorClass,
  errorMessage,
}) {
  return (
    <div className="button-div">
      <input
        type={type}
        name={name}
        className={className}
        value={value}
        aria-label={label}
        placeholder={placeholder}
        onChange={onchange}
      />
      <span className={errorClass}>{errorMessage}</span>
    </div>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onchange: PropTypes.func,
  errorClass: PropTypes.string,
  errorMessage: PropTypes.string,
};

Button.defaultProps = {
  className: '',
  onchange: null,
  errorClass: '',
  errorMessage: '',
};
