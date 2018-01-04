import tv4 from 'tv4';

export const LOAD_SCHEMA = 'LOAD_SCHEMA';
export const LOAD_SCHEMA_FULFILLED = 'LOAD_SCHEMA_FULFILLED';
export const LOAD_SCHEMA_ERROR = 'LOAD_SCHEMA_ERROR';
export const LOAD_SCHEMA_META = 'LOAD_SCHEMA_META';
export const LOAD_SCHEMA_META_FULFILLED = 'LOAD_SCHEMA_META_FULFILLED';

export function loadSchemaMeta(metaUrl) {
  console.log('loadSchemaMeta: ' + metaUrl);
  return (dispatch) => {
    // dispatch({type: LOAD_SCHEMA_META, payload: metaUrl});
    fetch(metaUrl, {method: 'get'}).then(function(response) {
      console.log('res', response.json());
      return response.json();
    })
    .then( function(json) {
      dispatch({type: LOAD_SCHEMA_META_FULFILLED,
        payload: json})
    })
    .catch(function(err) {
      // Error :(
      console.log(err);
      dispatch({type: LOAD_SCHEMA_ERROR,
        payload: {error: 'Could not load.'}})
    });

  }
}

export function loadSchema(schemaUrl) {
  console.log('loadSchema: ' + schemaUrl);
  return (dispatch) => {
    dispatch({type: LOAD_SCHEMA, payload: schemaUrl});

    fetch(schemaUrl, {method: 'get'}).then(function(response) {
      return response.json();
    })
    .then(function(json) {
      dispatch({type: LOAD_SCHEMA_FULFILLED, payload: json})
    }).catch(function(err) {
      // Error :(
      console.log(err);
      dispatch({type: LOAD_SCHEMA_ERROR,
        payload: {error: 'Could not load.'}})
    });
  }
}
