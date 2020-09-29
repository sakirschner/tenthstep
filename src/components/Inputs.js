import React from 'react';
import PropTypes from 'prop-types';

const Inputs = ({ idx, promptState, handlePromptChange }) => {
  const promptId = `prompt-${idx}`;
  // const fieldId = `field-${idx}`;
  return (
    <div key={`prompt-${idx}`}>
      <label htmlFor={promptId}>{`Prompt #${idx + 1}`}</label>
      <input
        type="text"
        title="prompt"
        name={promptId}
        data-idx={idx}
        id={promptId}
        className="input"
        value={promptState[idx].prompt}
        onChange={handlePromptChange}
      />
      {/* <label htmlFor={fieldId}>Field</label>
      <textarea
        name={fieldId}
        data-idx={idx}
        id={fieldId}
        value={promptState[idx].field}
        onChange={handlePromptChange}
        className="textarea"
      /> */}
    </div>
  );
};

Inputs.propTypes = {
  idx: PropTypes.number,
  promptState: PropTypes.array,
  handlePromptChange: PropTypes.func,
};

export default Inputs;
