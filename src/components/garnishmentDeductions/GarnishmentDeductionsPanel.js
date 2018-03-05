import React, {Component} from 'react';
import {connect} from 'react-redux';

class GarnishmentDeductionsPanel extends Component {
  constructor(props) {
    super(props);
    // console.log('DeploymentPanel', props.payrollReducer);
  }

  render() {
    var {showGarnishments} = this.props.sessionReducer;
    var {processInstance, garnishmentArrayOffset} = this.props.payrollReducer;
    if (!processInstance) {
      console.log('No processInstance. Why was GarnishmentDeductionsPanel called to render?');
      return null;
    }
    var {garnishmentInstructions} = processInstance;
    if (!garnishmentInstructions) {
      console.log('No garnishmentInstructions. Why was GarnishmentDeductionsPanel called to render?');
      return null;
    }

    // var { id, validFrom, validTo, } = garnishmentDeductionInstructions[garnishmentArrayOffset];

    return (

      <div className='panel-group'>
        <div className='panel panel-default'>
          <h4 className="panel-title">
            <a href="#garnishmentDeductions-data"
              data-toggle='collapse'>Garnishment Deduction Instructions</a>
            <i className='caret'></i>
          </h4>
          <div id="garnishmentDeductions-data"
            className={`panel-collapse ${showGarnishments ? 'collapsed' : 'collapse'}`}>
            <div className='panel-body'>

              <div>

                <div className='row'>
                  <div className='col-md-12'>
                    {/* This should be a list of tables. */}
                    { garnishmentInstructions && displayValue('garnishmentInstructions', garnishmentInstructions)}

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

    };
}
export default connect(mapState, mapDispatch)(GarnishmentDeductionsPanel);
