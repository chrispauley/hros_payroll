import React from 'react';
//import { IndexLink, Link } from 'react-router';

const User = ({name}) => (
  <div><i className="glyphicon glyphicon-user"></i> {`${name}`}</div>
)


class Nav extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          collapsed: true,
          name: props.name
        };
    }
    toggleCollapse() {
      const collapsed = !this.state.collapsed;
      this.setState({collapsed});
    }

    render() {
      const { location, name } = this.props;
      const { collapsed } = this.state;

        // console.log("nav", this.props);
        return (
            <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
              <div className="container">
                <div className="navbar-header">
                  <div className="navbar-brand">HROS Payroll</div>
                  <button type="button" className="navbar-toggle" onClick={this.toggleCollapse.bind(this)}>
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                </div>
                <div className="navbar-collapse " id="top-navbar">
                  <ul className="nav navbar-nav">
                    <li><a href='index.html'>Index</a></li>
                    <li><a href='payroll.html'>Payroll</a></li>
                    {/* <li><a href=''>Deduction</a></li>
                    <li><a href=''>workrelationship</a></li>
                    <li><a href=''>StatutoryInstructions</a></li> */}
                    <li><a href='jschemaframe.html'>JSchema</a></li>
                  </ul>

                  <ul className='nav navbar-nav navbar-right'>
                    <li><a href='about.html'>About</a></li>
                    <li><a href=''><User name={this.props.name}/></a></li>
                  </ul>

                </div>
              </div>
            </nav>
        );
    }
}

export default Nav;
