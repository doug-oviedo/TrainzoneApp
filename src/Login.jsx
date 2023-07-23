import React, {useState} from "react"

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const SumbitHandler = (s) => {
        s.preventDefault();
        console.log(email);
    }

    return (
    <div className="auth-form-container">
        <form className="login-form" onSubmit={SumbitHandler}>
            <label for="E-Mail">E-Mail</label>
            <input value={email} onChange={(s) => setEmail(s.target.value)} type = "E-Mail" placeholder="email@domain.com" id="E-Mail" name="E-Mail" />
            <label for="Password">Password</label>
            <input value={pass} onChange={(s) => setPass(s.target.value)} type = "Password" placeholder="*********" id="Password" name="Password" />
        </form>
        <button onClick={() => props.onFormSwitch('register')}> Sign Up Here! </button>
    </div>
    )
}