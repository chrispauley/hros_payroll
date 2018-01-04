import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectDeploymentsFirst, selectDeploymentsNext, selectDeploymentsPrevious, selectDeploymentsLast, selectDeploymentsById} from '../../actions/payrollDeploymentActions';
import {toggle_showDeployment} from '../../actions/sessionActions';
import shortid from 'shortid';
import WorkLocationTable from './WorkLocationTable'

class Deployment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCollapsed: true
    }
    // console.log('DeploymentPanel', props.payrollReducer);
  }

  render() {
    var {showDeployment} = this.props.sessionReducer;
    var {processInstance, deploymentArrayOffset, deploymentPage} = this.props.payrollReducer;
    if (!processInstance) {
      console.log('No processInstance. Why was DeploymentPanel called to render?');
      return null;
    }
    var {payrollDeployments} = processInstance;
    if (!payrollDeployments) {
      console.log('No payrollDeployments. Why was DeploymentPanel called to render?');
      return null;
    }

    var {
      validFrom,
      validTo,
      careerLevelCode,
      payrollStatus,
      workLocations,
      resourceRelationshipCode,
      job,
      positionId,
      positionTitle,
      primaryWorkIndicator,
      workSchedules,
      dutyEntryDates,
      workLevelCode,
      wageHourLawCoverageCode,
      employmentTermCode,
      nationalityContextCode,
      supplementaryPensionType,
      remunerationBasisCode,
      payrollRemunerations
    } = payrollDeployments[deploymentArrayOffset];

    return (

      <div className='panel-group'>
        <div className='panel panel-default'>
          <h4 className="panel-title">
            <a href="#deployment-data"
              data-toggle='collapse'>Deployment</a>
            <i className='caret'></i>
          </h4>
          <div id="deployment-data" className={`panel-collapse ${showDeployment ? 'collapsed' : 'collapse'}`}>
            <div className='panel-body'>

              <div>
                <div className='row'>
                  <div className='col-md-12'>
                    {/* This should be a list of tables. */}
                    { validFrom && displayValue('validFrom', validFrom)}
                    { validTo && displayValue('validTo', validTo)}
                    { resourceRelationshipCode && displayValue('resourceRelationshipCode', resourceRelationshipCode)}
                    { payrollStatus && displayValue('payrollStatus', payrollStatus)}
                    { workLocations && displayValue('workLocations', workLocations)}
                    { job && displayValue('job', job)}
                    { careerLevelCode && displayValue('careerLevelCode', careerLevelCode)}
                    { positionId && displayValue('positionId', positionId)}
                    { positionTitle && displayValue('positionTitle', positionTitle)}
                    { primaryWorkIndicator && displayValue('primaryWorkIndicator', primaryWorkIndicator)}
                    { workSchedules && displayValue('workSchedules', workSchedules)}
                    { dutyEntryDates && displayValue('dutyEntryDates', dutyEntryDates)}
                    { workLevelCode && displayValue('workLevelCode', workLevelCode)}
                    { wageHourLawCoverageCode && displayValue('wageHourLawCoverageCode', wageHourLawCoverageCode)}
                    { employmentTermCode && displayValue('employmentTermCode', employmentTermCode)}
                    { nationalityContextCode && displayValue('nationalityContextCode', nationalityContextCode)}
                    { supplementaryPensionType && displayValue('supplementaryPensionType', supplementaryPensionType)}
                    { nationalityContextCode && displayValue('nationalityContextCode', nationalityContextCode)}
                    { remunerationBasisCode && displayValue('remunerationBasisCode', remunerationBasisCode)}
                    { payrollRemunerations && displayValue('payrollRemunerations', payrollRemunerations)}
                  </div>
                </div>

                {/* { workLocation &&
                  (<div className='row'>
                    <WorkLocationTable {...workLocation} />
                  </div>)} */}


              </div>

            </div>
            <div className="panel-footer"></div>

          </div>
        </div>
      </div>
    );
  }

}
function displayValue(key, val) {
  return (
    <div className='row'>
      <div className='col-sm-2'>{key}</div>
      <div className='col-sm-10'><pre><code>{JSON.stringify(val, null, 2)}</code></pre></div>
    </div>
  )
}

function mapState(state) {
    return state;
}
function mapDispatch(dispatch) {
    return {
        selectDeploymentsFirst: () => dispatch(selectDeploymentsFirst()),
        selectDeploymentsNext: () => dispatch(selectDeploymentsNext()),
        selectDeploymentsPrevious: () => dispatch(selectDeploymentsPrevious()),
        selectDeploymentsLast: () => dispatch(selectDeploymentsLast()),
        selectDeploymentsById: (id) => dispatch(selectDeploymentsById(id)),
        toggle_showDeployment: () => dispatch(toggle_showDeployment()),
    };
}
export default connect(mapState, mapDispatch)(Deployment);
