import { useState } from 'react';
import UserInput from '../../components/UserInput/UserInput';
import './SignUp.scss';

const SignUp = () => {
  const [signInput, setSignInput] = useState({
    fullname: '',
    email: '',
    password: '',
    phoneNumber: '',
    address: '',
  });
  const signInputHandler = e => {
    const { name, value } = e.target;
    setSignInput({ ...signInput, [name]: value });
  };
  const { fullname, email, password, phoneNumber, address } = signInput;

  const emailRegex = /^[A-Za-z0-9_.-]+@[A-Za-z0-9-]+\.[A-Za-z0-9-]+/;
  const pwdRegex = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
  const phoneRegex = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

  const nameCondition = fullname.length > 1;
  const emailCondition = emailRegex.test(email);
  const pwdCondition = pwdRegex.test(password);
  const phoneCondition = phoneRegex.test(phoneNumber);
  const addressCondition = address.length > 3;

  const signFetch = e => {
    e.preventDefault();
    fetch('/', {
      method: 'POST',
      body: JSON.stringify({
        fullname,
        email,
        password,
        phoneNumber,
        address,
      }),
    })
      .then(res => {
        res.json();
      })
      .then(result => {
        console.log('결과:', result);
      });
  };

  return (
    <div className="signUp">
      <div className="container">
        <div className="section">
          <div className="sign-header">
            <i class="fa-solid fa-angle-left"></i>
            <span className="section-header">자라홈 계정 만들기</span>
            <span> </span>
          </div>

          <form className="sign-main" onSubmit={signFetch}>
            <UserInput
              name="fullname"
              koreanName="이름"
              condition={nameCondition}
              inputValue={fullname}
              loginInputHandler={signInputHandler}
            />
            <UserInput
              name="email"
              koreanName="이메일"
              condition={emailCondition}
              inputValue={email}
              loginInputHandler={signInputHandler}
            />
            <UserInput
              name="password"
              koreanName="비밀번호"
              condition={pwdCondition}
              inputValue={password}
              loginInputHandler={signInputHandler}
            />
            <UserInput
              name="phoneNumber"
              koreanName="핸드폰번호"
              condition={phoneCondition}
              inputValue={phoneNumber}
              loginInputHandler={signInputHandler}
            />
            <UserInput
              name="address"
              koreanName="주소"
              condition={addressCondition}
              inputValue={address}
              loginInputHandler={signInputHandler}
            />

            <div className="sign-checkbox">
              <InputCheck content="모두동의" />
              <InputCheck
                content="개인정보의 수집 및 이용에 대한 동의."
                dataLink="https://static.zarahome.net/8/staticContent4/PDF/PP/KR/personal-information-privacy-policy-ko.pdf?20220720022012"
              />
              <InputCheck
                content="개인정보의 국외 이전에 대한 동의."
                dataLink="https://static.zarahome.net/8/staticContent4/PDF/PP/KR/overseas-privacy-policy-ko.pdf?20220720022012"
              />
              <InputCheck
                content="뉴스레터 구독을 위한 개인정보의 수집 및 이용에 대한 동의."
                dataLink="https://static.zarahome.net/8/staticContent4/PDF/PP/KR/newsletter-privacy-policy-ko.pdf?20220720022012"
              />
            </div>

            <button>계정만들기</button>
          </form>
        </div>
        <i class="fa-solid fa-x signup-x"></i>
      </div>
    </div>
  );
};

const InputCheck = ({ content, dataLink }) => {
  return (
    <div className="checkbox-input">
      <input type="checkbox" />
      <span className="checkbox-content"> {content} </span>
      <a href={dataLink} target="_blank" rel="noreferrer">
        자세히보기.
      </a>
    </div>
  );
};

export default SignUp;
