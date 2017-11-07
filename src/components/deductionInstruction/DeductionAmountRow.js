import React, {Component} from 'react';

class DeductionAmountRow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    /*
    "typeDeduction": {
        "type": "string"
    },
    "code": { "$ref": "../../common/json/base/CodeType.json#" },
    "amount": { "$ref": "../../common/json/base/AmountType.json#" },
    "percentage": { "$ref": "../../common/json/base/PercentType.json#" },
    "basisCode": { "$ref": "../../common/json/base/CodeType.json#" },
    "basis": { "$ref": "../../common/json/base/AmountType.json#" }
    */
    var { typeDeduction, code, amount, percentage, basisCode, basis } = this.props;
    var { value, currency } = amount;
    var basisValue, basisCurrency = null;
    if (basis !== undefined) {
      basisValue = basis.value; basisCurrency = basis.currency;
    }

    return (
      <table>
        <thead>
          <tr>
             { typeDeduction ?  (<th className='col-xs-1'>typeDeduction</th>) : null }
             { code ?  (<th className='col-xs-1'>Code</th>) : null }
             { percentage ?  (<th className='col-xs-1'>percentage</th>) : null }
             { value ?  (<th className='col-xs-1'>Amount</th>) : null }
             { basisCode ? (<th className='col-xs-1'>Basis Code</th>) : null }
             { basisValue ?  (<th className='col-xs-1'>Basis Amount</th>) : null }
          </tr>
        </thead>
        <tbody>
          <tr>
            { typeDeduction ? ( <td>{typeDeduction}</td> ) : null }
            { code ? ( <td>{code}</td> ) : null }
            { percentage ? ( <td>{percentage}</td> ) : null }
            { value ?  (<td>{value} {currency}</td>) : null }
            { basisCode ? (<td>{basisCode}</td>) : null }
            { basisValue ?  (<td>{basisValue} {basisCurrency}</td>) : null }
          </tr>
        </tbody>
      </table>
    );
  }
}


export default DeductionAmountRow;
