var writeJsonFile = require('write-json-file');
var fs = require("fs");
var fileList = require('../../public/data/fileList.json');

// console.log(fileList);
const samples = fileList.samples;
var newfile = {};

newfile = samples.map( (item) => {
  var vformattedName = '';
  var obj = {};
  var fn = '../../' + item.filePath;
  // console.log('fn:', fn);

  obj = require(fn);
  // console.log(obj);
  var alternateIds = obj.alternateIds;
  if (alternateIds) {
    vformattedName = alternateIds[0].schemeId + ' ' + alternateIds[0].value;
  } else {
    vformattedName = 'not found';
  }

  return {
    id: item.id,
    formattedName: vformattedName + '',
    publicPath: item.link
  }

});


writeJsonFile('./public/data/newFile.json', newfile);
console.log('Done!');
