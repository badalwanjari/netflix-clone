import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import HomeScreen from "./pages/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./pages/LoginScreen";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { login, logout, selectUser } from "./features/userSlice";
import ProfileScreen from "./pages/ProfileScreen";

function App() {
    const user = useSelector(selectUser);
    console.log(user)
    const dispatch = useDispatch();
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
            if (userAuth) {
                dispatch(
                    login({
                        uid: userAuth.uid,
                        email: userAuth.email,
                    })
                );
            } else {
                dispatch(logout());
            }
        });
        return unsubscribe;
    }, [dispatch]);

    return !user? (
        <div className="app">
            <LoginScreen />
        </div>
    ) : (
        <div className="app">
            <Router>
                <Routes>
                    <Route path="/" element={<HomeScreen />} />
                    <Route path="/profile" element={<ProfileScreen />} />
                    <Route path="/login" element={<LoginScreen />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
