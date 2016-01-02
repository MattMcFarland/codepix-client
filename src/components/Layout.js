import React from 'react';
import { Link } from 'react-router';

export class Layout extends React.Component {
  render() {
    return (
      <div>
        <h1>codepix.io</h1>
        <ul>
          <li><Link to="/">Home (Post)</Link></li>
          <li><Link to="/list">List</Link></li>
          <li>Source
          (<a href="https://github.com/MattMcFarland/codepix-client"
               target="blank">
              client
            </a>) ..
          (<a href="https://github.com/MattMcFarland/codepix-server"
              target="blank">
            server
          </a>)
          </li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}
