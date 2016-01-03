import React from 'react';
// import { /* Icon, Button,*/ } from './Elements';

const convertChildren = (children) => {
  return React.Children.map(children, (node) => {
    if (node.type === 'div') {
      return node;
    }
    if (node.type === 'Expander') {
      return convertChildren(node.props.children);
    }
    let { className, label, id } = node.props;
    let appendedClassName = (className ?
      className + ' form-control' : 'form-control'
    );
    // Modifies the immutable node via clone
    let addNode = Object.assign({}, node, {
      props: {
        ...node.props,
                   id,
        className: appendedClassName
      }
    });
    // Returns the new child node
    return (
      <fieldset className='form-group'>
        {label && id ? <label htmlFor={id}>{label}</label> : ''}
        {addNode}
      </fieldset>
    );
  });
};

export class ProtoFormClass extends React.Component {
  // React.Children.map(object children, function fn [, object thisArg])

  render() {
    let nodes = convertChildren(this.props.children);
    let {onSubmit} = this.props;
    return (
      <form onSubmit={onSubmit}>
        {nodes}
        <div className='form-group'>
          <button type='submit' className='btn btn-primary'>
            Make the image!
          </button>
        </div>
      </form>
    );
  }
}


export const ProtoForm = ({
  onSubmit,
  onTextAreaChange,
  }) => (
  <form onSubmit = {onSubmit} >
    <fieldset className='form-group'>
      <textarea
        placeholder='Put some code in here to convert to an image.'
        id = 'pastefield'
        className = 'form-control'
        onChange = {onTextAreaChange} />
    </fieldset>
    <div className='form-group'>
      <button type='submit' className='btn btn-primary'>
        Make the image!
      </button>
    </div>
  </form>
);
