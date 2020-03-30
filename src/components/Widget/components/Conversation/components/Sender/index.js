import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setUserInput } from 'actions';
import send from 'assets/send_button.svg';
import './style.scss';


const Sender = ({ sendMessage, inputTextFieldHint, disabledInput, userInput, setUserInput }) => (userInput === 'hide' ? <div /> : (
  <form className="sender" onSubmit={sendMessage}>
    <input type="text" className="new-message" name="message" value={userInput} onChange={(value) => setUserInput(value.target.value)} placeholder={inputTextFieldHint} disabled={disabledInput || userInput === 'disable'} autoFocus autoComplete="off" />
    <button type="submit" className="send">
      <img src={send} className="send-icon" alt="send" />

    </button>
    {React.createElement('a', {href:"https://push.al"}, "Powered by push.al")}
  </form>
));
const mapStateToProps = state => ({
  inputTextFieldHint: state.behavior.get('inputTextFieldHint'),
  userInput: state.metadata.get('userInput'),
});

const mapDispatchToProps = dispatch => ({
  setUserInput: (value) => dispatch(setUserInput(value)),
});

Sender.propTypes = {
  sendMessage: PropTypes.func,
  inputTextFieldHint: PropTypes.string,
  disabledInput: PropTypes.bool,
  userInput: PropTypes.string,
  setUserInput: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sender);
