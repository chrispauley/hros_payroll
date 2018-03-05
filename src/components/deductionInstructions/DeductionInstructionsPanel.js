import React, {Component} from 'react';
import {connect} from 'react-redux';
// import {selectDeploymentsFirst, selectDeploymentsNext, selectDeploymentsPrevious, selectDeploymentsLast, selectDeploymentsById} from '../../actions/payrollDeploymentActions';
import {toggle_showDeductionInstructions} from '../../actions/sessionActions';
import shortid from 'shortid';

class DeductionInstructionsPanel extends Component {
  constructor(props) {
    super(props);
    // console.log('DeploymentPanel', props.payrollReducer);
  }

  render() {
    var {
      showDeductionInstructions
    } = this.props.sessionReducer;
    var {
      processInstance,
      deductionInstructionsArrayOffset
    } = this.props.payrollReducer;
    if (!processInstance) {
      console.log('No processInstance. Why was DeductionInstructionsPanel called to render?');
      return null;
    }
    var {
      deductionInstructions
    } = processInstance;
    if (deductionInstructions === undefined || deductionInstructions.length == 0) {
      console.log('No deductionInstructions. Why was DeductionInstructionsPanel called to render?');
      // return null;
    } else {
      var { id, effectiveDate } = deductionInstructions[deductionInstructionsArrayOffset];
    }

    return (<div className='panel-group'>
      <div className='panel panel-default'>
        <h4 className="panel-title">
          <a href="#deductionInstructions-data" data-toggle='collapse'>Deduction Instructions</a>
          <i className='caret'></i>
        </h4>
        <div id="deductionInstructions-data" className={`panel-collapse ${showDeductionInstructions
            ? 'collapsed'
            : 'collapse'}`}>
          <div className='panel-body'>

            <div>

              <div className='row'>
                <div className='col-md-12'>
                  {/* This should be a list of tables. */}
                  {deductionInstructions && displayValue('deductionInstructions', deductionInstructions)}

                </div>
              </div>

            </div>

          </div>
          <div className="panel-footer"></div>

        </div>
      </div>
    </div>);
  }

}
function displayValue(key, val) {
  return (<div className='row'>
    <div className='col-sm-2'>{key}</div>
    <div className='col-sm-10'>
      <pre><code>{JSON.stringify(val, null, 2)}</code></pre>
    </div>
  </div>)
}

function mapState(state) {
  return state;
}
function mapDispatch(dispatch) {
  return {};
}
export default connect(mapState, mapDispatch)(DeductionInstructionsPanel);
