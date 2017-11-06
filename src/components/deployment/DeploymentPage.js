import React from 'react';
import PropTypes from 'prop-types';

import DeploymentForm from './DeploymentForm';
import DropLoader from '../../utils/DropLoader';
// import ComponentPageHeader from '../../common/ComponentPageHeader';
import ShowJsonText from '../../common/ShowJsonText';
// import SchemaViewer from '../../common/SchemaViewer.js';

// const resolvedSchema = require('json-schema-loader!../../../schema/common/json/base/DateType.json');
const pageInfo = {
  heading: "DeploymentType",
  description: "DeploymentType data",
  hostedSchema: 'http://hropen.us-west-2.elasticbeanstalk.com/schema-dev/json/common/profile/DeploymentType#'
}


class DeploymentPage extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        ...props,
        data: { value: ""}
      }
  }
  handleOnChange = (e) => {
    this.setState({
      data: {...this.state.data, [e.target.name]: e.target.value}
    });
  }

  handleClearForm = () => {
    var data = { value: "" };
    this.setState({ data: data });
  }

  handleDropFileInput = (data) => {
    this.setState({ data: data });
  }


  render() {
    return (
      <div>
        <ComponentPageHeader {...pageInfo} />

        <div className="row">
          <div className="col-md-6 col-lg-6 well bg-success">
            <DateTypeForm
              handleOnChange={this.handleOnChange}
              handleClearForm={this.handleClearForm}
              {...this.state} />
          </div>
          <div className="col-md-3 well">
            <ShowJsonText value={this.state.data} />
          </div>
          <DropLoader onChange={this.handleDropFileInput}/>
          {/* <SchemaViewer value={resolvedSchema} /> */}
        </div>
      </div>
    );
  }
}
DateTypePage.propTypes = {
  value: PropTypes.string
};

export default DeploymentPage;
