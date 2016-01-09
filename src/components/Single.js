import React from 'react';
import ajax from 'superagent';
import {CodeCard, LegacyCard} from './partials';
import { Button } from './partials/Elements';
import { scrollTo } from '../utils';

export class Single extends React.Component {

  constructor() {
    super();
    this.state = {
      isShareExpanded: localStorage.getItem('isShareExpanded') || false,
      tab: localStorage.getItem('tab') || 'image'
    };
  }
  handleShareToggle = () => {
    let newSetting = !this.state.isShareExpanded;
    localStorage.setItem('isShareExpanded', newSetting);
    this.setState({isShareExpanded: newSetting});
  }
  handleRestart = () => {
    this.props.history.pushState(null, '/make');
  }
  handleShare = () => {
    let target = document.getElementById(
      'share-codecard-' + this.state.card.id);
    this.setState({isShareExpanded: true});
    scrollTo({target});
  }
  handleImageTabClick = () => {
    localStorage.setItem('tab', 'image');
    this.setState({tab: 'image'});
  }
  handleCodeTabClick = () => {
    localStorage.setItem('tab', 'code');
    this.setState({tab: 'code'});
  }
  componentWillMount() {
    window.ga('send', 'pageview', window.location.pathname);
    ajax.get('/api/code/' + this.props.params.id)
      .end((err, res) => {
        if (!err) {
          if (res.body.image) {
            this.setState({legacy: res.body});
          } else {
            this.setState({value: ''});
            this.setState({card: res.body});
          }
        }
      });
  }

  render() {
    return (
      <div>
        {this.state.card ?
          <div>
            <Button onClick={this.handleRestart}
                    kind="link">
              &#8594; Make Another
            </Button>
            <Button onClick={this.handleShare}
                    kind="link">
              &#8594; Share this
            </Button>
            <CodeCard
              onShareExpandToggle={this.handleShareToggle}
              isShareExpanded={this.state.isShareExpanded}
              onImageTabClick={this.handleImageTabClick}
              onCodeTabClick={this.handleCodeTabClick}
              tab={this.state.tab}
              {...this.state.card} />
          </div> :
          ''}
        {this.state.legacy ?
          <div>
            <Button onClick={this.handleRestart}
                    kind="link">
              &#8594; Make Another
            </Button>
            <Button onClick={this.handleShare}
                    kind="link">
              &#8594; Share this
            </Button>
            <LegacyCard
              onShareExpandToggle={this.handleShareToggle}
              isShareExpanded={this.state.isShareExpanded}
              onImageTabClick={this.handleImageTabClick}
              onCodeTabClick={this.handleCodeTabClick}
              tab={this.state.tab}
              {...this.state.legacy} />
          </div> :
          <p>Loading Data...</p>}
      </div>
    );
  }
}
