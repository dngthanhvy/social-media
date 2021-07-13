import { useState, useEffect } from 'react';
import { register } from '../../api';
import { useHistory, Link } from 'react-router-dom';
import './Register.css';

export default function Register() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [isValid, setValid] = useState(true);

    const history = useHistory();

    const handleSubmit = async(e) => {
        e.preventDefault();
        const res = await register({ username, password, email });
        console.log(res.data);
        history.push('/');
    }

    useEffect(() => {
        password === confirmPassword ? setValid(true) : setValid(false);
    }, [password, confirmPassword])

    return (
        <div className="register">
            <div className="register__wrapper">
                <div className="register__left">
                    <h3 className="logo">SocialMedia</h3>
                    <span className="logosub">Register to connect with your friends online</span>
                </div>

                <div className="register__right">
                    <h3 className="register__title">Create your account</h3>
                    <label className="register__label">Display name</label>
                    <input type="text" className="register__input" placeholder="Your username" onChange={e => setUsername(e.target.value)}/>

                    <label className="register__label">E-mail</label>
                    <input type="email" className="register__input" placeholder="Your e-mail" onChange={e => setEmail(e.target.value)}/>

                    <label className="register__label">Password</label>
                    <input type="password" className="register__input" placeholder="Your password" onChange={e => setPassword(e.target.value)}/>

                    <label className="register__label">Confirm password</label>
                    <input type="password" className="register__input" placeholder="Confirm your password" onChange={e => setConfirmPassword(e.target.value)}/>

                    <div className="register__buttons">
                        <button className="create__buttonRegister" onClick={handleSubmit}>Create your account</button>

                        <Link to="/login" className="create__buttonLogin">Already have an account? Log In</Link>
                    </div>

                </div>
            </div>
        </div>
    )
}
