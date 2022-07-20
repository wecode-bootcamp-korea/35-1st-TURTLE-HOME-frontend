import { useState } from 'react';
import './UserInput.scss';

const UserInput = ({
  name,
  koreanName,
  condition,
  inputValue,
  loginInputHandler,
}) => {
  const [inputTitleRedBtn, setInputTitleRedBtn] = useState(false);
  const [inputTitleGoUpBtn, setInputTitleGoUpBtn] = useState(false);

  const inputGoUpEffector = () => {
    if (inputValue.length > 0) return;
    else {
      setInputTitleGoUpBtn(prev => !prev);
    }
  };

  const inputRedEffector = () => {
    condition ? setInputTitleRedBtn(false) : setInputTitleRedBtn(true);
  };
  return (
    <>
      <div className="user-input">
        <span
          className={`user-placeholder 
            ${inputTitleGoUpBtn ? 'input-title-goup' : null}
           ${!condition ? 'input-red' : 'input-gray'}`}
        >
          {koreanName} *
        </span>
        <input
          type={name}
          name={name}
          className={inputTitleRedBtn ? 'input-border-red' : null}
          onFocus={e => {
            inputGoUpEffector();
            inputRedEffector();
          }}
          onBlur={e => {
            inputGoUpEffector();
            inputRedEffector();
          }}
          onChange={e => {
            loginInputHandler(e);
          }}
        ></input>
      </div>
      <span
        className={'login-validation ' + (inputTitleRedBtn ? null : 'display')}
      >
        이 필드는 필수 항목입니다.
      </span>
    </>
  );
};

export default UserInput;
