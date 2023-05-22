import { Fragment, useContext, useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Helpers from "../../utils/Helpers";
import { Context } from "../../context";
import axios from "axios";

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { state, dispatch } = useContext(Context);

    const { user } = state;

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(`http://localhost:5000/api/login`, {
                email,
                password,
            });
            dispatch({
                type: "LOGIN",
                payload: data,
            });
            window.localStorage.setItem("user", JSON.stringify(data));
            navigate("/home");
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        if (user !== null) {
            navigate("/home");
        }
    }, [user]);

    return <Fragment>
        <form className="sign-in-form" onSubmit={onSubmitHandler}>
            <h2 className="title">Sign in</h2>
            <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="email" placeholder="Enter email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />            </div>
            <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Enter password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />            </div>
            <input type="submit" value="Login" className="button solid" />

            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
                <a href="#" className="social-icon">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-icon">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-icon">
                    <i className="fab fa-google"></i>
                </a>
                <a href="#" className="social-icon">
                    <i className="fab fa-linkedin-in"></i>
                </a>
            </div>
        </form>
    </Fragment>
}
export default LoginForm;