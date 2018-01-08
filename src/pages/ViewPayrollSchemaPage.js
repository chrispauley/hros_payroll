import React, {Component} from 'react';
import {connect} from 'react-redux';
import ObjectInspector from 'react-object-inspector';
import identifierSchema from 'json-schema-loader!../../public/schema/common/json/base/IdentifierType.json';

class ViewPayrollSchemaPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schema: identifierSchema
    }
  }

  render() {
    // let {schema, data, loading, errors} = this.props.validatorReducer;
    // const _list = listSchemas.map( (item) =>{
    //   return (<li key={item}> <a onClick={this.handleClick} href={item}>{item}</a></li>);
    // })

    return (
      <div className='row'>
        <pre><code>{JSON.stringify(this.state.schema)}</code></pre>
        <hr/>
        <ObjectInspector data={this.state.schema}/>
      </div>
    )
  }
}

function mapState(state) {
  return state;
}
function mapDispatch(dispatch) {
  return {
    // loadSchema: (url) => dispatch(loadSchema(url)),
    // loadSchemaMeta: (url) => dispatch(loadSchemaMeta(url)),
    // toggleShowProps: () => dispatch(toggleShowProps()),
    // toggle_showSchema: () => dispatch(toggle_showSchema())
  };
}

export default connect(mapState, mapDispatch)(ViewPayrollSchemaPage);
