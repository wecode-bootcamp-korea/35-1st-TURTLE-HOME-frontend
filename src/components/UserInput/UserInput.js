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
    if (inputValue) return;
    else {
      setInputTitleGoUpBtn(prev => !prev);
    }
  };

  return (
    <>
      <div className="user-input">
        {console.log(condition)}

        <span
          className={`user-placeholder 
            ${inputTitleGoUpBtn ? 'input-title-goup' : null}
           ${!condition && inputValue ? 'input-red' : 'input-gray'}`}
        >
          {koreanName} *
        </span>
        <input
          type={name}
          name={name}
          className={!condition && inputValue ? 'input-border-red' : null}
          onFocus={inputGoUpEffector}
          onBlur={inputGoUpEffector}
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
        형식에 맞지 않습니다.
      </span>
    </>
  );
};

export default UserInput;
