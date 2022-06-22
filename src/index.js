console.log("index.js started...");

import Amplify from "aws-amplify";
import { Auth } from 'aws-amplify';
import aws_exports from "./aws-exports.js";

import { userAuthState } from './auth_user';
import { checkAuthContent } from './auth_content';
import { signUp, confirmSignUp, resendConfirmationCode } from './auth_signup';
import { signIn } from './auth_login';
import { forgotPass, confirmForgotPass } from './auth_forgot_password';
import { signOut } from './auth_logout';


Amplify.configure(aws_exports);

checkAuthContent();

console.log("index.js finished...");
