import { useState } from 'react';
import UserInput from '../../components/UserInput/UserInput';
import USERINPUT_DATA from './data/userInputData';
import CHECKBOX_DATA from './data/checkboxData';
import './SignUp.scss';

const SignUp = ({ setLoginWindowBtn, setSignUpWindowBtn }) => {
  const [signUpInput, setSignUpInput] = useState({
    korean_name: '',
    email: '',
    password: '',
    address: '',
    phone_number: '',
  });
  const signUpInputHandler = e => {
    const { name, value } = e.target;
    setSignUpInput({ ...signUpInput, [name]: value });
  };
  const { korean_name, email, password, phone_number, address } = signUpInput;

  const emailRegex = /^[A-Za-z0-9_.-]+@[A-Za-z0-9-]+\.[A-Za-z0-9-]+/;
  const pwdRegex = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
  const phoneRegex = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

  const signConditions = {
    nameCondition: korean_name.length > 1,
    emailCondition: emailRegex.test(email),
    pwdCondition: pwdRegex.test(password),
    phoneCondition: phoneRegex.test(phone_number),
    addressCondition: address.length > 3,
  };

  const signFetch = e => {
    e.preventDefault();
    fetch('http://10.58.2.101:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        signUpInput,
      }),
    })
      .then(res => res.json())
      .then(result => console.log('결과:', result));
  };

  return (
    <div
      className="signUp"
      onClick={e => {
        e.target.className === 'signUp' && setSignUpWindowBtn(false);
      }}
    >
      <div className="container">
        <div className="section">
          <div className="sign-header">
            <div
              onClick={() => {
                setLoginWindowBtn(true);
                setSignUpWindowBtn(false);
              }}
            >
              <i class="fa-solid fa-angle-left"></i>
            </div>
            <span className="section-header">자라홈 계정 만들기</span>
            <span> </span>
          </div>

          <form className="sign-main" onSubmit={signFetch}>
            {USERINPUT_DATA.map((element, i) => {
              return (
                <UserInput
                  key={i}
                  name={element.name}
                  koreanName={element.koreanName}
                  condition={signConditions[`${element.condition}`]}
                  inputValue={signUpInput[`${element.name}`]}
                  loginInputHandler={signUpInputHandler}
                />
              );
            })}

            <div className="sign-checkbox">
              {CHECKBOX_DATA.map((element, i) => {
                return (
                  <div className="checkbox-input" key={i}>
                    <input type="checkbox" />
                    <span className="checkbox-content"> {element.content}</span>
                    <a href={element.dataLink} target="_blank" rel="noreferrer">
                      자세히보기.
                    </a>
                  </div>
                );
              })}
            </div>

            <button>계정만들기</button>
          </form>
        </div>
        <i
          className="fa-solid fa-x signup-x"
          onClick={() => {
            setSignUpWindowBtn(false);
          }}
        ></i>
      </div>
    </div>
  );
};

export default SignUp;
