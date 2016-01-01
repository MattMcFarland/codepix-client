import React from 'react';

export const ProtoForm = ({
  onSubmit,
  onChange
}) => (
  <form onSubmit = {onSubmit} >
    <fieldset className="form-group">
      <label htmlFor="pastefield">Paste code in here</label>
      <textarea
        id = "pastefield"
        className = "form-control"
        onChange = {onChange} />
    </fieldset>
    <div className="form-group">
      <button type="submit" className="btn btn-primary">
        Do it!
      </button>
    </div>
  </form>
);
