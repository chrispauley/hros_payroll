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

    var {deployment} = this.props;
    var {
      workerAssignmentSource,
      workLocation,
      communication,
      resourceRelationshipCode,
      organizationIds,
      job,
      position,
      scheduledHours,
      assignmentReasonCode,
      fullTimeEquivalentRatio,
      wageHourLawCoverageIndicator,
      effectivePeriod,
      employeeReportingCode,
      wageHourLawCoverageCountryCode,
      laborBargainingUnitIndicator,
      newHireProbationaryIndicator,
      organization,
      license,
      certification
    } = deployment;

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
                  <div className='col-md-12'>
                    {/* This should be a list of tables. */}
                    {workerAssignmentSource
                      ? (
                        <div>
                          <span className='caption'>workerAssignmentSource:
                          </span>
                          <b>sourceCode:
                          </b>
                          {workerAssignmentSource.sourceCode}
                          <b>homeCountry:
                          </b>
                          {workerAssignmentSource.homeCountry}
                          <b>hostCountry:
                          </b>
                          {workerAssignmentSource.hostCountry}
                        </div>
                      )
                      : null}

                  </div>
                </div>


              </div>

            </div>
            <div className="panel-footer"></div>

          </div>
        </div>
      </div>
    );
  }

}
export default Deployment;
