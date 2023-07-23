import React, {useState} from "react"

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const SumbitHandler = (s) => {
        s.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
        <form className="register-form" onSubmit={SumbitHandler}>
            <label hmtlFor="Name">Name</label>
            <input value={name} onChange={(s) => setName(s.target.value)} type = "Name" placeholder="Full Name" id="Name" name="Name" />
            <label hmtlFor="E-Mail">E-Mail</label>
            <input value={email} onChange={(s) => setEmail(s.target.value)} type = "E-Mail" placeholder="email@domain.com" id="E-Mail" name="E-Mail" />
            <label htmlFor="Password">Password</label>
            <input value={pass} onChange={(s) => setPass(s.target.value)} type = "Password" placeholder="*********" id="Password" name="Password" />
            <div>
                <button type="submit">Log In</button>
            </div>
        </form>
        <button onClick={() => props.onFormSwitch('login')}> Click to login to existing Account! </button>
    </div>
    )
}