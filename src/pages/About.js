import React from 'react';

const About = () => (
  <div className='row' style={{marginTop: '50px'}}>

    <div className='jumbotron'>
        <h1>About </h1>
        <p>This is an independently developed web application to facilatate the development of the HROS Payroll Standard.</p>

        <p><a className="btn btn-primary btn-sm"
          href="https://github.com/chrispauley/hros_payroll"
          role="button">GitHub Repo</a></p>
    </div>

    <div className='row'>
      <div className='col-sm-4'>
        <h3>HR Open Standards</h3>
        <p>Would you like to participate in developing the Payroll standard?</p>
        <img src='hropen_logosq.png' alt=''/>
        <ul className='fa-ul'>
          <li><a href='http://hropenstandards.org/'>HR Open</a></li>
          <li><a target='_new' href='https://github.com/hropen/Payroll'>
            <i id="social-fb" className="fa fa-github-square fa-1x social fa-fw"></i>
            HROpen Repos</a>
          </li>
        </ul>
      </div>

      <div className='col-sm-4'>
        <h2>This WebApp</h2>
        <p>This application was built using the HTML5, Bootstrap 3.3.7, React 16</p>
      </div>

      <div className='col-sm-4'>
        <h2>Chris Pauley</h2>
        <p>Hire Me! I am currently looking for gainful employment. I am interested in a full time permanent position.
        </p>
        <p>I am an experienced schema editor for XSD, JSON Schemas, and RDBMS's. </p>
        <ul className='fa-ul'>
          <li><a target='_new' href='https://www.linkedin.com/in/christopherpauley/'>
            <i id="social-fb" className="fa fa-linkedin-square fa-1x social fa-fw"></i>
            LinkedIn</a>
          </li>
          <li><a target='_new' href='https://github.com/chrispauley/chrispauley'>
            <i id="social-fb" className="fa fa-github-square fa-1x social fa-fw"></i>
            My Repos</a>
          </li>
        </ul>
      </div>

    </div>

  </div>

);


export default About;
