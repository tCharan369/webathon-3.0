import React from "react";
import { SignIn } from "@clerk/clerk-react";

function SigninStudent() {
  return (
    <div className="d-flex justify-content-center align-items-center h-100 mt-5">
      <SignIn
        path="/signin/student"
        routing="path"
        appearance={{ /* optional theme styling */ }}
        afterSignIn={() => {
          window.location.href = "/student"; // ✅ No more /sso-callback
        }}
        afterSignUp={() => {
          window.location.href = "/student";
        }}
      />
    </div>
  );
}

export default SigninStudent;
