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

        <strong>{author ? author.username : ''}</strong>
        <strong>{moment(dateCreated).fromNow()}</strong>

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
            {description}
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
