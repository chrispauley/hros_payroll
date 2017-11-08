var globArray = require('glob-array');
var writeJsonFile = require('write-json-file');


//
var addFileList = (arr, pattern) => {
  var {afiles, mapped} = [];
  var globOptions = {};
  aFiles = globArray.sync(pattern, globOptions);
  mapped = aFiles.map( (item, index) => {
    var sub = item.split('/');
    var val = sub[ sub.length - 2 ];
    return {
      displaySequence: index + 1,
      filePath: item.substr(2),
      link: 'data/' + item.substr(item.lastIndexOf("/")+1)
    }
  });
  arr.push(...mapped);
}


var jsonFile = { sampleFiles: [] };


var pattern = [
   './public/data/payrollProcessType_uc_newhire_*.json',
   './public/data/payrollProcessType_uc_rehire_*.json',
   './public/data/payrollProcessType_uc_transfer_*.json',
   './public/data/payrollProcessType_uc_termination_*.json',
   './public/data/payrollProcessType_uc_payment_details_*.json',
   './public/data/payrollProcessType_uc_name_change_*.json',
   './public/data/payrollProcessType_uc_address_change_*.json',
   './public/data/payrollProcessType_uc_deployment_*.json',
   './public/data/payrollProcessType_uc_job_change_*.json',
   './public/data/payrollProcessType_uc_location_change_*.json',
   './public/data/payrollProcessType_uc_benefits_*.json',
   './public/data/payrollProcessType_uc_basic_package_*.json',
   './public/data/payrollProcessType_uc_recurring_allowance_*.json',
   './public/data/payrollProcessType_uc_recurring_quotas_*.json',
   './public/data/payrollProcessType_uc_time_and_attendance_*.json',
   './public/data/payrollProcessType_uc_evaluated_time_*.json',
   './public/data/payrollProcessType_uc_bonus_*.json',
   './public/data/payrollProcessType_uc_overrides_*.json',
   './public/data/payrollProcessType_uc_adjustments_*.json',
   './public/data/payrollProcessType_uc_taxes_*.json',
   './public/data/payrollProcessType_uc_balances_*.json',
   './public/data/payrollProcessType_uc_garnishment_*.json',
   './public/data/payrollProcessType_uc_social_insurance_*.json',
   './public/data/payrollProcessType_uc_car_*.json',
   './public/data/payrollProcessType_uc_travel_*.json'
 ];

addFileList(jsonFile.sampleFiles, pattern);
console.log('json:' , jsonFile);
writeJsonFile('./public/data/fileList.json', jsonFile);
