import { useStytch, useStytchSession, useStytchUser } from "@stytch/react";
import React, { useEffect } from "react";

const Authenticate = ({ children }) => {

    const stytch = useStytch();
    const { user } = useStytchUser();

    useEffect(() => {

        if (stytch && !user) {
            const queryParams = new URLSearchParams(window.location.search);
            const token = queryParams.get("token");
            const tokenType = queryParams.get("stytch_token_type");


            if (token && tokenType) {
                if (tokenType === 'magic_links') {
                    stytch.magicLinks.authenticate(token, {
                        session_duration_minutes: 60,
                    })
                        .then(() => {

                            window.location.href = '/';
                        })
                        .catch((error) => {

                            console.error('Magic Links authentication error:', error);
                        });
                } else if (tokenType === 'oauth') {
                    stytch.oauth.authenticate(token, {
                        session_duration_minutes: 60,
                    })
                        .then(() => {

                            window.location.href = '/';
                        })
                        .catch((error) => {

                            console.error('OAuth authentication error:', error);
                        });
                }
            }
        }
    }, [stytch, user]);
    return (
        <div className="w-full h-[80vh]">
            <p className="text-3xl font-bold flex items-center justify-center w-full h-full">

                Authenticating
            </p>
        </div>
    )
};

export default Authenticate;