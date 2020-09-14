import React, { useState } from 'react';
import Inputs from './Inputs';

const Form = () => {
  const [ownerState, setOwnerState] = useState({
    owner: '',
    description: '',
    
  });

  const handleOwnerChange = (e) =>
    setOwnerState({
      ...ownerState,
      [e.target.name]: [e.target.value],
    });

  const blankPrompt = { label: '', field: '' };
  const [promptState, setPromptState] = useState([{ ...blankPrompt }]);

  const addPrompt = () => {
    setPromptState([...promptState, { ...blankPrompt }]);
  };

  const handlePromptChange = (e) => {
    const updatedPrompts = [...promptState];
    updatedPrompts[e.target.dataset.idx][e.target.className] = e.target.value;
    setPromptState(updatedPrompts);
  };

  return (
    <form>
      <label htmlFor="owner">Owner</label>
      <input
        type="text"
        name="owner"
        id="owner"
        className="input"
        value={ownerState.owner}
        onChange={handleOwnerChange}
      />
      <label htmlFor="description">Description</label>
      <input
        type="text"
        name="description"
        id="description"
        className="input"
        value={ownerState.description}
        onChange={handleOwnerChange}
      />
      {promptState.map((val, idx) => (
        <Inputs
          key={`cat-${idx}`}
          idx={idx}
          promptState={promptState}
          handlePromptChange={handlePromptChange}
        />
      ))}
      <input type="submit" value="Submit" className="button is-link" />
      <input type="button" className="button is-link is-light" value="Add New Prompt" onClick={addPrompt} />
    </form>
  );
};

export default Form;
