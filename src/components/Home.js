import React from 'react';
import ajax from 'superagent';
import { ProtoForm } from './partials';
import { scrollTo } from '../utils';


export class Home extends React.Component {

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

  componentWillMount() {
    window.ga('send', 'pageview');
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
          // this.setState({location: '/code/' + res.body.id});
          this.props.history.pushState(null, '/code/' + res.body.id);
        }
      });
  }
  render() {
    return (
      <section>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
          <h2 className="display-3">Syntax Highlighted Pics.</h2>
          <p className="lead-1">This is an open-sourced website that
          converts code of any language into syntax-highlighted images fit
          for a tweet</p>
            <p>
            Paste your code in the <var>textarea</var> below to get started.
            <strong>No Account required.</strong>
            </p>
            <ProtoForm onSubmit = {this.handleSubmit}
                       onChange = {this.handleTextAreaChange} />
          </div>
        </div>
        <div className="container-fluid">
          <p>codepix.io converts code of any language to a syntax highlighted
          image. This is done for free.</p>
        </div>


      </section>
    );
  }
}
