import React from 'react';
import ajax from 'superagent';
import {CodeCard} from './partials';
import { Button } from './partials/Elements';
import { scrollTo } from '../utils';

export class Single extends React.Component {

  constructor() {
    super();
    this.state = {
      isShareExpanded: localStorage.getItem('isShareExpanded')
    };
  }
  handleShareToggle = () => {
    console.log('handleShareToggle');
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
  componentWillMount() {
    window.ga('send', 'pageview', window.location.pathname);
    ajax.get('/api/code/' + this.props.params.id)
      .end((err, res) => {
        if (!err) {
          this.setState({value: ''});
          this.setState({card: res.body});
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
              {...this.state.card} />
          </div> :
          <p>Loading Data...</p>}
      </div>
    );
  }
}
