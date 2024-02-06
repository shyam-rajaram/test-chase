import React from 'react';
import { StytchLogin, useStytch } from '@stytch/react';

const Login = () => {
    const style = {
        fontFamily: 'Arial',
    };

    const callbacks = {
        onEvent: ({ type, data }) => {
            if (type === 'PASSKEY_AUTHENTICATE') {
                console.log("Passkey authenticated", data);
                window.location.replace("/");
            } else if (type === 'OTP_AUTHENTICATE') {
                console.log("OTP authenticated", data);
                window.location.replace("/");
            } else if (type === 'http://localhost:3000/authenticate') {
                console.log('Email magic Link sent', data);
            } else {
                console.log(type, data)
            }
        },
        onError: (err) => {
            console.log(err);
        }
    };


    const config = {
        otpOptions: {
            expirationMinutes: 10,
            methods: ['sms']
        },
        products: [ 'oauth','emailMagicLinks'],
        emailMagicLinksOptions: {
            loginRedirectURL: 'http://localhost:3000/authenticate',
            loginExpirationMinutes: 30,
            signupRedirectURL: 'http://localhost:3000/authenticate',
            signupExpirationMinutes: 30,
        },
        oauthOptions: {
            providers: [
                {
                    type: 'google',
                    'one_tap': true,
                    position: 'floating'
                },
                {
                    type: 'microsoft',
                    providerParams: {
                        login_hint: 'example_hint@stytch.com'
                    }
                }
            ],
        },
    };

    return (
        <div className="sign-in-container">
            <StytchLogin config={config} styles={style} callbacks={callbacks} />
        </div>
    );
};

export default Login;