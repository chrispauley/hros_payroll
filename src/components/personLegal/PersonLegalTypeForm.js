import React from 'react';
import PropTypes from 'prop-types';

// import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';
// var resolvedSchema = require('json-schema-loader!../../schema/common/json/person/PersonNameType.json');

//console.log(resolvedSchema);

import TextFieldGroup from '../common/TextFieldGroup';
// import validateInput from '../../../server/shared/validations/signup'

class PersonLegalTypeForm
 extends React.Component {
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

PersonLegalTypeForm.propTypes = {
  formattedName: PropTypes.string,

}

PersonLegalTypeForm.defaultProps = {
  data:{
    passportId: {value: ''},
    fatherName: [''],
    motherName: '',
    race: [''],
    birthPlace: '',
    deathDate: '',
    nationality: [''],
    maritalStatus: '',
    visa: [""],
    religion: [""],
    studentType: '',
    studentIndicator: false,
    studentStatus: "",

    legalId: {value: ''},
    birthDate: '',
    gender: '',
    citizenship: [''],
    residenceCountry: [''],
    militaryStatus: '',
    ethnicity: [''],

    id: { value: ''},
    name: {  },
    communication: { },
    primaryLanguage: ''
    }
  }
};

function validateInput(data) {
  // console.log('validateInput', data);
  const errors = {};

  if (!data.formattedName) {
    errors.formattedName = 'FormattedName is required.'
  }

  return {errors, isValid: isEmpty(errors)};
}

export default PersonLegalTypeForm
;
