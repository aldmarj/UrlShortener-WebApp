import React from 'react';
import PropTypes from 'prop-types';

import {
  FormGroup,
  FormControl,
  ControlLabel,
  HelpBlock
} from 'react-bootstrap';
const ValidatingFormInput = props => {
  console.log(props);
  return (
    <FormGroup validationState={props.errors ? 'error' : null}>
      <ControlLabel>{props.label}</ControlLabel>
      <FormControl
        name={props.name}
        type="text"
        placeholder={props.placeholder}
        onChange={e => props.onChange(e)}
        disabled={props.disabled}
      />
      {props.errors ? <HelpBlock>{props.errors}</HelpBlock> : null}
    </FormGroup>
  );
};

ValidatingFormInput.propTypes = {
  errors: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

export default ValidatingFormInput;
