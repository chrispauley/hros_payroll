import React, {Component} from 'react';
import {connect} from 'react-redux';
import {toggleShowJSON, toggle_showSchema} from '../actions/sessionActions';
import {loadSchema, loadSchemaMeta} from '../actions/validatorActions';

var v4 = 'schema/common/json/meta/v4.json';
var hros = 'schema/common/json/meta/hros.json';
var draft4 = 'schema/json-schema-draft-04.json';
var payroll = 'schema/payroll/json/PayrollType.json';
var listSchemas = [v4,hros,draft4,payroll]

class PayrollSchemaPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputUrl: hros
    }
  }

  handleLoadSchemaClick = (e) => {
    e.preventDefault();
    console.log('handleLoadSchemaClick()');
    this.props.loadSchema(this.state.inputUrl);
  }

  handleInputChange = (e) => {
    this.setState({inputUrl: e.target.value})
  }
  handleClick = (e) => {
    e.preventDefault();
    console.log(e.target.href);
    this.setState({inputUrl: e.target.href});
    this.props.loadSchema(e.target.href);
  }

  render() {
    let {schema, data, loading, errors} = this.props.validatorReducer;
    const _list = listSchemas.map( (item) =>{
      return (<li key={item}> <a onClick={this.handleClick} href={item}>{item}</a></li>);
    })

    return (
      <div className='row'>
        <hr/>
        <div className='col-md-12 col-sm-6'>
          <div className='panel panel-default'>
            <div className='panel-heading'>
              <form className='form-group row'>
                  <div className='input-group'>
                    <label htmlFor='schemaUrl'>Enter schema url: </label>
                    <span className="input-group-addon">
                      <span className="glyphicon glyphicon-list-alt"></span>
                      <input id='schemaUrl' style={{marginLeft: '1em'}}
                         type='text' placeholder=''
                         value={this.state.inputUrl}
                         size='70'
                         onChange={this.handleInputChange}/>
                    </span>
                    <button type='submit' style={{marginLeft: '1em'}}
                      className='btn btn-info btn-small'
                      onClick={this.handleLoadSchemaClick}>Load Schema</button>
                  </div>
              </form>
              <ul>{_list}</ul>
            </div>
            <div className='panel-body'>
                <button type='button' className='btn btn-info'
                  onClick={this.props.toggle_showSchema}>
                  {this.props.sessionReducer.showSchema ? ('Hide') : ('Show')} Schema</button>

              { this.props.sessionReducer.showSchema &&
                (<div><pre><code>{JSON.stringify(this.props.validatorReducer.schema, null, 2)}</code></pre></div>)
              }


            </div>
          </div>
          <hr/>
        </div>

      </div>
    );
  }
}

function mapState(state) {
  return state;
}
function mapDispatch(dispatch) {
  return {
    loadSchema: (url) => dispatch(loadSchema(url)),
    loadSchemaMeta: (url) => dispatch(loadSchemaMeta(url)),
    toggleShowProps: () => dispatch(toggleShowProps()),
    toggle_showSchema: () => dispatch(toggle_showSchema())
  };
}

export default connect(mapState, mapDispatch)(PayrollSchemaPage);
function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}
