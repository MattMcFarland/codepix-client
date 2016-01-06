import alt from '../alt';
import ajax from 'superagent';

class AppActionsSpec {
  constructor() {
    this.generateActions(
      'signupPending',
      'signupSuccess',
      'signupFail',

      'toast',
      'addToast',
      'showSignupModal',
      'hideSignupModal',
      'showLoginModal',
      'hideLoginModal',

      'shiftQueue'

    );
  }

  signup({username, password, email}) {
      ajax.post('/api/signup')
        .send({
          username,
          password,
          email
        })
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .end((err, res) => {
          if (!err) {
            this.actions.signupSuccess(res);
          } else {
            this.actions.signupFail(err);
          }
        });
    this.actions.signupPending();
  }


  toast(options) {
    this.actions.addToast(options).then(() => {
      this.actions.shiftQueue();
    });
  }
}

export const AppActions = alt.createActions(AppActionsSpec);
