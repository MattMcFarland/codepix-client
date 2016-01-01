import React from 'react';
import { Link } from 'react-router';

export class Layout extends React.Component {
  render() {
    return (
      <div>
        <h1>codepix.io</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/code">List</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}
