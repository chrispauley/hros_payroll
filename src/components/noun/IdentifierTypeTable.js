import React, {Component} from 'react';

class IdentifierTypeTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props
    }
  }
  render() {
    var {schemeId, value, schemeVersionId, schemeAgencyId, description, schemeLink, agencyUri } = this.props;

    return (
      <div className='identifierTypeTable'>
        <table className='table'>
          <thead>
            <tr>
              {schemeId ? (<th>SchemeId</th>) : ''}
              {value ? (<th>Value</th>) : ''}
              {schemeLink ? (<th>SchemeLink</th>) : ''}
              {schemeAgencyId ? (<th>SchemeAgencyId</th>) : ''}
              {agencyUri ? (<th>agencyUri</th>) : ''}
              {schemeVersionId ? (<th>schemeVersionId</th>) : ''}
              {description ? (<th>Description</th>) : ''}
            </tr>
          </thead>
          <tbody>
            <tr>
              {schemeId ? (<td>{schemeId}</td>) : ''}
              {value ? (<td>{value}</td>) : ''}
              {schemeLink ? (<td>{schemeLink}</td>) : ''}
              {schemeAgencyId ? (<td>{schemeAgencyId}</td>) : ''}
              {agencyUri ? (<td>{agencyUri}</td>) : ''}
              {schemeVersionId ? (<td>{schemeVersionId}</td>) : ''}
              {description ? (<td>{description}</td>) : ''}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default IdentifierTypeTable;
