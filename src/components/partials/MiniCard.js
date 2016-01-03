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
  width: '506px',
  maxHeight: '254px',
  overflow: 'hidden',
  display: 'inline-block',
  background: 'linear-gradient(to bottom,  ' +
              'rgba(255,255,255,0) 0%,rgba(255,255,255,0) ' +
              '80%,rgba(255,255, 255,1) 100%)'
};

export const MiniCard = ({
  id, image, createdAt
  }) => (
  <div style={{ width: '584px', margin: '15px auto' }}
       id={'minicard-' + id} className="card smalltext">
    <div className="card-block">
      <header>
        <img style={{
              borderRadius: '4px',
              marginRight: '14px'
             }}
             src="/favicon-32x32.png"/>
        <strong>{moment(createdAt).fromNow()}</strong>
      </header>
      <div style={{marginLeft: '16px', paddingTop: '0'}}className="card-block">
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
