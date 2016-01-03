import React from 'react';
import { Link } from 'react-router';

/*
function windowPath() {
  return window.location.protocol + '//' +
    window.location.host + '/';
}
*/
const imgStyle = {
  width: '506px',
  maxHeight: '506px',
  overflow: 'hidden',
  display: 'inline-block',
  background: 'linear-gradient(to bottom,  ' +
              'rgba(255,255,255,0) 0%,rgba(255,255,255,0) ' +
              '80%,rgba(255,255, 255,1) 100%)'
};

export const MiniCard = ({
  id, image, createdAt
  }) => (
  <div style={{ width: '510' }}id={'minicard-' + id} className="card">
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
        <Link to={'/code/' + id}>
          (...more)
        </Link>
      </p>
    </div>
  </div>
);
