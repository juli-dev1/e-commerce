import React from 'react'

import { useState } from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';



function SignUp() {

    const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')


    const handleSubmit =async (e)=>{
        e.preventDefault()

        if(password !== confirmPassword){
            alert("passwords don't match")
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)

            await createUserProfileDocument(user, {displayName})
            setDisplayName('')
            setEmail('')
            setPassword('')
            setConfirmPassword('')

        } catch (err) {
             console.log(err.message);
        }

    }

    return (
        <div className='sign-up'>
            <h2 className='title'>I do not have a account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit} >
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={setDisplayName} 
                    label='Display Name'
                    required 
                />
                <FormInput 
                    type='email'
                    name='email'
                    value={email}
                    onChange={setEmail} 
                    label='Email'
                    required 
                />
                <FormInput
                     type='password'
                     name='password'
                     value={password}
                     onChange={setPassword} 
                     label='Password'
                     required 
                />
                <FormInput 
                     type='password'
                     name='confirmPassword'
                     value={confirmPassword}
                     onChange={setConfirmPassword} 
                     label='Confirm Password'
                     required 
                />
                <CustomButton type='submit' >SIGN UP</CustomButton>
            </form>
        </div>
    )
}

export default SignUp
