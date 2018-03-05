import React, {Component} from 'react';
import {connect} from 'react-redux';
// import {selectDeploymentsFirst, selectDeploymentsNext, selectDeploymentsPrevious, selectDeploymentsLast, selectDeploymentsById} from '../../actions/payrollDeploymentActions';
import {toggle_showDeployment} from '../../actions/sessionActions';
import shortid from 'shortid';


class PaymentInstructionsPanel extends Component {
  constructor(props) {
    super(props);
    // console.log('DeploymentPanel', props.payrollReducer);
  }

  render() {
    var {showPaymentInstructions} = this.props.sessionReducer;
    var {processInstance, paymentArrayOffset, paymentPage} = this.props.payrollReducer;
    if (!processInstance) {
      console.log('No processInstance. Why was PaymentInstructionsPanel called to render?');
      return null;
    }
    var {paymentInstructions} = processInstance;
    if (paymentInstructions === undefined || paymentInstructions.length == 0) {
      console.log('No paymentInstructions. Why was PaymentInstructionsPanel called to render?');
      // return null;
    } else
      { var { validFrom, validTo, } = paymentInstructions[paymentArrayOffset];
    }

    return (

      <div className='panel-group'>
        <div className='panel panel-default'>
          <h4 className="panel-title">
            <a href="#payment-data"
              data-toggle='collapse'>Payment Instructions</a>
            <i className='caret'></i>
          </h4>
          <div id="payment-data" className={`panel-collapse ${showPaymentInstructions ? 'collapsed' : 'collapse'}`}>
            <div className='panel-body'>

              <div>

                <div className='row'>
                  <div className='col-md-12'>
                    {/* This should be a list of tables. */}
                    { paymentInstructions && displayValue('paymentInstructions', paymentInstructions)}

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
export default connect(mapState, mapDispatch)(PaymentInstructionsPanel);
