import React, {Component} from 'react';

class Identifier extends Component {
  constructor(props) {
    super(props);
  }
  // NEED TO HANDLE OTHER IdentifierType properties!!!
render() {
  let itemText = "";
  if (this.props.schemeId != null){
    itemText = (<span><strong>{this.props.schemeId}: </strong> {this.props.value}</span>);
  } else {
    itemText = ( <span>{this.props.value}</span>);
  }

  return (
    <dl className='identifier'>
        {/* { this.props.value ? (<li> {this.props.value} </li> ) : null }
        { this.props.schemeId ? (<li> {this.props.schemeId} </li> ) : null } */}
        <li>{itemText} </li>
    </dl>
    )
  }
}
export default Identifier;
