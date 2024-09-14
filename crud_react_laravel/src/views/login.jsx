import { Link } from "react-router-dom";

export default function Login() {
    const Submit = (ev) => {
        ev.preventDefault();
    }
    return (
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <h1 className="title">Login</h1>
                <form onSubmit={Submit}>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button className="btn btn-block">Login</button>
                    <p className="message">
                        Not Registered? <Link to="/register">Create an Account</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}
