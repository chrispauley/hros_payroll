import React, {Component} from 'react';
import {connect} from 'react-redux';
import {toggle_showTax} from '../../actions/sessionActions';


class TaxInstructionsPanel extends Component {
  constructor(props) {
    super(props);
    // console.log('TaxInstructionsPanel', props.payrollReducer);
  }

  render() {
    var showTax = this.props.sessionReducer;
    var {processInstance, taxArrayOffset, taxPage} = this.props.payrollReducer;
    if (!processInstance) {
      console.log('No processInstance. Why was TaxInstructionsPanel called to render?');
      return null;
    }
    var {taxInstructions} = processInstance;
    if (!taxInstructions) {
      console.log('No taxInstructions. Why was TaxInstructionsPanel called to render?');
      return null;
    }

    var {
      validFrom,
      validTo,
      USTaxInstruction
    } = taxInstructions;
    // This currently an object -- not an array!

    return (

      <div className='panel-group'>
        <div className='panel panel-default'>
          <h4 className="panel-title">
            <a href="#tax-data"
              data-toggle='collapse'>Tax Instructions</a>
            <i className='caret'></i>
          </h4>
          <div id="tax-data" className={`panel-collapse ${showTax ? 'collapsed' : 'collapse'}`}>
            <div className='panel-body'>

              <div>
                <div className='row'>
                  <div className='col-md-12'>
                    {/* This should be a list of tables. */}
                    { validFrom && displayValue('validFrom', validFrom)}
                    { validTo && displayValue('validTo', validTo)}
                    { USTaxInstruction && displayValue('USTaxInstruction', USTaxInstruction)}
                  </div>
                </div>

              </div>

            </div>
            <div className="panel-footer"></div>

          </div>
        </div>
      </div>
    );
  }

}
function displayValue(key, val) {
  return (
    <div className='row'>
      <div className='col-sm-2'>{key}</div>
      <div className='col-sm-10'><pre><code>{JSON.stringify(val, null, 2)}</code></pre></div>
    </div>
  )
}

function mapState(state) {
    return state;
}
function mapDispatch(dispatch) {
    return {
      toggle_showTax: () => dispatch(toggle_showTax())
    };
}
export default connect(mapState, mapDispatch)(TaxInstructionsPanel);
