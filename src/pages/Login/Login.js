import { useState } from 'react';
import UserInput from '../../components/UserInput/UserInput';
import './Login.scss';

const Login = () => {
  const [loginInput, setLoginInput] = useState({
    email: '',
    password: '',
  });
  const loginInputHandler = e => {
    const { name, value } = e.target;
    setLoginInput({ ...loginInput, [name]: value });
  };
  const { email, password } = loginInput;

  const emailRegex = /^[A-Za-z0-9_.-]+@[A-Za-z0-9-]+\.[A-Za-z0-9-]+/;
  const emailCondition = emailRegex.test(email);
  const pwdCondition = password.length > 4;

  const loginFetch = () => {
    fetch('/', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
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
    <div className="login">
      <div className="container">
        <div className="section-left">
          <div className="login-header">
            <span className="left-section-header">로그인</span>
            <span>
              신속한 결제 진행을 위해 필요한 정보를 요청할 수 있습니다.
            </span>
            <span>
              Can’t find your order? You might have purchased as a guest. Click
              and we’ll tell you how to find it.
            </span>
          </div>
          <form className="login-main" onSubmit={loginFetch()}>
            <UserInput
              name="email"
              koreanName="이메일"
              condition={emailCondition}
              inputValue={email}
              loginInputHandler={loginInputHandler}
            />
            <UserInput
              name="password"
              koreanName="비밀번호"
              condition={pwdCondition}
              inputValue={password}
              loginInputHandler={loginInputHandler}
            />
            <span className="forget-password">비밀번호를 잊으셨습니까?</span>
            <button>로그인</button>
          </form>
          <div className="login-footer">
            <div className="hr-line">또는</div>
            <div className="login-icon">
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-apple"></i>
            </div>
            <span className="personal-agreement">
              개인 정보 정책에 따라 계정과 연동하는 것에 동의합니다.
            </span>
          </div>
        </div>
        <div className="section-right">
          <span className="right-section-header">회원 가입</span>
          <button className="login-signin">계정 만들기</button>
        </div>
        <i class="fa-solid fa-x"></i>
      </div>
    </div>
  );
};

export default Login;
