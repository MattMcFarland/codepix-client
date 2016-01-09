import React from 'react';
import { PastaLink, Expander, Icon } from './Elements';
const hljs = require('highlight.js');

function highlight(txt) {
  return {__html: hljs.highlightAuto(txt).value};
}


export const CodeCard = ({
  shasum, author, title, description, content, imageUrl, shareUrl, createdAt,
  isShareExpanded,
  onShareExpandToggle,
  onImageTabClick,
  onCodeTabClick,
  tab = 'image'
  }) => (
  <div id={'codecard-' + shasum} className='card'>

    <header className='card-block'>
        <ul className="nav nav-tabs">
          <li className={'nav-link' + (tab === 'image' ? ' active' : '')}>
            <a href="#"
               className={'nav-link' + (tab === 'image' ? ' active' : '')}
               onClick={onImageTabClick} >
              <Icon name='image'/>
            </a>
          </li>
          <li className={'nav-link' + (tab === 'code' ? ' active' : '')}>
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
      <img className='card-img-top' src={'/c0dez/data/' + shasum + '.png'} />
      </div>
      <div style={{display: tab === 'code' ? 'block' : 'none'}}>
      <div className='card-text'>
        <pre>
          <code>
            <div dangerouslySetInnerHTML={highlight(content)}/>
          </code>
        </pre>
      </div>
      </div>
      <p className='card-text'>
        <small>{title}</small>
        {description}
      </p>
      <p className='card-text'>
        <small className='text-muted'>
          {createdAt}
        </small>
        <small className='text-muted'>
          {author}
        </small>
      </p>
      <div id={'share-codecard-' + shasum}
           className='list-group list-group-flush'>
        <Expander title='Share Options'
                  isExpanded={isShareExpanded}
                  onToggle={onShareExpandToggle}>
          <PastaLink
            key='0'
            label='Share Link'
            value={shareUrl}/>
          <PastaLink
            key='1'
            label='Direct Link'
            value={imageUrl}/>
          <PastaLink
            key='3'
            label='Embend in HTML'
            value={
              '<blockquote class="codepix-embed">' +
               '<a href="' + shareUrl + '">' +
              imageUrl + '</a></blockquote>'
              } />
          <PastaLink
            key='4'
            label='BBCode'
            value={
              '[img]' +
              imageUrl +
              '[/img]'
              } />
          <PastaLink
            key='5'
            label='Markdown'
            value={
              '[codepix](' +
              imageUrl +
              ')'
              } />
        </Expander>

      </div>
    </div>
  </div>
);
