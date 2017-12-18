import React, {Component} from 'react';

import IdentifierTypeTable from './IdentifierTypeTable';
import AlternateIdsTable from './AlternateIdsTable';
import DataProtectionPolicy from './DataProtectionPolicy';

class NounPanel extends Component {
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
          <h4 className="panel-title">
              <a href="#noun-panel" data-toggle="collapse">Noun</a>
              <i className='caret'></i>
          </h4>
          <div id="noun-panel" className="panel-collapse collapse">
            <div className='panel-body'>

              <div className='noun'>
                {this.props.documentId ? (<IdentifierTypeTable {...this.props.documentId} caption='documentId' />) : null}
                {this.props.alternateIds ? (<AlternateIdsTable {...this.props} />) : null } 
                {this.props.dataProtectionPolicy ? (<DataProtectionPolicy {...this.props.dataProtectionPolicy} />) : null }
                {this.props.language ? (<p>{this.props.language}</p>) : null}
              </div>

            </div>
            <div className="panel-footer">
            </div>

          </div>
        </div>
      </div>
    );
  }

}
export default NounPanel;
