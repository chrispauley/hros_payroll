import React, {Component} from 'react';
import DropLoader from "../components/utils/DropLoader";

import DataSelectPanel from '../components/common/DataSelectPanel'
// import PartyTypeHeader from '../common/PartyTypeHeader'
import NounPanel from '../components/noun/NounPanel';
import PayeePanel from '../components/payee/PayeePanel';
import DeploymentPanel from '../components/deployment/DeploymentPanel';

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
    // console.log('PayrollPage.handleClick()');
    // Fetch data for e.value
    e.preventDefault();
    fetch(e.target.href)
       .then((res) => res.json()
       .then((resData) => {
          this.setState({ processInstance: resData });
          // console.log(this.state);
        }
     ));
  }

  componentDidMount() {
    // Fetch local data
    var that = this;
    var result = [];
    fetch('data/sample_list.json', {
      method: 'get'
    }).then(function(response) {
      return response.json();
    }).then(function(j){
      j.forEach( (item) => {
        result.push({
          name: item.formattedName,
          link: item.link });
      })
    })
    .then(function(){
      that.setState({items: result})
    })
    .catch(function(err) {
      // Error :(
      console.log(err);
    });
  }

  componentWillUnmount() {
  }

  handleDropFileInput = (data) => {
    this.setState({ processInstance: data });
  }


  render() {
    var {documentId, payee, deployment, paymentInstructions,
      deductionInstructions, statuatoryInstructions } = this.state.processInstance;
    var {party} = this.state.processInstance;

    return (
      <div>

        <DataSelectPanel {...this.state} onClick={this.handleClick.bind(this)}/>

        <hr/>
        {
          documentId ?
          (<NounPanel {...this.state.processInstance} />)
          : null }

        { deployment ?
          (<DeploymentPanel {...this.state.deployment } />)
        : null }

        { payee ?
          (<PayeePanel {...this.state.processInstance}/> )
          : null }

        { paymentInstructions ?
        (<PaymentInstructionsPanel {...this.state.processInstance} />)
        : null }
        { deductionInstructions ?
        ( <DeductionInstructionsPanel {...this.state.processInstance} />)
        : null }

        { statuatoryInstructions ?
        ( <StatuatoryInstructionsPanel {...this.state.processInstance} />)
        : null }



        {/* <DropLoader onChange={this.handleDropFileInput}/> */}
        {/* {party ? (   <PartyTypeHeader {...party} /> ) : null }
        { packages ? (<PackagePanel {...this.state.catalog} />) : null} */}
      </div>
    );
  }
}

export default PayrollPage;
