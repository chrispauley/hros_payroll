import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getPayrollInstructionInstance, getSampleList} from '../actions/payrollActions';
import {
  toggleShowJSON,
  toggle_showSchema,
  toggle_showNoun,
  toggle_payee,
  toggle_showDeployment,
  toggle_showTax,
  toggle_showBenefits,
  toggle_showGarnishments,
  toggle_showGeneralInstructions
} from '../actions/sessionActions';

import {loadSchema} from '../actions/validatorActions';

import DropLoader from "../components/utils/DropLoader";

import DataSelectPanel from '../components/common/DataSelectPanel'
import NounPanel from '../components/noun/NounPanel';
import PayeePanel from '../components/payee/PayeePanel';
import BenefitInstructionsPanel from '../components/benefitInstructions/BenefitInstructionsPanel';
import DeploymentPanel from '../components/deployment/DeploymentPanel';
import GeneralDeductionsPanel from '../components/generalDeductions/GeneralDeductionsPanel';
import GarnishmentDeductionsPanel from '../components/garnishmentDeductions/GarnishmentDeductionsPanel';
import PaymentInstructionsPanel from '../components/paymentInstruction/PaymentInstructionsPanel'
import TaxInstructionsPanel from '../components/taxInstructions/TaxInstructionsPanel';

import WorkRelationshipPanel from '../components/workRelationshipLifecyle/WorkRelationshipPanel';


class PayrollPage extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = (e) => {
    // Fetch data for e.value
    e.preventDefault();
    this.props.getPayrollInstructionInstance(e.target.href);
  }

  componentDidMount() {
    console.log('componentDidMount');
    var url = 'data/fileList.json';
    this.props.getSampleList(url);
  }

  componentWillUnmount() {}

  handleDropFileInput = (data) => {
    this.setState({processInstance: data});
  }

  handleLoadSchemaClick = () => {
    console.log('handleLoadSchemaClick()');
    var url = 'schema/common/json/meta/hros.json';
    url = 'schema/payroll/json/PayrollType.json';
    this.props.loadSchema(url);
  }

  render() {
    var {error, processInstance} = this.props.payrollReducer;
    if (error) {
      return (
        <div>
          <DataSelectPanel />
          <div className='row'>Error loading process instance.</div>
        </div>
      );
    }

    var {
      documentId,
      payee,
      payrollDeployments,
      workRelationshipLifeCycle,
      benefitDeductionInstructions,
      garnishmentDeductionInstruction,
      generalDeductionInstructions,
      paymentInstructions,
      deductionInstructions,
      taxInstructions
    } = processInstance;

    return (
      <div>

        {error && (
          <div className='col-md-12'>
            <span style={{
              color: 'red'
            }}>Error loading data
            </span><hr/></div>
        )}
        {/* <DataSelectPanel {...this.props.payrollReducer} onClick={this.handleClick.bind(this)}/> */}
        <DataSelectPanel onClick={this.handleClick.bind(this)}/>

        <hr/> {documentId && (<NounPanel {...processInstance}/>)}

        {payee && (<PayeePanel {...processInstance}/>)}

        {payrollDeployments && (<DeploymentPanel />)}

        {/* { workRelationshipLifeCycle &&
          (<WorkRelationshipPanel {...processInstance } />) } */}

        { benefitDeductionInstructions && ( <BenefitInstructionsPanel />) }

        { generalDeductionInstructions && (<GeneralDeductionsPanel />)}

        { paymentInstructions && ( <PaymentInstructionsPanel />) }

        {taxInstructions && (<TaxInstructionsPanel/>)}

        {garnishmentDeductionInstruction && (<GarnishmentDeductionsPanel/>)}


        {/* <DropLoader onChange={this.handleDropFileInput}/> */}
        {/* <button type='button' className='btn btn-info' onClick={this.handleLoadSchemaClick}>
          Load Schema</button> */}

        {/* <button type='button' className='btn btn-info' onClick={this.props.toggle_showSchema}>
          {this.props.sessionReducer.showSchema
            ? ('Hide')
            : ('Show')}
          Schema</button> */}

        {isEmpty(!processInstance) && (
          <button type='button' className='btn btn-info' onClick={this.props.toggleShowJSON}>
            {this.props.sessionReducer.showJSON
              ? ('Hide')
              : ('Show')}
            JSON</button>
        )
}
        {this.props.sessionReducer.showJSON && (
          <div>
            <pre><code>{JSON.stringify(processInstance, null, 2)}</code></pre>
          </div>
        )
}
        {this.props.sessionReducer.showSchema && (
          <div>
            <pre><code>{JSON.stringify(this.props.validatorReducer.schema, null, 2)}</code></pre>
          </div>
        )
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
    loadSchema: (url) => dispatch(loadSchema(url)),
    getPayrollInstructionInstance: (url) => dispatch(getPayrollInstructionInstance(url)),
    getSampleList: (url, offset, page) => dispatch(getSampleList(url, offset, page)),
    clear: () => dispatch(clear()),
    toggleShowJSON: () => dispatch(toggleShowJSON()),
    toggleShowNoun: () => dispatch(toggleShowNoun()),
    toggleShowProps: () => dispatch(toggleShowProps()),
    toggle_showSchema: () => dispatch(toggle_showSchema())
    // toggle_payee: ()=> dispatch(toggle_payee()),
    // toggle_showDeployment: () => dispatch(toggle_showDeployment()),
    // toggle_showTax: () => dispatch(toggle_showTax()),
    // toggle_showBenefits: () => dispatch(toggle_showBenefits()),
    // toggle_showGarnishments: () => dispatch(toggle_showGarnishments()),
    // toggle_showGeneralInstructions: () => dispatch(toggle_showGeneralInstructions())
  };
}

export default connect(mapState, mapDispatch)(PayrollPage);
function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}
