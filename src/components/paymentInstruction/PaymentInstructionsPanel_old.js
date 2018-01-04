import React, {Component} from 'react';
import PaymentInstruction from './PaymentInstruction';
import shortid from 'shortid';

class PaymentInstructionsPanel extends Component {
  constructor(props) {
    super(props);
    // console.log('PaymentInstructionsPanel', props);
  }

  render() {

    var {paymentInstructions} = this.props;
    var paymentInstructionJsx = null;
    { paymentInstructions && paymentInstructions.length > 0 ?
        (paymentInstructionJsx = paymentInstructions.map( (item, i) => {
          return ( <PaymentInstruction key={shortid.generate()} {...item} />)
        }))
      : null;
    }

    return (
      <div className='panel-group'>
        <div className='panel panel-default'>
          <h4 className="panel-title">
              <a href="#payintructions-list" data-toggle="collapse">PaymentInstructions</a>
              <i className='caret'></i>
          </h4>
          <div id="payintructions-list" className="panel-collapse collapse">
            <div className='panel-body'>
              {paymentInstructionJsx}
            </div>
            <div className="panel-footer">
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default PaymentInstructionsPanel;
