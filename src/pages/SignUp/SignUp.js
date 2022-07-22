import { useState } from 'react';
import { Link } from 'react-router-dom';
import UserInput from '../../components/UserInput/UserInput';
import USERINPUT_DATA from './data/userInputData';
import CHECKBOX_DATA from './data/checkboxData';
import './SignUp.scss';

const SignUp = () => {
  const [signInput, setSignInput] = useState({
    korean_name: '',
    email: '',
    password: '',
    address: '',
    phone_number: '',
  });
  const signInputHandler = e => {
    const { name, value } = e.target;
    setSignInput({ ...signInput, [name]: value });
  };
  const { korean_name, email, password, phone_number, address } = signInput;

  const emailRegex = /^[A-Za-z0-9_.-]+@[A-Za-z0-9-]+\.[A-Za-z0-9-]+/;
  const pwdRegex = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
  const phoneRegex = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

  const nameCondition = korean_name.length > 1;
  const emailCondition = emailRegex.test(email);
  const pwdCondition = pwdRegex.test(password);
  const phoneCondition = phoneRegex.test(phone_number);
  const addressCondition = address.length > 3;

  const signFetch = e => {
    e.preventDefault();
    fetch('http://10.58.2.101:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        signInput,
      }),
    })
      .then(res => res.json())
      .then(result => console.log('결과:', result));
  };

  return (
    <div className="signUp">
      <div className="container">
        <div className="section">
          <div className="sign-header">
            <Link to="/login">
              <i class="fa-solid fa-angle-left"></i>
            </Link>
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
                  condition={`${'nameCondition'}`}
                  inputValue={signInput[`${element.name}`]}
                  loginInputHandler={signInputHandler}
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
        <i class="fa-solid fa-x signup-x"></i>
      </div>
    </div>
  );
};

export default SignUp;
