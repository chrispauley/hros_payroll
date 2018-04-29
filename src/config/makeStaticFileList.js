var globArray = require('glob-array');
var writeJsonFile = require('write-json-file');

// From the project root, run:
// node ./src/config/makeStaticFileList.js
//

var addFileList = (arr, pattern) => {
  var {afiles, mapped} = [];
  var globOptions = {};
  aFiles = globArray.sync(pattern, globOptions);
  mapped = aFiles.map((item, index) => {
    var sub = item.split('/');
    var val = sub[sub.length - 2];
    filename = sub[sub.length - 1];
    return {
      id: index + 1,
      displayName: filename.substring(0, filename.lastIndexOf('.')),
      projectPath: item.substr(2),
      publicPath: item.split("/").slice(2).join("/")
    }
  });
  arr.push(...mapped);
}

var pattern = [
  './public/schema/payroll/json/samples/*.json'
];


var jsonFile = {
  samples: []
};

addFileList(jsonFile.samples, pattern);
// console.log('json:', jsonFile);
writeJsonFile('./public/data/fileList.json', jsonFile.samples);
console.log('Done.');
