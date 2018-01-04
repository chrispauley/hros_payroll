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
                  <div className="navbar-brand">HROS Payroll 4.0</div>
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
                    <li><a href='payroll.html'>Payment Instructions</a></li>
                    {/* <li className='dropdown'>
                      <a className='dropdown-toggle'
                          data-toggle='dropdown' href=''>Payroll <span className='caret'></span></a>
                          <ul className='dropdown-menu'>
                            <li><a href='payroll.html'>WorkRelationshipLifecyle</a></li>
                            <li><a href='payroll.html'>Deductions</a></li>
                            <li><a href='payroll.html'>Payment Instruction</a></li>
                            <li><a href='payroll.html'>StatutoryInstructions</a></li>
                          </ul>
                    </li> */}

                    <li><a href='jschemaframe.html'>JSchema</a></li>
                    <li><a href='payrollschema.html'>PayrollSchema</a></li>
                  </ul>

                  <ul className='nav navbar-nav navbar-right'>
                    <li><a href='about.html'>About</a></li>
                    <li><a href='about.html'><User name={this.props.name}/></a></li>
                  </ul>

                </div>
              </div>
            </nav>
        );
    }
}

export default Nav;
