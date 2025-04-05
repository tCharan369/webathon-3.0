import React from "react";
import { SignIn } from "@clerk/clerk-react";

function SigninFaculty() {
  return (
    <div className="d-flex justify-content-center align-items-center h-100 mt-5">
      <SignIn
        path="/signin/faculty"
        routing="path"
        afterSignIn={() => {
          window.location.href = "/faculty";
        }}
        afterSignUp={() => {
          window.location.href = "/faculty";
        }}
      />
    </div>
  );
}

export default SigninFaculty;
