import Ajv from 'ajv';
import $ from 'jquery';

export const LOAD_SCHEMA = 'LOAD_SCHEMA';
export const LOAD_SCHEMA_FULFILLED = 'LOAD_SCHEMA_FULFILLED';
export const LOAD_SCHEMA_ERROR = 'LOAD_SCHEMA_ERROR';
export const LOAD_SCHEMA_META = 'LOAD_SCHEMA_META';
export const LOAD_SCHEMA_META_FULFILLED = 'LOAD_SCHEMA_META_FULFILLED';

function ajvLoadSchema(uri) {
  console.log('ajvLoadSchema:' + uri);
  return new Promise((resolve, reject) => {
    $.getJSON(uri)
      .done((json) => resolve(json))
      .fail((xhr, status, err) => {
        dispatch({type: LOAD_SCHEMA_ERROR, payload: err})
        reject(status + err.message)
      });
  });
}

export function loadSchema(schemaUrl) {
  console.log('loadSchema: ' + schemaUrl);
  return (dispatch) => {
    dispatch({type: LOAD_SCHEMA, payload: schemaUrl});

    fetch(schemaUrl, {method: 'get'}).then(function(response) {
      return response.json();
    })
    .then(function(schema) {
      dispatch({type: LOAD_SCHEMA_FULFILLED, payload: schema})
      return schema;
    })
    .then(function(schema) {
      var ajv = new Ajv(
        { allErrors: true,
          $data: false,
          loadSchema: ajvLoadSchema}
        );
      // console.log('1',ajv);
      ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-04.json'));
      // console.log('2',ajv);
      // ajv.removeSchema('http://json-schema.org/draft-06/schema');

      // ajv.addSchema()
      // debugger;
      try {
        var validate = ajv.compileAsync(schema);
      } catch  (err){
        dispatch({type: LOAD_SCHEMA_ERROR, payload: err})
      }

      console.log('4');
      var errorsArray = ajv.errors;
            // console.log(ajv);
      // console.log('errorsArray', ajv.errors);



    }).catch(function(err) {
      console.log('5 catch');
      // Error :(
      console.log(err);
      dispatch({type: LOAD_SCHEMA_ERROR,
        payload: {error: 'Could not load.'}})
    });
  }
}

export function setValidationStatus(status) {

}
