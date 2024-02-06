import { useStytch, useStytchSession, useStytchUser} from "@stytch/react";
import React, { useCallback, useEffect, useState } from "react";

const Dashboard = () => {

    const stytch = useStytch();
    const { user } = useStytchUser();
    const { session } = useStytchSession();
    const [phoneNumber, setPhoneNumber] = useState('');

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    };

    const updatePhoneNumber = () => {
    };

{/*
    const config = {
        otpOptions: {
            expirationMinutes: 10,
            methods: ['sms']
        },
        products: [
            'otp',
        ],
    }; */}

    const callbacks = {
        onEvent: ({ type, data }) => {
            if (type === 'PASSKEY_REGISTER') {
                console.log("Passkey registered", data);
                window.location.replace("/home");
            } else {
                console.log(type, data)
            }
        },
        onError: (err) => {
            console.log(err);
        }
    };

    return (
        <div className="flex items-center justify-center w-full flex-col gap-8">
            <h1>Profile</h1>

            <h2>User Information</h2>
            <p><strong>First Name:</strong> {user?.name?.first_name}</p>
            <p><strong>Last Name:</strong> {user?.name?.last_name}</p>
            <p><strong>Email:</strong> {user?.emails?.[0]?.email}</p>

            {/* Styling updates for label and input */}
            <div className="flex items-center">
                <span className="mr-2 font-bold">Phone number:</span>
                <input
                    type="tel"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                    placeholder="Phone Number"
                    className="border-2 border-gray-300 px-2 py-1 rounded-md mr-2 text-sm w-48" // Adjusted for a smaller, more aesthetically pleasing look
                />
                <button
                    onClick={updatePhoneNumber}
                    className="bg-blue-500 px-2 py-1 text-white rounded-md text-sm"
                >
                    Update
                </button>
            </div>
        

            <button
                className="mt-4 bg-red-500 px-4 py-2 text-white rounded-md"
                onClick={() => stytch.session.revoke()}
            >
                Log out
            </button>
        </div>
    );
};

export default Dashboard;
