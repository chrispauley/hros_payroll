import React from 'react';
import PropTypes from 'prop-types';

// import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';
// var resolvedSchema = require('json-schema-loader!../../schema/common/json/person/PersonNameType.json');

//console.log(resolvedSchema);

import TextFieldGroup from '../common/TextFieldGroup';
// import validateInput from '../../../server/shared/validations/signup'

class PersonNameTypeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
      isLoading: false,
      errors: {}
    };
    console.log(this.state);
  }

  onChange = (e) => {
    this.props.handleOnChange(e);
  }

  onClickClearForm = (e) => {
    this.props.handleClearForm(e);
  }

  isValid = () => {
    // const {errors, isValid} = validateInput(this.state);
    // if (!isValid) {
    //   this.setState({errors});
    // }
    // return isValid;
  }

  onClickValidate = () => {
    // console.log('onClickValidate');
    const result = validateInput(this.props.data);
    this.setState({...result})
    // console.log('results: ', result);
  }


  onSubmit(e) {
    e.preventDefault();

    // if (this.isValid()) {
    //   this.setState({errors: {}, isLoading: true});
    //   this.setState({isLoading: false});
    // }
  }


  render() {
    let { isLoading} = this.state;
    let {language, formattedName, legal, given, preferred, middle, family,
    alias, formerFamily, preferredSalutationCode, generationAffixCode,
    qualificationAffixCode, titleAffixCode, initials} = this.props.data;

    return (
      <form onSubmit={this.onSubmit} className='form-horizontal'>
        <TextFieldGroup label="Formatted Name" onChange={this.onChange}
          value={formattedName} field="formattedName" error={this.state.errors.formattedName || ''}/>
        <TextFieldGroup label="Legal" onChange={this.onChange} value={legal} field="legal"/>
        <TextFieldGroup label="Given" onChange={this.onChange} value={given} field="given"/>
        <TextFieldGroup label="Preferred" onChange={this.onChange} value={preferred} field="preferred"/>
        <TextFieldGroup label="Middle" onChange={this.onChange} value={middle} field="middle"/>
        <TextFieldGroup label="Family" onChange={this.onChange} value={family} field="family"/>
        <TextFieldGroup label="Alias" onChange={this.onChange} value={alias} field="alias"/>
        <TextFieldGroup label="Former Family" onChange={this.onChange} value={formerFamily} field="formerFamily"/>
        <TextFieldGroup label="Preferred SalutationCode" onChange={this.onChange} value={preferredSalutationCode} field="preferredSalutationCode"/>
        <TextFieldGroup label="Generation Affix Code" onChange={this.onChange} value={generationAffixCode} field="generationAffixCode"/>
        <TextFieldGroup label="Qualification Affix Code" onChange={this.onChange} value={qualificationAffixCode} field="qualificationAffixCode"/>
        <TextFieldGroup label="Title Affix Code" onChange={this.onChange} value={titleAffixCode} field="titleAffixCode"/>
        <TextFieldGroup label="Initials" onChange={this.onChange} value={initials} field="initials"/>
        <TextFieldGroup label="language" onChange={this.onChange} value={language?language:''} field="language"/>


        <div className='btn-group'>
          <button disabled={isLoading} onClick={this.onClickClearForm}
            className="btn btn-primary btn-sm" style={{marginRight: "15px"}}>
            <span className="glyphicon glyphicon-trash" aria-hidden="true"></span> Clear Form
          </button>
          <button onClick={this.onClickValidate} className="btn btn-primary btn-sm">
            <span className="glyphicon glyphicon-check" aria-hidden="true"></span> Validate Now
          </button>
        </div>

      </form>

    );
  }

}

PersonNameTypeForm.propTypes = {
  formattedName: PropTypes.string,
  legal: PropTypes.string,
  given: PropTypes.string,
  preffered: PropTypes.string,
  middle: PropTypes.string,
  family: PropTypes.string,
  alias: PropTypes.string,
  formerFamily: PropTypes.string,
  preferredSalutationCode: PropTypes.string,
  generationAffixCode: PropTypes.string,
  qualificationAffixCode: PropTypes.string,
  titleAffixCode: PropTypes.string,
  initials: PropTypes.string,
  language: PropTypes.string
}

PersonNameTypeForm.defaultProps = {
  data:{
    formattedName: '',
    legal: '',
    given: '',
    preffered: '',
    middle: '',
    family: '',
    alias: '',
    formerFamily: '',
    preferredSalutationCode: '',
    generationAffixCode: '',
    qualificationAffixCode: '',
    titleAffixCode: '',
    initials: '',
    language: 'en'
  }
};

function validateInput(data) {
  // console.log('validateInput', data);
  const errors = {};

  if (!data.formattedName) {
    errors.formattedName = 'FormattedName is required.'
  }

  // if (Validator.isEmpty(data.formattedName)) {
  //   errors.formattedName = 'This field is required';
  // }
  // if (Validator.isEmpty(data.legal)) {
  //     errors.legal = 'This field is required';
  // }
  // if (!Validator.isEmpty(data.given)) {
  //     errors.given = 'Given is invalid';
  // }
  // if (Validator.isEmpty(data.password)) {
  //     errors.password = 'This field is required';
  // }
  // if (Validator.isEmpty(data.passwordConfirmation)) {
  //     errors.passwordConfirmation = 'This field is required';
  // }
  // if (!Validator.equals(data.password, data.passwordConfirmation)) {
  //     errors.passwordConfirmation = 'Passwords must match';
  // }
  // if (Validator.isEmpty(data.timezone)) {
  //     errors.timezone = 'This field is required';
  // }
  return {errors, isValid: isEmpty(errors)};
}

export default PersonNameTypeForm;
