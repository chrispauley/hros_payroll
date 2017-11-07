import React, {Component} from 'react';

class DataSelectList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items,
      offset: props.offset,
      page: props.page
    }
  }

  render() {
    var list = this.props.items.map((item, i) => {
      // console.log("i: ", i, item);
      return (
        <li key={i}>
          <a href={item.link} onClick={this.props.handleClick}>
            {item.name}
          </a> <span><a className='btn btn-primary btn-sm' href={item.link} target='_new'>json</a></span>
        </li>
      )
    });
    return (
      <div>
        <ul>{ list }</ul>
      </div>
    );
  }
}

export default DataSelectList;
