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

      <div className='panel-group'>
        <div className='panel panel-default'>
          <h4 className="panel-title">
              <a href="#payee-data" data-toggle="collapse">Payee</a>
              <i className='caret'></i>
          </h4>
          <div id="payee-data" className="panel-collapse collapse">
            <div className='panel-body'>

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


            </div>
            <div className="panel-footer">
            </div>

          </div>
        </div>
      </div>
    );
  }

}
export default PayeePanel;
