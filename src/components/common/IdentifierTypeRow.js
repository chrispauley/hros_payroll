import React, { Component } from 'react';
import PropTypes from 'prop-types';

class IdentifierTypeRow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var { description, value, schemeId, schemeVersionId, schemeLink, schemeAgencyId, agencyUri } = this.props;
    var descJsx, valueJsx, schemeIdJsx, schemeVersionIdJsx, schemeLinkJsx, schemeAgencyIdJsx, agencyUriJsx = null;
    schemeIdJsx = schemeId ? ( <td>{schemeId}</td> ) : null;
    valueJsx = value ? ( <td>{value}</td> ) : null;
    descJsx = description ? ( <td>{description}</td> ) : null;

    return (
      <table>
        <thead>
          <tr>
            {schemeId ? (<th className='col-xs-1'>schemeId</th>) : null}
            {value ? (<th className='col-xs-1'>value</th>) : null }
            {description ? (<th className='col-xs-1'>Description</th>) : null }
          </tr>
        </thead>
        <tbody>
          <tr>
            {schemeId ? (<td>{schemeId}</td>) : null}
            {value ? (<td>{value}</td>) : null}
            {description ? (<td>{description}</td>) : null}
          </tr>
        </tbody>
      </table>
    );
  }
}

// IdentifierTypeRow.propTypes = {
//   description: PropTypes.string,
//   value: PropTypes.string,
//   schemeId: PropTypes.string,
//   schemeVersionId: PropTypes.string,
//   schemeLink: PropTypes.string,
//   schemeAgencyId: PropTypes.string,
//   agencyUri: PropTypes.string,
// }
export default IdentifierTypeRow;
