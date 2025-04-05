import React from "react";
import { SignUp } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

function SignUpStudent() {
  const navigate = useNavigate();

  const handleAfterSignUp = () => {
    navigate("/student"); // Redirect to StudentPage after successful sign-up
  };

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
      />


    </div>
  );
}

export default SignUpStudent;