import React from "react";
import { SignIn } from "@clerk/clerk-react";

function SigninAdmin() {
  return (
    <div className="d-flex justify-content-center align-items-center h-100 mt-5">
      <SignIn/>
    </div>
  );
}

export default SigninAdmin;
