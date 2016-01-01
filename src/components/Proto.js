import React from 'react';
import ajax from 'superagent';
import { ProtoForm, CodeCard } from './partials';
import { Button, Alert } from './partials/Elements';
import { scrollTo } from '../utils';

export class Proto extends React.Component {

  constructor() {
    super();
    this.state = {
      value: ''
    };
  }

  handleTextAreaChange = (e) => {
    this.setState({value: e.target.value});
  }
  handleRestart = () => {
    this.setState({
      value: '',
      newCard: ''
    });
  }
  handleShare = () => {
    let target = document.getElementById(
      'share-codecard-' + this.state.newCard.id);

    scrollTo({target});
  }
  handleSubmit = (e) => {
    e.preventDefault();
    ajax.post('/api/add')
      .send({code: this.state.value})
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (!err) {
          this.setState({value: ''});
          this.setState({newCard: res.body});
        }
      });
  }
  render() {
    return (
      <section>

        {this.state.newCard ?
          <div>
            <Alert kind="success">
              <p><strong>Awesome</strong> - You made a codepic.</p>
            </Alert>
            <Button onClick={this.handleRestart}
                    kind="link">
              &#8594; Do it again
            </Button>
            <Button onClick={this.handleShare}
                    kind="link">
              &#8594; Share
            </Button>
            <br/>
            <CodeCard {...this.state.newCard} />

            </div> :

          <ProtoForm onSubmit = {this.handleSubmit}
                     onChange = {this.handleTextAreaChange} />
        }

      </section>
    );
  }
}
