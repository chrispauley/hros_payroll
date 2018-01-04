import React, {Component} from 'react';
import {connect} from 'react-redux';
// import {selectDeploymentsFirst, selectDeploymentsNext, selectDeploymentsPrevious, selectDeploymentsLast, selectDeploymentsById} from '../../actions/payrollDeploymentActions';
// import {toggle_showDeployment} from '../../actions/sessionActions';
import shortid from 'shortid';


class GeneralDeductionsPanel extends Component {
  constructor(props) {
    super(props);
    // console.log('DeploymentPanel', props.payrollReducer);
  }

  render() {
    var {showGeneralIntructions} = this.props.sessionReducer;
    var {processInstance, generalDeductionArrayOffset} = this.props.payrollReducer;
    if (!processInstance) {
      console.log('No processInstance. Why was GeneralDeductionsPanel called to render?');
      return null;
    }
    var {generalDeductionInstructions} = processInstance;
    if (!generalDeductionInstructions) {
      console.log('No generalDeductionInstructions. Why was GeneralDeductionsPanel called to render?');
      return null;
    }

    // var { id, validFrom, validTo, } = benefitDeductionInstructions[generalDeductionArrayOffset];

    return (

      <div className='panel-group'>
        <div className='panel panel-default'>
          <h4 className="panel-title">
            <a href="#generalDeductions-data"
              data-toggle='collapse'>General Deduction Instructions</a>
            <i className='caret'></i>
          </h4>
          <div id="generalDeductions-data"
            className={`panel-collapse ${showGeneralIntructions ? 'collapsed' : 'collapse'}`}>
            <div className='panel-body'>

              <div>

                <div className='row'>
                  <div className='col-md-12'>
                    {/* This should be a list of tables. */}
                    { generalDeductionInstructions && displayValue('generalDeductionInstructions', generalDeductionInstructions)}

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
export default connect(mapState, mapDispatch)(GeneralDeductionsPanel);
