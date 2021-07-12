import './Register.css';

export default function Register() {
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
                    <input type="text" className="register__input" placeholder="Your username"/>

                    <label className="register__label">E-mail</label>
                    <input type="email" className="register__input" placeholder="Your e-mail"/>

                    <label className="register__label">Password</label>
                    <input type="password" className="register__input" placeholder="Your password"/>

                    <label className="register__label">Confirm password</label>
                    <input type="password" className="register__input" placeholder="Confirm your password"/>

                    <div className="register__buttons">
                        <button className="create__buttonRegister">Create your account</button>

                        <button className="create__buttonLogin">Already have an account? Log In</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
