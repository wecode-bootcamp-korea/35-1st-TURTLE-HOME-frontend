import { useState } from 'react';
import './UserInput.scss';

const UserInput = ({ name, koreanName, condition, loginInputHandler }) => {
  const [loginValidationBtn, setLoginValidationBtn] = useState(false);

  const validationChecker = condition => {
    if (condition) {
      setLoginValidationBtn(true);
    } else {
      setLoginValidationBtn(false);
    }
  };

  const [inputTitleRedBtn, setInputTitleRedBtn] = useState(false);
  const [inputTitleGoUpBtn, setInputTitleGoUpBtn] = useState(false);

  const inputFocusEffector = e => {
    setInputTitleGoUpBtn(true);
  };

  const inputBlurEffector = e => {
    e.target.value ? setInputTitleGoUpBtn(true) : setInputTitleGoUpBtn(false);
  };

  const inputRedEffector = () => {
    loginValidationBtn ? setInputTitleRedBtn(false) : setInputTitleRedBtn(true);
  };
  return (
    <>
      <div className="user-input">
        <span
          className={
            'user-placeholder ' +
            (inputTitleGoUpBtn ? 'input-title-goup' : null)
          }
          style={inputTitleRedBtn ? { color: 'red' } : { color: 'gray' }}
        >
          {koreanName} *
        </span>
        <input
          type={name}
          name={name}
          className={inputTitleRedBtn ? 'input-border-red' : null}
          onFocus={e => {
            inputFocusEffector(e);
            inputRedEffector();
          }}
          onBlur={e => {
            inputBlurEffector(e);
            inputRedEffector();
          }}
          onChange={e => {
            loginInputHandler(e);
            validationChecker({ condition });
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
