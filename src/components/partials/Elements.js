import React from 'react';

export const Button = ({
  children,
  onClick,
  kind = 'info'
  }) => (
  <button onClick={onClick} type='button' className={'btn btn-' + kind}>
    {children}
  </button>
);

export const Icon = ({
  name
  }) => (
  <span className={'icon icon-' + name}/>
);

export const Alert = ({
  children,
  kind = 'info'
  }) => (
  <div className={'alert alert-' + kind}>
    {children}
  </div>
);

const selectAll = (e) => {
  let target = e.target;
  target.setSelectionRange(0, target.value.length);
};

export const PastaLink = ({
  label,
  value
}) => (
  <div className='form-group'>
    <label>{label}</label>
    <input
      className='form-control'
      readOnly
      type='text' value={value} onClick={selectAll} />
  </div>
);

const Title = ({
  children
}) => (
  <h5>
    {children}
  </h5>
);

export const Expander = ({
  isExpanded,
  title,
  children,
  onToggle
}) => (
  <div>
    <Title>
      {title}
      <Button kind="link" onClick={onToggle}>
        <Icon name={isExpanded ? 'caret-down' : 'caret-right'}/>
      </Button>
    </Title>
    {isExpanded ? children : ''}
  </div>
);
