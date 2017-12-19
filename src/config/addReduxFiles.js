
var array = [
  "personlegal",
  "accountType",
  "paymentMethod",
  "paymentDistribution"
];


console.log('// Put this in the ../src/actions/payrollActions');
console.log('//');
  var obj = array.map( (item) => {
    var str = item.toUpperCase();
    console.log(`export const TOGGLE_${str} = 'TOGGLE_${str}';`);
  });
  var obj2 = array.map( (item, index) => {
    var str = item.toUpperCase();
    console.log(`
      export function toggle_${item}() {
        return {type: TOGGLE_${str}}
      }`);
  });

  console.log('// Put this in the ../src/reducers/payrollReducer');
  console.log('//');
  var str1 = array.map( (item) => `TOGGLE_${item.toUpperCase()}`);
  console.log(`import { ${str1.toString()} } from '../src/actions/payrollDisplayActions'`);

  console.log('// To use this in a react component connecting to the store via redux');
  console.log('// Put this in the head of ../src/pages/PayrollPage');
  console.log('//');
  var str2 = array.map( (item) => `toggle_${item}`);
  console.log(`import { ${str2.toString()} } from '../src/actions/payrollDisplayActions'`);
