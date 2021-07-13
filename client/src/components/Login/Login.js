import { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { login } from '../../api';
import './Login.css';

export default function Login() {

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const history = useHistory();

    const handleSubmit = async(e) => {
        e.preventDefault();
        const res = await login({ email, password });
        console.log(res.data);
        history.push('/');
    }

    return (
        <div className="login">
            <div className="login__wrapper">
                <div className="login__left">
                    <h3 className="logo">SocialMedia</h3>
                    <span className="logosub">Login to connect with your friends online</span>
                </div>

                <div className="login__right">
                    <h3 className="login__title">Log In</h3>

                    <label className="login__label">E-mail</label>
                    <input type="email" className="login__input" placeholder="Your e-mail" onChange={e => setEmail(e.target.value)}/>

                    <label className="login__label">Password</label>
                    <input type="password" className="login__input" placeholder="Your password" onChange={e => setPassword(e.target.value)}/>

                    <div className="login__buttons">
                        <button onClick={handleSubmit} className="create__buttonLogin">Log In</button>

                        <Link to="/register" className="create__buttonRegister">No account yet? Create one</Link>
                    </div>

                </div>
            </div>
        </div>
    )
}
