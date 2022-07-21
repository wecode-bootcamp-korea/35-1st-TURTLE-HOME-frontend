import { useState } from 'react';
import { Link } from 'react-router-dom';
import UserInput from '../../components/UserInput/UserInput';
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

  const userInputData = [
    {
      name: 'korean_name',
      koreanName: '이름',
      condition: nameCondition,
      inputValue: korean_name,
    },
    {
      name: 'email',
      koreanName: '이메일',
      condition: emailCondition,
      inputValue: email,
    },
    {
      name: 'password',
      koreanName: '비밀번호',
      condition: pwdCondition,
      inputValue: password,
    },
    {
      name: 'phone_number',
      koreanName: '핸드폰번호',
      condition: phoneCondition,
      inputValue: phone_number,
    },
    {
      name: 'address',
      koreanName: '주소',
      condition: addressCondition,
      inputValue: address,
    },
  ];
  const checkBoxData = [
    {
      content: '개인정보의 수집 및 이용에 대한 동의.',
      dataLink:
        'https://static.zarahome.net/8/staticContent4/PDF/PP/KR/personal-information-privacy-policy-ko.pdf?20220720022012',
    },
    {
      content: '개인정보의 국외 이전에 대한 동의.',
      dataLink:
        'https://static.zarahome.net/8/staticContent4/PDF/PP/KR/overseas-privacy-policy-ko.pdf?20220720022012',
    },
    {
      content: '뉴스레터 구독을 위한 개인정보의 수집 및 이용에 대한 동의.',
      dataLink:
        'https://static.zarahome.net/8/staticContent4/PDF/PP/KR/newsletter-privacy-policy-ko.pdf?20220720022012',
    },
  ];

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
            {userInputData.map((element, i) => {
              return (
                <UserInput
                  key={i}
                  name={element.name}
                  koreanName={element.koreanName}
                  condition={element.condition}
                  inputValue={element.inputValue}
                  loginInputHandler={signInputHandler}
                />
              );
            })}

            <div className="sign-checkbox">
              {checkBoxData.map((element, i) => {
                return (
                  <InputCheck
                    key={i}
                    content={element.content}
                    dataLink={element.dataLink}
                  />
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
