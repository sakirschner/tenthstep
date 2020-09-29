//This isn't even my final form

import React from 'react';
import PropTypes from 'prop-types';

const FinalForm = ({ titleState, promptState, displayModal, toggleModal }) => {
const listPrompts = promptState.map((prompt, idx) => <li key={`prompt.${idx}`}>{prompt.prompt}</li>);

  const renderTitle = () => {
    if (titleState.title) {
      return <p className="modal-card-title">{titleState.title}</p>
    } else {
      return <p className="modal-card-title">Untitled</p>
    }
  }


  return (
    <div className={"modal is-active " + (displayModal ? 'is-active' : '')}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          {renderTitle()}
          <button className="delete" aria-label="close" onClick={toggleModal}></button>
        </header>
        <section className="modal-card-body"><div>{listPrompts}</div></section>
        <footer className="modal-card-foot">
          <button className="button is-success">Save</button>
          <button className="button" onClick={toggleModal}>Edit</button>
        </footer>
      </div>
    </div>
  );
};

FinalForm.propTypes = {
  titleState: PropTypes.object,
  promptState: PropTypes.array,
  displayModal: PropTypes.bool,
  toggleModal: PropTypes.func,
};

export default FinalForm;
