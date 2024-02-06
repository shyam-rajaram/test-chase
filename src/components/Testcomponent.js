import React from "react";
import { StytchPasskeyRegistration } from "@stytch/react";

const TestComponent = () => {
  return (
    <div>
      <StytchPasskeyRegistration
        onSuccess={(response) => console.log('Success:', response)}
        onError={(error) => console.error('Error:', error)}
      />
    </div>
  );
};

export default TestComponent;
