import React from 'react';

export class PasteArea extends React.Component {
  static displayName = 'PasteArea';

  handleTextAreaChange(value) {
    console.info(value);
    // do something idk
  }
  handleSubmit(e) {
    e.preventDefault();
  }
  render() {
    return (
      <form onSubmit = {this.handleSubmit} >
        <fieldset className="form-group">
          <label htmlFor="pastefield">Paste code in here</label>
          <textarea
            id = "pastefield"
            className = "form-control"
            onChange = {this.handleTextAreaChange} />
        </fieldset>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Do it!
          </button>
        </div>
      </form>
    );
  }
}
