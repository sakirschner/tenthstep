import React, { useState } from 'react';
import Inputs from './Inputs';
import FinalForm from './FinalForm';

const Form = () => {
  const [titleState, setTitleState] = useState({
    title: '',
    date: '',
  });

  const handleTitleChange = (e) =>
    setTitleState({
      ...titleState,
      [e.target.name]: [e.target.value],
    });

  const blankPrompt = { prompt: '' };
  const [promptState, setPromptState] = useState([{ ...blankPrompt }]);

  const addPrompt = () => {
    setPromptState([...promptState, { ...blankPrompt }]);
  };

  const handlePromptChange = (e) => {
    const updatedPrompts = [...promptState];
    updatedPrompts[e.target.dataset.idx][e.target.title] = e.target.value;
    console.log(updatedPrompts);
    setPromptState(updatedPrompts);
  };

  const toggleModal = () => {
    setDisplayModal(!displayModal);
  };

  // const handleCloseModal = () => {
  //   setDisplayModal(false);
  // };

  const [displayModal, setDisplayModal] = useState(false);

  // const toggleSubmittedForm = () => {
  //   console.log("here");
  //   console.log(submittedState);
  //   setSubmittedState(submittedState => !submittedState);
  //   console.log("after " + submittedState)
  // }

  return (
    <div>
      <form>
        <div className="card">
          <div className="card-header">
            <h2 className="card-header-title title">New Form</h2>
          </div>
          <div className="card-content">
            {/* <label htmlFor="owner">Owner</label>
          <input
            type="text"
            name="owner"
            id="owner"
            className="input mb-4"
            value={ownerState.owner}
            onChange={handleOwnerChange}
          /> */}
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              className="input mb-4"
              placeholder="Classic Tenth Step"
              value={titleState.title}
              onChange={handleTitleChange}
            />
            <label htmlFor="date">Date</label>
            <input
              type="date"
              name="date"
              id="date"
              className="input"
              value={titleState.date}
              onChange={handleTitleChange}
            />
          </div>
        </div>
        <div className="card mt-6">
          <div className="card-header">
            <h2 className="card-header-title title">Add Prompts</h2>
          </div>
          <div className="card-content">
            {promptState.map((val, idx) => (
              <Inputs
                key={`prompt-${idx}`}
                idx={idx}
                promptState={promptState}
                handlePromptChange={handlePromptChange}
              />
            ))}
          </div>
        </div>
        <input
          type="button"
          value="Submit"
          className="button is-link mt-4"
          onClick={toggleModal}
        />
        <input
          type="button"
          className="button is-link is-light mt-4 ml-4"
          value="Add New Prompt"
          onClick={addPrompt}
        />
      </form>
      {displayModal
        ? <FinalForm 
            titleState={titleState}
            promptState={promptState} 
            displayModal={displayModal}
            toggleModal={toggleModal} 
          />
        : <div></div>
      }
    </div>
  );
};

export default Form;
