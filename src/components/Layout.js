import React from 'react';
import { Link } from 'react-router';

export class Layout extends React.Component {
  render() {
    return (
      <div>
        <header>
          <img alt="codepix.io" src="/img/logo.png"/>
        </header>
        <nav>
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
        </nav>
        <section>
          {this.props.children}
        </section>
      </div>
    );
  }
}
