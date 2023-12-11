import logo from "../images/Logo-Login.png";

import styled from "styled-components";
import {useRef} from "react";

const StyledForm = styled.form`
  align-items: center;
  padding-bottom: 20px;
`;

const StyledMain = styled.main`
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
`;

function Login() {

    const passwordInputRef = useRef('');
    const emailInputRef = useRef('');

    const signin = () => {
        const objLogin = {email: emailInputRef.current.value, password: passwordInputRef.current.value};
        // Call the PutAPI hook with the appropriate URL and object
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(objLogin)
        };
        // Simple DELETE request with fetch
        fetch('https://localhost:5000/api/login/', requestOptions)
    .then((res) => res.json())
            .then((data) => {
                alert(data.message);
            });
    }
    const register = () => {
        const objLogin = {email: emailInputRef.current.value, password: passwordInputRef.current.value};
        // Call the PutAPI hook with the appropriate URL and object
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(objLogin)
        };
        // Simple DELETE request with fetch
        fetch('https://localhost:5000/api/register/', requestOptions)
    .then((res) => res.json())
            .then((data) => {
                alert(data.message);
            });
    }


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
                    <button className="w-100 btn btn-lg btn-primary bg-dark border-black mb-2" onClick={() => signin()}>Sign in</button>
                    <button className="w-75 btn  btn-secondary bg-dark border-black" onClick={() => register()}>Register</button>
                </StyledForm>
            </StyledMain>
        </div>
    )
}
export default Login;
