/* 
Description: This will add an identifierType to the alternateIds array 
 to each of the sample files for this application. 
Motivation: This is to enable linking from within the application.

The HROS IdentifierType is defined in src/schema/common/json/base/IdentifierType.json
First, run makeFileList.js which will generate the input file for this routine.

From the project root, type:

node ./src/config/addAlternateIds.js

*/
var writeJsonFile = require('write-json-file');
var fs = require("fs");
var sourceFileList = require('../../public/data/fileList.json');
var destinationProjectPath = 'public/data/updated';
var destinationPublicPath = 'data/updated';
var destFileList = { files: [] };

var identifier = {
  value: "",
  schemeId: "hros_payroll",
  schemeLink: "",
  description: "This is a sample file for the hros_payroll application to view PayrollProcessType noun instances.",
  schemeAgencyId: "HROS Payroll Workgroup",
  schemeVersionId: "4.2",
  agencyUri: "https://chrispauley.github.io/hros_payroll/"
}



sourceFileList.map( (item) => {
  var newId = Object.assign({}, identifier);
  newId.value = item.displayName;
  newId.schemeLink = item.publicPath;

  var obj = require('../../' + item.projectPath);
  var alternateIds = obj.alternateIds;
  var existingIdFound = false;

  if (alternateIds === undefined) {
    alternateIds = [];
    Object.assign(obj, {"alternateIds": alternateIds});
  } 

  var schemeId = identifier.schemeId;
  var schemeVersionId = identifier.schemeVersionId;
  alternateIds.map( (id) => {
    if (id.schemeId && id.schemeId === schemeId) {
      // if(id.schemeVersionId && id.schemeVersionId !== schemeVersionId) {
        console.log('Found.' + id.value);
        existingIdFound = true;
        newId.newId = false;
        Object.assign(id, newId);
    } 
    
  });

  if ( !existingIdFound ) {
    // console.log('not found.' + newId.value);
     alternateIds.push(newId); 
  }
 
  var fileName = item.publicPath.substr(item.publicPath.lastIndexOf("/") + 1);
  var projectPath = destinationProjectPath + '/' + fileName;
  var publicPath = destinationPublicPath + '/' + fileName;

  // console.log(projectPath);
  writeJsonFile(projectPath, obj);
  var newItem = Object.assign({}, item);
  newItem.projectPath = projectPath;
  newItem.publicPath = publicPath;
  destFileList.files.push(newItem);
});

// Create a new filelist for the output location.
writeJsonFile(destinationProjectPath + '/fileList.json', destFileList.files);
console.log('addAlternateIds - Done!');
