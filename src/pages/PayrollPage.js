import React, {Component} from 'react';
import DropLoader from "../components/utils/DropLoader";

import DataSelectPanel from '../components/common/DataSelectPanel'
// import PartyTypeHeader from '../common/PartyTypeHeader'
import PaymentInstructionsPanel from '../components/paymentInstruction/PaymentInstructionsPanel'

function isEmpty(obj) {
  if (Object.getOwnPropertyNames(obj).length == 0) {
    console.log('empty');
    return true;}
  else { console.log('not empty'); return false;}
}

class PayrollPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
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
    var {paymentInstructions} = this.state.processInstance;
    var {party} = this.state.processInstance;
    return (
      <div>

        <div className='panel-group'>
          <div className='panel panel-default'>
            <h4 className="panel-title">
                <a href="#processInstance-list" data-toggle="collapse">Pick a Payroll Process instance here.</a>
                <i className='caret'></i>
            </h4>
            <div id="processInstance-list" className="panel-collapse collapse">
              <div className='panel-body'>
                <DataSelectPanel {...this.state} onClick={this.handleClick.bind(this)}/>
              </div>
              <div className="panel-footer">
                [pagination-links-go-here]
              </div>

            </div>
          </div>
        </div>
        <hr/>

        { paymentInstructions ?
        (<PaymentInstructionsPanel {...this.state.processInstance.paymentInstructions} />)
        : null }

        {/* <DropLoader onChange={this.handleDropFileInput}/> */}
        {/* {party ? (   <PartyTypeHeader {...party} /> ) : null }
        { packages ? (<PackagePanel {...this.state.catalog} />) : null} */}
      </div>
    );
  }
}

export default PayrollPage;
