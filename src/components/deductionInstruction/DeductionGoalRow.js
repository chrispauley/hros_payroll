import React, {Component} from 'react';

class DeductionGoalRow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    /*
    "id": { "$ref": "../../common/json/base/IdentifierType.json#" },
    "limitAmount": {
        "description": "The total deduction amount that cannot be exceeded over the life of the deduction.",
        "$ref": "../../common/json/base/AmountType.json#"
    },
    "accrualAdjustmentAmount": {
        "description": "Is the amount paid against the goal outside the payroll system.",
        "$ref": "../../common/json/base/AmountType.json#"
    }
    */
    var { id, limitAmount, accrualAdjustmentAmount } = this.props;
    var limitValue, limitCurrency, accrualValue, accrualCurrency = null;
    if (limitAmount !== undefined) {
      limitValue = limitAmount.value; limitCurrency = limitAmount.currency;
    }
    if (accrualAdjustmentAmount !== undefined) {
      accrualValue = accrualAdjustmentAmount.value; accrualCurrency = accrualAdjustmentAmount.currency;
    }

    return (
      <table>
        <thead>
          <tr>
             { id ?  (<th className='col-xs-1'>Id</th>) : null }
             { limitValue ?  (<th className='col-xs-1'>Limit Amount</th>) : null }
             { accrualValue ?  (<th className='col-xs-1'>Accrual Adjustment Amount</th>) : null }
          </tr>
        </thead>
        <tbody>
          <tr>
            { id ? ( <td>{id.value}</td> ) : null }
            { limitValue ?  (<td>{limitValue} {limitCurrency}</td>) : null }
            { accrualValue ?  (<td>{accrualValue} {accrualCurrency}</td>) : null }
          </tr>
        </tbody>
      </table>
    );
  }
}


export default DeductionGoalRow;
