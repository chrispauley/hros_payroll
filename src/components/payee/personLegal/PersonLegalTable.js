import React from 'react';
import IdentifierTable from '../../noun/IdentifierTypeTable';

class PersonLegalTable extends React.Component {
  constructor(props) {
    super(props);
    // console.log('PersonLegalTable', props);
  }

  render() {
    var {passportId} = this.props;

    return (
      <table className='table'>
        <caption>PersonLegal</caption>
        <tbody>
          { passportId &&
            (<tr>
                {/* <th>PassportId:</th> */}
                <td><IdentifierTable {...passportId} caption='PassportId' /></td>
              </tr>)
          }

        </tbody>
      </table>
    )
  }
}

export default PersonLegalTable;
// data:{
//   passportId: {value: ''},
//   fatherName: [''],
//   motherName: '',
//   race: [''],
//   birthPlace: '',
//   deathDate: '',
//   nationality: [''],
//   maritalStatus: '',
//   visa: [""],
//   religion: [""],
//   studentType: '',
//   studentIndicator: false,
//   studentStatus: "",
//
//   legalId: {value: ''},
//   birthDate: '',
//   gender: '',
//   citizenship: [''],
//   residenceCountry: [''],
//   militaryStatus: '',
//   ethnicity: [''],
//
//   id: { value: ''},
//   name: {  },
//   communication: { },
//   primaryLanguage: ''
//   }
// }
