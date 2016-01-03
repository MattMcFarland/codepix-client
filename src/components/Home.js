import React from 'react';
import { CodeForm } from './';

const Heading = () => (
  <header>
    <h2 className="display-3">Syntax Highlighted Pics.</h2>
    <p className="lead-1">
      This is an open-sourced website that
converts code of any language into syntax-highlighted images fit
for a tweet
    </p>
    <p>
      Paste your code in the <var>textarea</var> below to get started.
      <strong>No Account required.</strong>
    </p>
  </header>
);

const Jumbo = ({children}) => (
  <div className="jumbotron jumbotron-fluid">
    <div className="container">
      {children}
    </div>
  </div>
);

const FluidBox = ({children}) => (
  <div className="container-fluid">
    {children}
  </div>
);


export class Home extends React.Component {


  render() {

    return (
      <section>
        <Jumbo>
          <Heading/>
          <CodeForm history={this.props.history}/>
        </Jumbo>
        <FluidBox>
          codepix.io converts code of any language to a
          syntax highlighted image. This is done for free.
        </FluidBox>
      </section>
    );
  }
}
