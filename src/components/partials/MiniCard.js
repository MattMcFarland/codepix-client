import React from 'react';
import { PastaLink } from './Elements';

function windowPath() {
  return window.location.protocol + '//' +
    window.location.host + '/';
}

const imgStyle = {
  maxHeight: '360px',
  overflow: 'hidden',
  display: 'inline-block',
  background: 'linear-gradient(to bottom,  ' +
              'rgba(255,255,255,0) 0%,rgba(255,255,255,0) ' +
              '80%,rgba(255,255, 255,1) 100%)'
};

export const MiniCard = ({
  id, image, createdAt
  }) => (
  <div style={{ maxWidth: '500px' }}id={'minicard-' + id} className="card">
    <div className="card-block">
      <div style={imgStyle}>
        <img className="card-img-top" src={'/' + image} />
      </div>
      <p className="card-text">
        <small className="text-muted">
          {createdAt}
        </small>
      </p>
      <p className="card-actions">
        <a href={windowPath() + 'code/' + id}
           className="btn btn-primary-outline">
          Detail View...
        </a>
      </p>
    </div>
  </div>
);