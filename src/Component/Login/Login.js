import React, { useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import './Login.css';
import { FcGoogle } from 'react-icons/fc';



const Login = () => {
    const [password, setPassword] = useState(true)
    const [isSuccess, setIsSuccess] = useState(false);
    const [oldUser, setOldUser] = useState(false);
    const [user, setUser] = useState({
        isSignIn: false,
        name: '',
        email: '',
        password: '',
        photo: '',
        phone: '',
        error: '',
        success: false
    });

    // Google sign in
    const provider = new firebase.auth.GoogleAuthProvider();
    const googleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
            .then(res => {
                const { displayName, email, photoURL, phone } = res.user;
                const signInUser = {
                    isSignIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL,
                    phone: phone
                }
                setUser(signInUser);
                console.log(displayName, email, photoURL);
            })
            .catch((error) => {
                console.log(error);
                console.log(error.message);
            })
    }

    // Google sign out
    const googleSignOut = () => {
        firebase.auth().signOut()
            .then(() => {
                const signOutUser = {
                    isSignIn: false,
                    name: '',
                    email: '',
                    photo: '',
                    phone: ''
                }
                setUser(signOutUser);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }


    // Email input field
    const handleBlur = event => {
        let isFormValid = true;
        if (event.target.name === 'email') {
            isFormValid = /\S+@\S+\.\S+/.test(event.target.value);
        }
        if (event.target.name === 'password' && event.target.name === 'confirm_password') {
            const isPasswordValid = event.target.value.length > 4;
            const equal = event.target.value;
            const passwordHasNumber = /\d{1}/.test(event.target.value);
            isFormValid = isPasswordValid && passwordHasNumber && equal;
        }

        if (isFormValid) {
            const newUser = { ...user };
            newUser[event.target.name] = event.target.value;
            setUser(newUser);
        }


    }


    //Email submit form
    const handleSubmit = event => {
        const password = document.getElementById('password');
        const confirm_password = document.getElementById('confirm_password');
        if(!oldUser){
            if (password.value === confirm_password.value) {
                setPassword(true)
            }
            else {
                setPassword(false);
            }
        }
        

        console.log(user.email, user.password, password, confirm_password);
        if (!oldUser && user.email && user.password && password.value === confirm_password.value) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    setIsSuccess(true);
                    updateUserInfo(user.name);
                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });
        }
        if (oldUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    setIsSuccess(true);
                    console.log('sign in', res.user);
                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });
        }
        event.preventDefault();
        event.target.reset();
    }

    const updateUserInfo = name => {
        const user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: name
        })
        .then(function () {
            console.log('user updated successfully');
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    setInterval(() => setIsSuccess(false), 3000);

    return (
        <div className='container login text-center py-3'>

            <div className='mx-auto '>
                {
                    user.isSignIn ?
                        <button className="btn " style={{ width: '230px', border: '1px solid lightGrey', borderRadius: '10px' }} onClick={googleSignOut}><FcGoogle size='20px' /> Sign Out from Google</button>
                        :
                        <button className="btn " style={{ width: '230px', border: '1px solid lightGrey', borderRadius: '10px' }} onClick={googleSignIn}><FcGoogle size='20px' /> Continue with Google</button>
                }

                {
                    user.isSignIn && <p>Hello, {user.name}</p>
                }
            </div>

            <h6 className='text-muted'>Or</h6>

            <div style={{ margin: '0 30%' }}>
                <form onSubmit={handleSubmit}>
                    {
                        oldUser ?
                            <div>
                                <input type="email" name="email" id="email" onBlur={handleBlur} placeholder='Your Email' required title='email' />
                                <br /><br />
                                <input type="password" name="password" id="password" onBlur={handleBlur} placeholder='Enter Password' required title='password' />
                                <br /><br />
                            </div>
                            :
                            <div>
                                <input type="text" name="name" id="name" onBlur={handleBlur} form-control placeholder='Your Name' required title='name' />
                                <br /><br />

                                <input type="email" name="email" id="email" onBlur={handleBlur} placeholder='Your Email' required title='email' />
                                <br /><br />
                                <input type="password" name="password" id="password" onBlur={handleBlur} placeholder='Enter Password' required title='password' />
                                <br /><br />


                                <input type="password" name="confirm_password" id="confirm_password" onBlur={handleBlur} placeholder='Confirm Password' required title='confirm password' />
                                <br /><br />

                                {
                                    !password ?
                                    <div>
                                        <p style={{ color: 'red' }}>Entered Password is not matched! Try Again</p>
                                    </div> : ''
                                }
                            </div>
                    }
                    <input type="submit" id="submit" className='btn btn-danger' value="Submit" />
                </form>
                <p style={{ color: 'red' }}>{user.error}</p>
                {
                    isSuccess &&
                    <p className="ml-3 success-mgs text-success">User {!oldUser ? 'Created' : 'Logged in'} Successfully</p>
                }
            </div>

            <small><a href="#0" role="button" onClick={() => setOldUser(!oldUser)} style={{ color: 'red' }}>
                {!oldUser ? 'Already have an account' : 'Create an account'}</a></small>

        </div>
    );
};

export default Login;