import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getPayrollInstructionInstance, getPayrollInstructions } from '../actions/payrollActions';
import DropLoader from "../components/utils/DropLoader";

import DataSelectPanel from '../components/common/DataSelectPanel'
import NounPanel from '../components/noun/NounPanel';
import PayeePanel from '../components/payee/PayeePanel';
import DeploymentPanel from '../components/deployment/DeploymentPanel';
import WorkRelationshipPanel from '../components/workRelationshipLifecyle/WorkRelationshipPanel';

import DeductionInstructionsPanel from '../components/deductionInstruction/DeductionInstructionsPanel'
import PaymentInstructionsPanel from '../components/paymentInstruction/PaymentInstructionsPanel'
import StatuatoryInstructionsPanel from '../components/statutoryInstruction/StatuatoryInstructionsPanel'


class PayrollPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      offset: 5,
      page: 1,
      processInstance: {}
    }
  }

  handleClick = (e) => {
    // Fetch data for e.value
    e.preventDefault();
    this.props.getPayrollInstructionInstance(e.target.href);
  }

  componentDidMount() {
    // console.log('componentDidMount');
    var url = 'data/fileList.json';
    this.props.getPayrollInstructions(url);
  }

  componentWillUnmount() {
  }

  handleDropFileInput = (data) => {
    this.setState({ processInstance: data });
  }

  handleViewDataClick = () => {
    this.setState({showJSONData: true})
  }


  render() {
    var {error, processInstance} = this.props.payrollReducer;
    var {documentId, payee, deployment, workRelationshipLifeCycle, paymentInstructions,
      deductionInstructions, statuatoryInstructions } = this.props.payrollReducer.processInstance;

    return (
      <div>

        {error && (<div className='col-md-12'><span style={{color:'red'}}>Error loading data </span><hr/></div>) }
        <DataSelectPanel {...this.props.payrollReducer} onClick={this.handleClick.bind(this)}/>

        <hr/>

        {
          documentId &&
          (<NounPanel {...processInstance} />) }

        { deployment &&
          (<DeploymentPanel {...processInstance } />) }

        { workRelationshipLifeCycle &&
          (<WorkRelationshipPanel {...processInstance } />) }

        { payee &&
          (<PayeePanel {...processInstance}/> ) }

        { paymentInstructions &&
        (<PaymentInstructionsPanel {...processInstance} />) }

        { deductionInstructions &&
        ( <DeductionInstructionsPanel {...processInstance} />) }

        { statuatoryInstructions &&
        ( <StatuatoryInstructionsPanel {...processInstance} />) }



        {/* <DropLoader onChange={this.handleDropFileInput}/> */}
        {
          isEmpty(!this.processInstance) &&
          (<button type='button'
            className='btn btn-default' onClick={this.handleViewDataClick}>View JSON</button>)
        }
        { this.state.showJSONData &&
          (<div><pre><code>{JSON.stringify(processInstance, null, 2)}</code></pre></div>)
        }

      </div>
    );
  }
}

function mapState(state) {
    return state;
}
function mapDispatch(dispatch) {
    return {
        // fetchPositions: () => dispatch(fetchPositions()),
        // fetchPosition: (positionUrl) => dispatch(fetchPosition(positionUrl)),
        // loadPositions: () => dispatch(loadPositions()),
        getPayrollInstructionInstance: (url) => dispatch(getPayrollInstructionInstance(url)),
        getPayrollInstructions: (url,offset,page) => dispatch(getPayrollInstructions(url,offset,page)),
        clear: () => dispatch(clear()),
        toggleShowJSON: () => dispatch(toggleShowJSON()),
        toggleShowNoun: () => dispatch(toggleShowNoun()),
        toggleShowProps: () => dispatch(toggleShowProps())
    };
}

export default connect(mapState, mapDispatch)(PayrollPage);
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}
