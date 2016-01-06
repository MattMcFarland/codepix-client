import React from 'react';

import {
  Modal,
  Button,
  ResponsiveEmbed
} from 'react-bootstrap';

import { CodeForm, SignupForm } from './';
import { AppActions } from '../actions/AppActions';
import { AppStore } from '../stores/AppStore';
import NotificationSystem from 'react-notification-system';

const Heading = () => (
  <header>
    <h2 className="display-3">Syntax Highlighted Pics.</h2>
    <p className="lead-1">
      This is an open-sourced website that
converts code of any language into syntax-highlighted images fit
for a tweet
    </p>
    <p>
      Paste your code in the <var>textarea</var> below to get started.
      <strong>No Account required.</strong>
    </p>
  </header>
);

const Jumbo = ({children}) => (
  <div className="jumbotron jumbotron-fluid">
    <div className="container">
      {children}
    </div>
  </div>
);

const Box = ({children}) => (
  <div className="container">
    {children}
  </div>
);


export class Home extends React.Component {

  constructor() {
    super();
    this.state = {
      ...AppStore.getState()
    };
    this._notificationSystem = null;
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {
    AppStore.listen(this.onChange);
    this._notificationSystem = this.refs.notificationSystem;
  }
  componentWillUnmount() {
    AppStore.unlisten(this.onChange);
  }
  addNotification = (queue) => {
    let message = queue.slice(0, 1);
    this._notificationSystem.addNotification(message[0]);
  }
  onChange(state) {
    if (state.queue && state.queue.length) {
      setTimeout(this.addNotification(state.queue), 100);
    }
    this.setState(state);
  }
  render() {
    let { showSignupModal } = this.state;
    let onShowSignupForm = () => (AppActions.showSignupModal());
    let onHideSignupForm = () => (AppActions.hideSignupModal());
    let testToastMessage = () => (AppActions.toast({
      title: 'Hello hello hello',
      message: 'This is a test!!',
      level: 'info'
    }));
    return (
      <section>
        <Jumbo>
          <Heading/>
          <CodeForm history={this.props.history}/>
        </Jumbo>
        <Box>
          <div className="row">
            <div className="col-lg-6">
              <h2 className="display-3">Code in an image.</h2>
              <p className="lead-1">
                Convert your code to look perfectly in a tweet card!
                codepix.io converts code of any language to a
                syntax highlighted image. This is done for free.
                <button onClick={onShowSignupForm}>Show Modal</button>
                <button onClick={testToastMessage}>Toast Message</button>
              </p>
            </div>
            <div className="col-lg-6">

              <ResponsiveEmbed a4by3>
                <embed type="image/png" src="/img/twitter2.png" />
              </ResponsiveEmbed>

            </div>
          </div>
        </Box>

        {showSignupModal ?
          <Modal
            show={showSignupModal}
            onHide={onHideSignupForm}>
            <Modal.Header closeButton>
              <Modal.Title>Signup</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <SignupForm history={this.props.history}/>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={onHideSignupForm}>
                Cancel
              </Button>
            </Modal.Footer>
          </Modal>
          : ''}
        <NotificationSystem ref="notificationSystem" />
      </section>
    );
  }
}
