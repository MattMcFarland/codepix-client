import React from 'react';

export const ProtoForm = ({
  onSubmit,
  onChange
}) => (
  <form onSubmit = {onSubmit} >
    <fieldset className="form-group">
      <textarea
        placeholder="Put some code in here to convert to an image."
        id = "pastefield"
        className = "form-control"
        onChange = {onChange} />
    </fieldset>
    <div className="form-group">
      <button type="submit" className="btn btn-primary">
       Make the image!
      </button>
    </div>
  </form>
);
