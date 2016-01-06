import React from 'react';
import ajax from 'superagent';
import Select from 'react-select';
import { Expander, Radio } from './partials/Elements';
import { ProtoFormClass, FormErrors } from './partials';
import { codeOptions } from './config';


export class CodeForm extends React.Component {

  constructor() {
    super();
    var isOptionsExpanded = localStorage.getItem('isOptionsExpanded');
    if (isOptionsExpanded && isOptionsExpanded === 'false') {
      isOptionsExpanded = false;
    }
    this.state = { isOptionsExpanded,
      visibility: localStorage.getItem('visibility') || 'public',
      codeLang: localStorage.getItem('pform_codeLang') || 'auto',
      textAreaValue: localStorage.getItem('pform_textAreaValue') || '',
      titleValue: localStorage.getItem('pform_titleValue') || '',
      descriptionValue: localStorage.getItem('pform_descriptionValue') || ''
    };
  }

  clearLocalStorage = () => {
    localStorage.removeItem('pform_textAreaValue');
    localStorage.removeItem('pform_titleValue');
    localStorage.removeItem('pform_descriptionValue');
  }

  clearState = () => {
    this.setState({textAreaValue: ''});
  }

  handleTextAreaChange = (e) => {
    let val = e.target.value;
    this.setState({textAreaValue: val});
    localStorage.setItem('pform_textAreaValue', val);
  }
  handleTitleChange = (e) => {
    let val = e.target.value;
    this.setState({titleValue: val});
    localStorage.setItem('pform_titleValue', val);
  }
  handleDescriptionChange = (e) => {
    let val = e.target.value;
    this.setState({descriptionValue: val});
    localStorage.setItem('pform_descriptionValue', val);
  }
  handleVisibilityChange = (e) => {
    this.setState({visibility: e.currentTarget.value});
    localStorage.setItem('visibility', e.currentTarget.value);
  }
  handleCodeStyleChange = (value) => {
    this.setState({codeLang: value});
    localStorage.setItem('pform_codeLang', value);
  }
  handleToggleOptions = () => {
    let newSetting = !this.state.isOptionsExpanded;
    localStorage.setItem('isOptionsExpanded', newSetting);
    this.setState({isOptionsExpanded: newSetting});
  }

  componentWillMount() {
    window.ga('send', 'pageview', window.location.pathname);
  }

  validate = () => {
    var errors = [];
    var { textAreaValue, codeLang } = this.state;
    const rules = [
      {
        failOn: textAreaValue.trim().length < 10,
        error: 'Please use at least 10 characters.'
      },
      {
        failOn: codeLang === '',
        error: 'Please select a language.'
      }
    ];

    rules.forEach((rule) => {

      if (rule.failOn) {
        errors.push(rule);
      }
    });

    if (errors.length) {
      return {
        errors: errors,
        valid: false
      };
    } else {
      return {
        errors: null,
        valid: true
      };
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let val = this.state.textAreaValue.trim();
    this.setState({textAreaValue: val});
    localStorage.setItem('pform_textAreaValue', val);
    var valid = this.validate();
    if (valid.errors) {

      let article = valid.errors.length > 1 ? 'are' : 'is';
      let noun = valid.errors.length > 1 ? 'errors' : 'error';
      let count = valid.errors.length > 1 ? valid.errors.length : 'one';

      this.setState({
        error: {
          message: `There ${article} ${count} ${noun},  please try again.`,
          data: valid.errors
        }
      });
      return;
    }
    { /* Ajax Post */
      ajax.post('/api/add')
        .send({
          title: this.state.titleValue,
          content: this.state.descriptionValue,
          language: this.state.codeLang,
          visibility: this.state.visibility,
          code: this.state.textAreaValue
        })
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .set('X-no-legacy')
        .end((err, res) => {
          if (!err) {
            this.clearLocalStorage();
            this.clearState();
            this.props.history.pushState(null, '/code/' + res.body.id);
          }
        });
    }
  }

  render() {
    // handlers
    let {
          handleSubmit,
          handleTextAreaChange,
          handleToggleOptions,
          handleVisibilityChange,
          handleCodeStyleChange,
          handleTitleChange,
          handleDescriptionChange
          } = this;
    // state
    let {
          codeLang,
          isOptionsExpanded,
          error,
          textAreaValue,
          titleValue,
          descriptionValue,
          visibility
          } = this.state;

    return (
      <section>
          {error ? <FormErrors {...error} /> : ''}
          <ProtoFormClass onSubmit={handleSubmit}>
            <textarea
              placeholder="Put some code in here to convert to an image."
              value = {textAreaValue}
              onChange = {handleTextAreaChange} />
            <div style={{ marginTop: '-15px',
                          marginLeft: '-10px',
                          marginBottom: '10px'}}>
              <Expander
                isExpanded={isOptionsExpanded}
                onToggle={handleToggleOptions}
                title="Options">
                <hr/>
                <div style={{marginLeft: '15px'}}>
                  <fieldset className="form-group">
                    <label style={{display: 'block'}}>Language:
                      <Select
                        name="codestyle"
                        value={codeLang}
                        options={codeOptions}
                        onChange={handleCodeStyleChange}/>
                    </label>
                  </fieldset>
                  <fieldset className="form-group">
                    <Radio name="visibility" value="public"
                           set={visibility} onChange={handleVisibilityChange}>
                      Public
                    </Radio>
                    <Radio name="visibility" value="private"
                           set={visibility} onChange={handleVisibilityChange}>
                      Private
                    </Radio>
                  </fieldset>
                  <fieldset className="form-group">
                    <label style={{display: 'block'}}>Title:
                      <input
                        type="text"
                        value={titleValue}
                        onChange={handleTitleChange}
                        className="form-control"/>
                    </label>
                  </fieldset>
                  <fieldset className="form-group">
                    <label style={{display: 'block'}}>Description:
                      <textarea
                        value={descriptionValue}
                        onChange={handleDescriptionChange}
                        className="form-control"/>
                    </label>
                  </fieldset>
                </div>
              </Expander>
            </div>
          </ProtoFormClass>
      </section>
    );
  }
}
