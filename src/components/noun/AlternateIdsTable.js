import React, {Component} from 'react';
import style from './AlternateIdsTable.css';


class AlternateIds extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      let identifierRows = this.props.alternateIds.map((item, index) => {
        var {schemeId, value, schemeVersionId, schemeAgencyId, description, schemeLink, agencyUri } = item;
        let listItem =
          <tr key={index}>
              <td>{schemeId}</td>
              <td>{value}</td>
              <td>{schemeLink}</td>
              <td>{schemeAgencyId}</td>
              <td>{agencyUri}</td>
              <td>{description}</td>
          </tr>;
        return listItem;
      });
      return (
        <div className='identifierTypeTable'>
          <table className='table'>
            <thead>
              <tr>
                <td>SchemeId</td>
                <td>Value</td>
                <td>SchemeLink</td>
                <td>SchemeAgencyId</td>
                <td>SchemeUri</td>
                <td>Description</td>
              </tr>
            </thead>
            <tbody>
              {identifierRows}
            </tbody>
          </table>
        </div>
      )
    }
}

export default AlternateIds;
