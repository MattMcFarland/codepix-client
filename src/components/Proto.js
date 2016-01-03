import React from 'react';
import { CodeForm } from './';

export class Proto extends React.Component {

  render() {
    return (
      <section style={{marginTop: '30px'}} className="container-fluid">
        <CodeForm history={this.props.history}/>
      </section>
    );
  }
}
