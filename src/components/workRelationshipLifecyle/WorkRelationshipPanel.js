import React, {Component} from 'react';
import shortid from 'shortid';

import ContractTable from './ContractTable';
import HireTable from './HireTable';
import TerminationTable from './TerminationTable';

class WorkRelationshipPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCollapsed: false
    }
  }

  handleToggle = (e) => {
    e.preventDefault();
    this.setState({
      isCollapsed: !this.state.isCollapsed
    })
  }

  render() {
    var {workRelationshipLifeCycle} = this.props;
    var {contract, hire, leaveOfAbsence, termination} = workRelationshipLifeCycle;

    return (
      <div className='panel-group' onClick={(e) => this.handleToggle(e)}>
        <div className='panel panel-default'>
          <h4 className="panel-title">
            <a href="#workrelationship-panel" data-toggle="collapse">Work Relationship</a>
            <i className='caret'></i>
          </h4>
          <div id="workrelationship-panel" className="panel-collapse collapse">
            <div className='panel-body'>
              { contract ? (
                <ContractTable {...contract} />
              ) : null }

              { hire ? (
                <HireTable {...hire} />
              ) : null }

              { leaveOfAbsence ? (
                <p>{leaveOfAbsence}</p>
              ) : null }

              { termination ? (
                <TerminationTable {...termination} />
              ) : null }
            </div>
            <div className="panel-footer"></div>

          </div>
        </div>
      </div>
    );
  }

}
export default WorkRelationshipPanel;
