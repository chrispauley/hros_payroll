import React, {Component} from 'react';
import shortid from 'shortid';
import WorkLocationTable from './WorkLocationTable'

class Deployment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCollapsed: false
    }
    console.log('DeploymentPanel', props);
  }

  render() {
    if (true) return (<span>debugging</span>);
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
                <div className='row'>
                  <div className='col-md-12'>
                    {/* This should be a list of tables. */}
                    {workerAssignmentSource && (
                        <table className='table table-condensed table-bordered'>
                          <thead><tr>
                            <th className='col-xs-1'>Source</th>
                            <th>Home Country</th>
                            <th>Host Country</th>
                          </tr></thead>
                          <tbody>
                            <tr>
                              <td>{workerAssignmentSource.sourceCode}</td>
                              <td>{workerAssignmentSource.homeCountry}</td>
                              <td>{workerAssignmentSource.hostCountry}</td>
                            </tr>
                          </tbody>
                        </table>
                      ) }
                  </div>
                </div>

                { workLocation &&
                  (<div className='row'>
                    <WorkLocationTable {...workLocation} />
                  </div>)}


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
