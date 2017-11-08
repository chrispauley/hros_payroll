import React, {Component} from 'react';
import shortid from 'shortid';

class Deployment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCollapsed: false
    }
    console.log('DeploymentPanel', props);
  }

  render() {
//     var {payee} = this.props;
//     var {personName, personLegal } = payee;
//     var personNamesJsx = null;
// console.log('personLegal', payee);
//     if ( personName && personName.length > 0) {
//       personNamesJsx = personName.map( (item, i) => {
//         var fname = item.formattedName;
//         return (<span key={shortid.generate()}> {fname} </span>)
//       });
//     }

    return (

      <div className='panel-group'>
        <div className='panel panel-default'>
          <h4 className="panel-title">
              <a href="#deployment-data" data-toggle="collapse">Deployment</a>
              <i className='caret'></i>
          </h4>
          <div id="deployment-data" className="panel-collapse collapse">
            <div className='panel-body'>

              <div>
                <div className='row well'>
                  <div className='col-md-4'>
                    {/* This should be a list of tables. */}
                    <h4>Deployment</h4>
                  </div>
                </div>

                {/* { personLegal ?
                ( <div className='row'>
                    <PersonLegalTable {...personLegal} />
                  </div>)
                : '' } */}

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
export default Deployment;
