import React, {Component} from 'react';
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
    fetch('data/fileList.json', {
      method: 'get'
    }).then(function(response) {
      return response.json();
    }).then(function(j){
      j.forEach( (item) => {
        result.push({
          name: item.displayName,
          link: item.publicPath });
      })
    })
    .then(function(){
      that.setState({items: result})
    })
    .catch(function(err) {
      // Error :(
      setState({error: err});
      console.log(err);
    });
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
    var {documentId, payee, deployment, workRelationshipLifeCycle, paymentInstructions,
      deductionInstructions, statuatoryInstructions } = this.state.processInstance;

    return (
      <div>

        <DataSelectPanel {...this.state} onClick={this.handleClick.bind(this)}/>

        <hr/>

        {
          documentId &&
          (<NounPanel {...this.state.processInstance} />) }

        { deployment &&
          (<DeploymentPanel {...this.state.processInstance } />) }

        { workRelationshipLifeCycle &&
          (<WorkRelationshipPanel {...this.state.processInstance } />) }


        { payee &&
          (<PayeePanel {...this.state.processInstance}/> ) }

        { paymentInstructions &&
        (<PaymentInstructionsPanel {...this.state.processInstance} />) }

        { deductionInstructions &&
        ( <DeductionInstructionsPanel {...this.state.processInstance} />) }

        { statuatoryInstructions &&
        ( <StatuatoryInstructionsPanel {...this.state.processInstance} />) }



        {/* <DropLoader onChange={this.handleDropFileInput}/> */}
        {
          isEmpty(!this.state.processInstance) &&
          (<button type='button'
            className='btn btn-default' onClick={this.handleViewDataClick}>View JSON</button>)
        }
        { this.state.showJSONData &&
          (<div><pre><code>{JSON.stringify(this.state.processInstance, null, 2)}</code></pre></div>)
        }

      </div>
    );
  }
}

export default PayrollPage;

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}
