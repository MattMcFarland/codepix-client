import React from 'react';

import {
  ResponsiveEmbed
} from 'react-bootstrap';

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

const Box = ({children}) => (
  <div className="container">
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
        <Box>
          <div className="row">
            <div className="col-lg-6">
              <h2 className="display-3">Code in an image.</h2>
              <p className="lead-1">
                Convert your code to look perfectly in a tweet card!
                codepix.io converts code of any language to a
                syntax highlighted image. This is done for free.
              </p>
            </div>
            <div className="col-lg-6">

              <ResponsiveEmbed a4by3>
                <embed type="image/png" src="/img/twitter2.png" />
              </ResponsiveEmbed>

            </div>
          </div>
        </Box>

      </section>
    );
  }
}
