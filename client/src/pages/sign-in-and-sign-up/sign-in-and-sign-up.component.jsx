import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/signup/signup.component";
import { SignInAndSignUpComponent } from "./sign-in-and-sign-up.styles";

const SignInAndSignUpPage = () => (
  <SignInAndSignUpComponent>
    <SignIn />
    <SignUp />
  </SignInAndSignUpComponent>
);

export default SignInAndSignUpPage;
