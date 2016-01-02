import React from 'react';
import ajax from 'superagent';
import {CodeCard} from './partials';
import { Button } from './partials/Elements';
import { scrollTo } from '../utils';

export class Single extends React.Component {

  constructor() {
    super();
    this.state = {};
  }
  handleRestart = () => {
    this.props.history.pushState(null, '/');
  }
  handleShare = () => {
    let target = document.getElementById(
      'share-codecard-' + this.state.card.id);

    scrollTo({target});
  }
  componentWillMount() {
    window.ga('send', 'pageview');
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
              &#8594; Add one
            </Button>
            <Button onClick={this.handleShare}
                    kind="link">
              &#8594; Share this
            </Button>
            <CodeCard {...this.state.card}/>
          </div> :
          <p>Loading Data...</p>}
      </div>
    );
  }
}
