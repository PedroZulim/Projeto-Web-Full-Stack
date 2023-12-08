import logo from "../images/Logo-Login.png";

import styled from "styled-components";
import {useRef} from "react";

const StyledForm = styled.form`
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
`;

const StyledMain = styled.main`
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
`;

function Login() {

    const passwordInputRef  = useRef('');
    const emailInputRef = useRef('');

    return (
        <div className="text-center">
            <StyledMain>
                <StyledForm>
                    <img src={logo} alt="" width="250" height="250"/>
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
                                ref={emailInputRef}/>
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                               ref={passwordInputRef}/>
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="checkbox mb-3 mt-3">
                        <label>
                            <input type="checkbox" value="remember-me"/> Remember me
                        </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary bg-black border-black" type="submit">Sign in</button>
                </StyledForm>
            </StyledMain>
        </div>
    )
}
export default Login;
