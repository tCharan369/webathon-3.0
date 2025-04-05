import React from "react";
import { SignIn } from "@clerk/clerk-react";

function SigninAdmin() {
  return (
    <div className="d-flex justify-content-center align-items-center h-100 mt-5">
      <SignIn
        path="/signin/admin"
        routing="path"
        afterSignIn={() => {
          window.location.href = "/admin";
        }}
        afterSignUp={() => {
          window.location.href = "/admin";
        }}
      />
    </div>
  );
}

export default SigninAdmin;
