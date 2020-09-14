import React from 'react';
import PropTypes from 'prop-types';

const Inputs = ({ idx, promptState, handlePromptChange }) => {
  const labelId = `label-${idx}`;
  const fieldId = `field-${idx}`;
  return (
    <div key={`label-${idx}`}>
      <label htmlFor={labelId}>{`Label #${idx + 1}`}</label>
      <input
        type="text"
        name={labelId}
        data-idx={idx}
        id={labelId}
        className="input"
        value={promptState[idx].label}
        onChange={handlePromptChange}
      />
      <label htmlFor={fieldId}>Field</label>
      <textarea
        name={fieldId}
        data-idx={idx}
        id={fieldId}
        value={promptState[idx].field}
        onChange={handlePromptChange}
        className="textarea"
      />
    </div>
  );
};

Inputs.propTypes = {
  idx: PropTypes.number,
  promptState: PropTypes.array,
  handlePromptChange: PropTypes.func,
};

export default Inputs;
