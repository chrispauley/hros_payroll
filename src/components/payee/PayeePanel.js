import React, {Component} from 'react';
import shortid from 'shortid';

import PersonLegalTable from './personLegal/PersonLegalTable';


class PayeePanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCollapsed: false
    }
    console.log('PayeePanel', props);
  }

  render() {
    var {payee} = this.props;
    var {personName, personLegal } = payee;
    var personNamesJsx = null;
console.log('personLegal', payee);
    if ( personName && personName.length > 0) {
      personNamesJsx = personName.map( (item, i) => {
        var fname = item.formattedName;
        return (<span key={shortid.generate()}> {fname} </span>)
      });
    }

    return (
      <div>
        <div className='row well'>
          <div className='col-md-4'>
            {/* This should be a list of tables. */}
            <h4>Person Names: {personNamesJsx}</h4>
          </div>
        </div>

        { personLegal ?
        ( <div className='row'>
            <PersonLegalTable {...personLegal} />
          </div>)
        : '' }

      </div>
    );
  }

}
export default PayeePanel;
