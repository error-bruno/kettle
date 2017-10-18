import React from 'react';

const Form = props => (
  <form
    {...props}
    onSubmit={e => e.preventDefault()}
  />
);

export default Form;
