import React from 'react';

import PersonNameTypeForm from './PersonNameTypeForm';
import DropLoader from '../../utils/DropLoader';
import ShowJsonText from '../../utils/ShowJsonText';

class PersonNameTypePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
      data: {},
      isLoading: false,
      errors: {}
    }
  }

  handleOnChange = (e) => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value
      }
    });
  }

  handleClearForm = () => {
    var data = {
        language: 'en-US',
        formattedName: '',
        legal: '',
        given: '',
        preferred: '',
        middle: '',
        family: '',
        alias: '',
        formerFamily: '',
        preferredSalutationCode: '',
        generationAffixCode: '',
        qualificationAffixCode: '',
        titleAffixCode: '',
        initials: ''
      };
    this.setState({data: data});
  }

  handleDropFileInput = (data) => {
    this.setState({data: data});
  }

  render() {

    return (
      <div>
        <div className='row'>
          <h2 className='text-center'>PersonNameType</h2>
          <h4 className='text-center'>SubTitle</h4>
        </div>

        <div className="row">
          <div className="col-md-6 well" style={{marginRight: "5px"}}>
            <PersonNameTypeForm
              handleOnChange={this.handleOnChange}
              handleClearForm={this.handleClearForm}
              {...this.state}/>
          </div>
          <div className="col-md-3 well">
            <ShowJsonText value={this.state.data}/>
          </div>
          <DropLoader onChange={this.handleDropFileInput}/>
        </div>
      </div>
    );
  }
}

export default PersonNameTypePage;
