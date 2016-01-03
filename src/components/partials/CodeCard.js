import React from 'react';
import { PastaLink, Expander, Icon } from './Elements';
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
  onShareExpandToggle,
  onImageTabClick,
  onCodeTabClick,
  tab = 'image'
  }) => (
  <div id={'codecard-' + id} className='card'>
    <header className='card-block'>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a href="#"
               className={'nav-link' + (tab === 'image' ? ' active' : '')}
               onClick={onImageTabClick} >
              <Icon name='image'/>
            </a>
          </li>
          <li className="nav-item">
            <a href="#"
               className={'nav-link' + (tab === 'code' ? ' active' : '')}
               onClick={onCodeTabClick} >
              <Icon name='code'/>
            </a>
          </li>
        </ul>
    </header>
    <div style={{paddingTop: '0'}} className='card-block'>
      <div style={{display: tab === 'image' ? 'block' : 'none'}}>
      <img className='card-img-top' src={'/' + image} />
      </div>
      <div style={{display: tab === 'code' ? 'block' : 'none'}}>
      <div className='card-text'>
        <pre>
          <code>
            <div dangerouslySetInnerHTML={highlight(description)}/>
          </code>
        </pre>
      </div>
      </div>
      <p className='card-text'>
        <small>{title}</small>
      </p>
      <p className='card-text'>
        <small className='text-muted'>
          {createdAt}
        </small>
        <small className='text-muted'>
          {creator}
        </small>
      </p>
      <div id={'share-codecard-' + id} className='list-group list-group-flush'>
        <Expander title='Share Options'
                  isExpanded={isShareExpanded}
                  onToggle={onShareExpandToggle}>
          <PastaLink
            key='0'
            label='Share Link'
            value={windowPath() + 'code/' + id}/>
          <PastaLink
            key='1'
            label='Direct Link'
            value={windowPath() + image}/>
          <PastaLink
            key='3'
            label='Embend in HTML'
            value={
              '<blockquote class="codepix-embed">' +
               '<a href="' + windowPath() + image + '">' +
              windowPath() + image + '</a></blockquote>'
              } />
          <PastaLink
            key='4'
            label='BBCode'
            value={
              '[img]' +
              windowPath() + image +
              '[/img]'
              } />
          <PastaLink
            key='5'
            label='Markdown'
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
