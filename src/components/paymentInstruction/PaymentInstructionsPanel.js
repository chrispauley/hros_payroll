import React, {Component} from 'react';
import PaymentInstruction from './PaymentInstruction';

class PaymentInstructionsPanel extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    var {paymentInstructions} = this.props;
    var paymentInstructionJsx = null;
    { paymentInstructions && paymentInstructions.length > 0 ?
        (paymentInstructionJsx = paymentInstructions.map( (item, i) => {
          return ( <PaymentInstruction {...item} />)
        }))
      : null;
    }

    return (
      <div className='panel-group'>
        <div className='panel panel-default'>
          <h4 className="panel-title">
              <a href="#positions-list" data-toggle="collapse">PaymentInstructions</a>
              <i className='caret'></i>
          </h4>
          <div id="positions-list" className="panel-collapse collapse">
            <div className='panel-body'>
              {paymentInstructionJsx}
              <PaymentInstruction {...this.props} />
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
