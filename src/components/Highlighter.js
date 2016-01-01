import React from 'react';

const hljs = require('highlight.js');

function highlight(txt) {
  return {__html: hljs.highlightAuto(txt)};
}

export class Highlighter extends React.Component {
  render() {
    return (
      <pre>
        <code dangerouslySetInnerHTML={highlight(this.props.code)}/>
      </pre>
    );
  }
}
