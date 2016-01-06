import alt from '../alt';
import { AppActions } from '../actions/AppActions';


class AppStoreSpec {
  constructor() {
    this.bindActions(AppActions);
    this.user = JSON.parse(document.getElementById('user'));
    this.showSignupModal = false;
    this.showLoginModal = false;
    this.signupPending = false;
    this.queue = [];
  }

  onShowSignupModal() {
    this.setState({showSignupModal: true});
  }

  onHideSignupModal() {
    this.setState({showSignupModal: false});
  }

  onShowLoginModal() {
    this.setState({showLoginModal: true});
  }

  onHideLoginModal() {
    this.setState({showLoginModal: false});
  }

  onSignupPending = () => (this.signupPending = true);

  onSignupSuccess(res) {
    this.user = res.body;
    this.signupPending = false;
    this.showSignupModal = false;
  }
  onSignupFail() {
    this.error = {
      message: 'error'
    };
    this.signupPending = false;
  }

  onLoginPending = () => (this.loginPending = true);

  onLoginSuccess(res) {
    this.user = res.body;
    this.loginPending = false;
    this.showLoginModal = false;
  }
  onLoginFail() {
    this.error = {
      message: 'error'
    };
    this.loginPending = false;
  }

  onAddToast(options) {
    return new Promise(resolve, reject) {
      try {
        resolve(this.queue.push(options));
      }
      catch (er) {
        reject(er);
      }
    }

  }

  onShiftQueue() {
    this.queue.shift();
  }

}

export const AppStore =
               alt.createStore(AppStoreSpec, 'AppStore');
