import React from 'react';
import ajax from 'superagent';
import {CodeCard} from './partials';

export class Single extends React.Component {

  constructor() {
    super();
    this.state = {};
  }
  componentWillMount() {
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
        { this.state.card ?
          <CodeCard {...this.state.card} /> :
          <p>Loading Data...</p>}
      </div>
    );
  }
}
