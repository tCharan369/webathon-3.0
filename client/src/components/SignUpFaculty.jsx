import React from "react";
import { SignUp } from "@clerk/clerk-react";

function SignUpFaculty() {
  return (
    <div className="d-flex justify-content-center align-items-center h-100 mt-5">
      <SignUp />
    </div>
  );
}

export default SignUpFaculty;