import React from 'react';
import { Link } from 'react-router';

export class Layout extends React.Component {
  render() {
    return (
      <div>
        <nav className="container-fluid navbar navbar-light bg-faded">
          <div className="nav navbar-nav">
            <Link
              style={{paddingTop: '6px'}}
              className="navbar-brand"
              to="/"><img alt="Codepix" src="/img/brand.png"/></Link>
            <Link
              activeClassName='active'
              className="nav-item nav-link"
              to="/make">Make</Link>
            <Link
              activeClassName='active'
              className="nav-item nav-link"
              to="/list">List</Link>
          </div>
        </nav>
        <section className="container-fluid">
          {this.props.children}
        </section>
      </div>
    );
  }
}
