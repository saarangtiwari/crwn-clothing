import React from "react";
import "./sign-in-and-sign-up.styles.scss";
import SignInComponent from "../../components/sign-in/signin.component";
import SignUpComponent from "../../components/sign-up/sign-up.component";

const SignInSignUpPage = () => (
  <div className='sign-in-and-sign-up'>
    <SignInComponent />
    <SignUpComponent/>
  </div>
);

export default SignInSignUpPage;
