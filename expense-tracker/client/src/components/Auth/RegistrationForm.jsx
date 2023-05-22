import { Fragment, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Helpers from "../../utils/Helpers";
import { Context } from "../../context";
import axios from "axios";

function RegistrationForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let navigate = useNavigate();

    const { state, dispatch } = useContext(Context);

    const { user } = state;


    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(`http://localhost:5000/api/register`, {
                name,
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
        <form action="#" className="sign-up-form" onSubmit={onSubmitHandler}>
            <h2 className="title">Sign up</h2>
            <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter name"
                    required />
            </div>
            <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input type="email" placeholder="Enter email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Enter password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
            </div>
            <input type="submit" className="button" value="Sign up" />
            <p className="social-text">Or Sign up with social platforms</p>
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
export default RegistrationForm;