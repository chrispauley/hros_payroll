// vaidatorReducer is responsible for the data
import {LOAD_SCHEMA, LOAD_SCHEMA_FULFILLED, LOAD_SCHEMA_ERROR, LOAD_SCHEMA_META, LOAD_SCHEMA_META_FULFILLED} from '../actions/validatorActions';

const initialState = {
  schema: null,
  schemaUrl: null,
  schemaMeta: null,
  schemaMetaUrl: null,
  data: null,
  loading: false,
  errors: []
}

export function vaidatorReducer(state = initialState, action) {
  // console.info('vaidatorReducer called: ' + action.type);
  switch (action.type) {
    case LOAD_SCHEMA:
      return {
        ...state,
        schemaUrl: action.payload,
        loading: true,
        errors: []
      }
    case LOAD_SCHEMA_FULFILLED:
      var schema = action.payload;
      var metaUrl = schema['$schema'];
      return {
        ...state,
        loading: false,
        errors: [],
        schema: schema,
        metaUrl: metaUrl
      }
    case LOAD_SCHEMA_ERROR:
      return {
        ...state,
        loading: false,
        errors: action.payload
      }
    case LOAD_SCHEMA_META:
      return {
        ...state,
        loading: true,
        errors: [],
        metaUrl: action.payload,
        schemaMeta: null
      }
    case LOAD_SCHEMA_META_FULFILLED:
      console.log('m fulfilled:', action.payload);
      return {
        ...state,
        loading: false,
        errors: [],
        schemaMeta: action.payload.data
      }
    default:
      return state;
  }
}

export default vaidatorReducer;
