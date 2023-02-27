import { Button } from '@material-ui/core';
import React from 'react';
import { auth,provider } from "./firebase";
import "./Login.css"
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

function Login() {
    const[{},dispatch]= useStateValue();

    const signIn= () => {
        auth
            .signInWithPopup(provider)
            .then((result) =>{
                dispatch({
                    type:actionTypes.SET_USER,
                    user:result.user,
                });
            })
            //console.log(result))
            .catch((error)=>alert(error.messsage));

            
    };
    return (
        <div className="login">
            <div className="login__container">
            <p>hello.... Albin here</p>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/598px-WhatsApp.svg.png"
                alt=""
                />
                <div className="login__text">
                    
                    <h1>sign in WhatsApp</h1>
                </div>
                <Button onClick={signIn}>
                    Sign In With Google
                </Button>
            </div>
        </div>
    )
}

export default Login
