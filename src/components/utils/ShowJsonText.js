import React from 'react';
import PropTypes from 'prop-types';

import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

class ShowJsonText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          ...props,
          text: JSON.stringify(props.value, null, 2)
        };
    }

    componentWillReceiveProps(nextProps) {
      this.setState({
        ...nextProps,
        text: JSON.stringify(nextProps.value, null, 2)
      });
    }

    onChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    }

    isValid(){
      const { errors, isValid } = validateInput(this.state);
      if(!isValid) {
        this.setState( { errors });
      }
      return isValid;
    }

    onSubmit = (e) => {
      e.preventDefault();

      // if (this.isValid()) {
      //   console.log(this.state);
      // }
    }

  onClick = (e) => {
    var copyElement = document.createElement('input');
    copyElement.setAttribute('type', 'text');
    copyElement.setAttribute('value', this.state.text);
    copyElement = document.body.appendChild(copyElement);
    copyElement.select();
    document.execCommand('copy');
    copyElement.remove();
  }

    render() {

        return (
            <form onSubmit={this.onSubmit} >
              <h2>Generated json object</h2>
              <p></p>

              <TextAreaFieldGroup
                label="Value"
                onChange={this.onChange}
                value={this.state.text}
                rows="10"
                cols="50"
                title=""
                field="value"
              />
              <div className="form-group">
                <button disabled={this.state.isLoading}
                  onClick={this.onClick} className="btn btn-primary btn-sm">
                  <span className="glyphicon glyphicon-copy" aria-hidden="true"></span> Copy JSON
                </button>
              </div>
            </form>

        );
    }
}

function validateInput(data) {
    let errors = {};

    if (Validator.isEmpty(data.value)) {
        errors.value = 'This field is required';
    }

    return {errors, isValid: isEmpty(errors)};
}

ShowJsonText.propTypes = {
  value: PropTypes.object,
};

export default ShowJsonText;
