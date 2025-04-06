import React from "react";
import { SignUp } from "@clerk/clerk-react";

function SignUpStudent() {
  return (
    <div className="d-flex justify-content-center align-items-center h-100 mt-5">
      <SignUp
        path="/signup/student"
        routing="path"
        signInUrl="/signin/student"
        afterSignUp={() => {
          window.location.href = "/student";
        }}
        appearance={{
          layout: {
            socialButtonsPlacement: "top",
          },
        }}
        socialButtons={["google"]}
        signUpAttributes={{
          publicMetadata: { role: "student" }, // Pass role as metadata
        }}
      />
    </div>
  );
}

export default SignUpStudent;