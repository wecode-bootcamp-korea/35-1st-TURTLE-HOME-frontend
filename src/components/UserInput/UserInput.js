import { useState } from 'react';
import './UserInput.scss';

const UserInput = ({
  name,
  koreanName,
  condition,
  inputValue,
  loginInputHandler,
}) => {
  const [inputTitleGoUpBtn, setInputTitleGoUpBtn] = useState(false);

  const inputGoUpEffector = () => {
    if (inputValue.length > 0) return;
    else {
      setInputTitleGoUpBtn(prev => !prev);
    }
  };

  return (
    <>
      <div className="user-input">
        <span
          className={`user-placeholder 
            ${inputTitleGoUpBtn ? 'input-title-goup' : null}
           ${!condition && inputValue.length > 0 ? 'input-red' : 'input-gray'}`}
        >
          {koreanName} *
        </span>
        <input
          type={name}
          name={name}
          className={
            !condition && inputValue.length > 0 ? 'input-border-red' : null
          }
          onFocus={e => {
            inputGoUpEffector();
          }}
          onBlur={e => {
            inputGoUpEffector();
          }}
          onChange={e => {
            loginInputHandler(e);
          }}
        ></input>
      </div>
      <span
        className={
          'login-validation ' +
          (!condition && inputValue.length > 0 ? null : 'display')
        }
      >
        이 필드는 필수 항목입니다.
      </span>
    </>
  );
};

export default UserInput;
