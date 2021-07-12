import './Login.css';

export default function Login() {
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
                    <input type="email" className="login__input" placeholder="Your e-mail"/>

                    <label className="login__label">Password</label>
                    <input type="password" className="login__input" placeholder="Your password"/>

                    <div className="login__buttons">
                        <button className="create__buttonLogin">Log In</button>

                        <button className="create__buttonRegister">No account yet? Create one</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
