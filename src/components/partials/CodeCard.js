import React from 'react';
import { PastaLink, Expander } from './Elements';
const hljs = require('highlight.js');

function highlight(txt) {
  return {__html: hljs.highlightAuto(txt).value};
}

function windowPath() {
  return window.location.protocol + '//' +
    window.location.host + '/';
}



export const CodeCard = ({
  id, creator, title, description, image, createdAt,
  isShareExpanded,
  onShareExpandToggle
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
      <div id={'share-codecard-' + id} className="list-group list-group-flush">
        <Expander title="Share Options"
                  isExpanded={isShareExpanded}
                  onToggle={onShareExpandToggle}>
          <PastaLink
            key="0"
            label="Share Link"
            value={windowPath() + 'code/' + id}/>
          <PastaLink
            key="1"
            label="Direct Link"
            value={windowPath() + image}/>
          <PastaLink
            key="3"
            label="Embend in HTML"
            value={
              '<blockquote class="codepix-embed">' +
               '<a href="' + windowPath() + image + '">' +
              windowPath() + image + '</a></blockquote>'
              } />
          <PastaLink
            key="4"
            label="BBCode"
            value={
              '[img]' +
              windowPath() + image +
              '[/img]'
              } />
          <PastaLink
            key="5"
            label="Markdown"
            value={
              '[codepix](' +
              windowPath() + image +
              ')'
              } />
        </Expander>

      </div>
    </div>
  </div>
);
