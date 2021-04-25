import React from "react";
import { useState } from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import "./sign-in.styles.scss";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlerSubmit =async (e) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password)
      setEmail('');
      setPassword('');
    } catch(err) {
      console.log(err);
    }

  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handlerSubmit}>
        <FormInput 
            name="email" 
            type="email" 
            value={email}
            label='email'
            onChange={setEmail} 
            required 
        />

        <FormInput 
            name="password" 
            type="password" 
            value={password} 
            label='password'
            onChange={setPassword}  
            required 
        />
        <div className="buttons">
          <CustomButton type="submit" >SIGN IN</CustomButton>
          <CustomButton  onClick={signInWithGoogle} isGoogleSignIn >SIGN IN WITH GOOGLE</CustomButton>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
