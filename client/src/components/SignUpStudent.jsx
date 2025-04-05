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
        afterSignUp={handleAfterSignUp} // Redirect after sign-up
        appearance={{
          layout: {
            socialButtonsPlacement: "top", // Display social buttons at the top
          },
        }}
        socialButtons={["google"]} // Enable Google OAuth
      />
    </div>
  );
}

export default SignUpStudent;