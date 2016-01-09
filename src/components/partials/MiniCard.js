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
  dateCreated,
  id,
  title,
  description,
  // imageUrl,
  shareUrl,
  shasum,
  author
  }) => (
  <div className="panel minicard smalltext" id={'minicard-' + id} >
    <div className="panel-body">
      <header>

        {author && author.avatar ?
          <img style={{width: '32px', height: '32px'}}
               src={author.avatar} /> :
            <img src="/favicon-32x32.png"/>}

        <strong
          style={{marginTop: '-1em'}}>
          {author ? author.username : ''}
        </strong>
       <p style={{marginLeft: '46px'}}> {moment(dateCreated).fromNow()}</p>

      </header>
      <div className="body panel-body">
      <div style={imgStyle}>

        <Link className="text-muted" to={'/code/' + shasum}>
          <img
            className="card-img-top"
            src={'/c0dez/data/' + shasum + '.png'} />
        </Link>
      </div>
        <div className="panel-body">
          <p className="card-text">
            {title}
          </p>
          <p>
            <small>{description}</small>
          </p>
          <p className="card-actions">
            <Link rel="canonical" className="text-muted" to={shareUrl}>
              (...more)
            </Link>
          </p>
        </div>
      </div>
    </div>
  </div>
);
