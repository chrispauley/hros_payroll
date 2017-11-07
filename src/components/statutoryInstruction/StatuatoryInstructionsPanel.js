import React, {Component} from 'react';
import StatuatoryInstruction from './StatuatoryInstruction';
import shortid from 'shortid';

class StatuatoryInstructionsPanel extends Component {
  constructor(props) {
    super(props);
    console.log('StatuatoryInstructionsPanel', props);
  }

  render() {

    var {statuatoryInstructions} = this.props;
    var statuatoryInstructionJsx = null;
    { statuatoryInstructions && statuatoryInstructions.length > 0 ?
        (statuatoryInstructionJsx = statuatoryInstructions.map( (item, i) => {
          return ( <StatuatoryInstruction key={shortid.generate()} {...item} />)
        }))
      : null;
    }

    return (
      <div className='panel-group'>
        <div className='panel panel-default'>
          <h4 className="panel-title">
              <a href="#statuatory-list" data-toggle="collapse">StatuatoryInstructions</a>
              <i className='caret'></i>
          </h4>
          <div id="statuatory-list" className="panel-collapse collapse">
            <div className='panel-body'>
              {statuatoryInstructionJsx}
            </div>
            <div className="panel-footer">
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default StatuatoryInstructionsPanel;
