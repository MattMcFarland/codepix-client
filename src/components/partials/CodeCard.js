import React from 'react';
import { PastaLink } from './Elements';
const hljs = require('highlight.js');

function highlight(txt) {
  return {__html: hljs.highlightAuto(txt).value};
}

export const CodeCard = ({
  id, creator, title, description, image, createdAt
  }) => (
  <div id={'codecard-' + id} className="card">
    <div className="card-block">
      <h4 className="card-title">{title}</h4>
      <h6 className="card-subtitle text-muted">{createdAt}</h6>
    </div>
    <div className="card-block">
      <img className="card-img-top" src={'/' + image} />
      <div className="card-text">
        <pre>
          <code>
            <div dangerouslySetInnerHTML={highlight(description)}/>
          </code>
        </pre>
      </div>
      <p className="card-text">
        <small className="text-muted">
          {createdAt}
        </small>
        <small className="text-muted">
          {creator}
        </small>
      </p>
      <ul id={'share-codecard-' + id} className="list-group list-group-flush">
        <li className="list-group-item">
          <PastaLink
            key="0"
            label="Link"
            value={window.location + 'code/' + id}/>
        </li>
        <li className="list-group-item">
          <PastaLink
            key="1"
            label="Direct"
            value={window.location + image}/>
        </li>
      </ul>
    </div>
  </div>
);
