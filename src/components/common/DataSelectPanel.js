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
    console.log("DataSelectPanel props:", this.props.payrollReducer);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      items: nextProps.payrollReducer.items,
      pageOfItems: nextProps.payrollReducer.items.slice(0,6) })
  }

  onChangePage = (pageOfItems) => {
      // update state with new page of items
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

    var list = this.state.pageOfItems.map((item, i) => {
      // console.log("i: ", i, item);
      return (
        <li key={i}>
          <a href={item.link} onClick={this.handleClick.bind(this)}>
             {item.name}
          </a>
        </li>
      )
    });

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
              <Pagination items={this.state.items} onChangePage={this.onChangePage} />

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
