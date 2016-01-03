import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';

/*
function windowPath() {
  return window.location.protocol + '//' +
    window.location.host + '/';
}
*/
const imgStyle = {
  width: '100%',
  maxHeight: '254px',
  overflow: 'hidden'
};

export const MiniCard = ({
  id, image, createdAt
  }) => (
  <div className="card minicard smalltext" id={'minicard-' + id} >
    <div className="card-block">
      <header>
        <img src="/favicon-32x32.png"/>
        <strong>{moment(createdAt).fromNow()}</strong>
      </header>
      <div className="body card-block">
      <div style={imgStyle}>
        <Link className="text-muted" to={'/code/' + id}>
          <img className="card-img-top" src={'/' + image} />
        </Link>
      </div>
        <div className="card-block">
          <p className="card-text">
            <small className="text-muted">
              {createdAt}
            </small>
          </p>
          <p className="card-actions">
            <Link className="text-muted" to={'/code/' + id}>
              (...more)
            </Link>
          </p>
        </div>
      </div>
    </div>
  </div>
);
