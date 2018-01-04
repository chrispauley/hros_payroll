import react from 'react';
// code this...
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
