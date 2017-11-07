import React, {Component} from 'react';

class DataProtectionPolicy extends Component {
  constructor(props) {
    super(props);
    // console.log('DataProtectionPolicy', props);
  }

  render() {
    var { geoRestrictions } = this.props;
    var grJsx = null;
    if ( geoRestrictions && geoRestrictions.length >0 ){
      grJsx = geoRestrictions.map( (item, i) => {
        return (
          <li key={i}><b>Country:</b> {item.country} <b>Policy:</b> {item.policy}</li>
        );
      });
    }
    return (
      <table className='table'>
        <thead>
          <tr>
            <td>Retention Date</td>
            <td>Retention Days</td>
            <td>geoRestrictions</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{ this.props.retentionDate ? (<p> {this.props.retentionDate} </p> ) : null }</td>
            <td>{ this.props.retentionDays ? (<p><b>retentionDays:</b> {this.props.retentionDays} </p> ) : null }</td>
            <td>{ this.props.geoRestrictions ? (<ul> {grJsx} </ul> ) : null }</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
export default DataProtectionPolicy;
