import React, {Component} from 'react';
import shortid from 'shortid';


class WorkRelationshipPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCollapsed: false
    }
  }

  handleToggle = (e) => {
    e.preventDefault();
    this.setState({ isCollapsed: !this.state.isCollapsed })
  }

  render() {

    return (
      <div className='panel-group' onClick={ (e) => this.handleToggle(e)}>
        <div className='panel panel-default'>
          <h4 className="pworkrelationship-title">
              <a href="#noun-panel" data-toggle="collapse">WorkRelationshipPanel</a>
              <i className='caret'></i>
          </h4>
          <div id="workrelationship-panel" className="panel-collapse collapse">
            <div className='panel-body'>

            </div>
            <div className="panel-footer">
            </div>

          </div>
        </div>
      </div>
    );
  }

}
export default WorkRelationshipPanel;
