import React, {Component} from 'react';
import shortid from 'shortid';


class DataSelectPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items,
      offset: props.offset,
      page: props.page,
      isCollapsed: false
    }
  }

  handleClick = (e) => {
    this.setState({ isCollapsed: !this.state.isCollapsed })
    this.props.onClick(e);
  }

  handleToggle = (e) => {
    e.preventDefault();
    this.setState({ isCollapsed: !this.state.isCollapsed })
  }

  render() {
    var list = this.props.items.map((item, i) => {
      // console.log("i: ", i, item);
      return (
        <li key={i}>
          <a href={item.link} onClick={this.handleClick.bind(this)}>
            {item.name}
          </a> <span><a className='btn btn-primary btn-sm' href={item.link} target='_new'>json</a></span>
        </li>
      )
    });

    var paginationJsx = null;
    var totalPages = this.props.items.length;

    var pageList = this.props.items.map( (item, i) => {
      return (
        <li key={shortid.generate()} className={`${this.state.page} == i ? 'active' : ''`}>
          <a href=''>{i}</a>
        </li>
      )
    });
    paginationJsx = ( <ul className='pagination'>{pageList}</ul>);

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
              {/* [pagination-links-go-here]{paginationJsx} */}
            </div>

          </div>
        </div>
      </div>
    );
  }
}
export default DataSelectPanel;
