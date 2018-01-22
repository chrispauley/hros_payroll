import React, {Component} from 'react';
import {connect} from 'react-redux';
import shortid from 'shortid';
import Pagination from './Pagination';


class DataSelectPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCollapsed: false,
      items: props.payrollReducer.items,
      pageOfItems: [],
      initialPage: 1
    }
    // console.log("DataSelectPanel props:", this.props.payrollReducer);
  }

  componentWillReceiveProps(nextProps) {
    // console.log('nextProps', nextProps);
    var {items} = nextProps.payrollReducer;
    if (items) {
      this.setState({
        items,
        pageOfItems: items.slice(0,6) })
    }
    // console.log('state: ', this.state);
  }

  onChangePage = (pageOfItems) => {
      // update state with new page of items
      // console.log('onChangePage pageOfItems:', pageOfItems);
      this.setState({ pageOfItems: pageOfItems });
  }

  handleClick = (e) => {
    this.setState({ isCollapsed: !this.state.isCollapsed })
    this.props.onClick(e);
    e.stopPropagation();
  }

  handleToggle = (e) => {
    e.preventDefault();
    this.setState({ isCollapsed: !this.state.isCollapsed })
    e.stopPropagation();
  }

  render() {
    var list = null;
    var { items } = this.props.payrollReducer;
    if ( items && items.length > 0 ) {
      list = this.state.items.map((item, i) => {
      return (
        <li key={i}>
          <a href={item.link} onClick={this.handleClick.bind(this)}>
             {item.name}
          </a>
        </li>
        )
      });
    }
    const { isCollapsed } = this.state;

    return (
      <div className='panel-group' onClick={ (e) => this.handleToggle(e)}>
        <div className='panel panel-default'>
          <h4 className="panel-title">
            <a href="#processInstance-list" data-toggle="collapse">Pick a Payroll Process instance here.</a>
            <i className='caret'></i>
          </h4>
          <div id="processInstance-list"
            className={`panel-collapse ${isCollapsed ? 'collapsed' : 'collapse'}`}>
            <div className='panel-body'>
              <div>
                <ul>{ list }</ul>
              </div>
            </div>
            <div className="panel-footer">
              <Pagination items={this.props.payrollReducer.items} onChangePage={this.onChangePage} />

            </div>

          </div>
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
    };
}

export default connect(mapState, mapDispatch)(DataSelectPanel);
