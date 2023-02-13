import React, { useRef } from "react";
import { auth } from "./../firebase.js";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";

import "./SignUpScreen.css";
function SignUpScreen() {
    const emailRef = useRef(null);
    const passRef = useRef(null);

    const register = (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passRef.current.value
        )
            .then((authuser) => {
                console.log(authuser);
            })
            .catch((e) => {
                alert(e.message);
            });
    };
    const signIn = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passRef.current.value
        )
            .then((authuser) => {
                console.log(authuser);
            })
            .catch((e) => {
                alert(e.message);
            });
    };

    return (
        <div className="signUpScreen">
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} placeholder="Email" type="email" />
                <input ref={passRef} placeholder="Password" type="password" />
                <button type="submit" onClick={signIn}>
                    Sign In
                </button>
                <h4>
                    <span className="signUpScreen__grey">
                        New to Netflix ?{" "}
                    </span>
                    <span onClick={register} className="signUpScreen__link">
                        Sign Up Now
                    </span>
                </h4>
            </form>
        </div>
    );
}

export default SignUpScreen;
