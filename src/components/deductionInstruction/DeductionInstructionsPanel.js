import React, {Component} from 'react';
import DeductionInstruction from './DeductionInstruction';
import shortid from 'shortid';

class DeductionInstructionsPanel extends Component {
  constructor(props) {
    super(props);
    // console.log('DeductionInstructionsPanel', props);
  }

  render() {

    var {deductionInstructions} = this.props;
    var deductionInstructionJsx = null;
    { deductionInstructions && deductionInstructions.length > 0 ?
        (deductionInstructionJsx = deductionInstructions.map( (item, i) => {
          return ( <DeductionInstruction key={shortid.generate()} {...item} />)
        }))
      : null;
    }

    return (
      <div className='panel-group'>
        <div className='panel panel-default'>
          <h4 className="panel-title">
              <a href="#deductions-list" data-toggle="collapse">DeductionInstructions</a>
              <i className='caret'></i>
          </h4>
          <div id="deductions-list" className="panel-collapse collapse">
            <div className='panel-body'>
              {deductionInstructionJsx}
            </div>
            <div className="panel-footer">
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default DeductionInstructionsPanel;
