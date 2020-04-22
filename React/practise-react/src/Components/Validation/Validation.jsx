import React from 'react';

const validation = (props) =>
{
  let validationMessage = 'Text Too Long';

  if (props.textLength <= 5) {
    validationMessage = 'Text too Short';
  }

  return (
    <div>
      <p>Text Length: {props.textLength}</p>
      {/* { props.textLength > 5 ? <p>Text Too Long!!</p> : <p>Text Too Short!!</p>  } */}
      <p>{validationMessage}</p>
    </div>
)};

export default validation;