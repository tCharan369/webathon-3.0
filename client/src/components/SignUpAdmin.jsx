import React from "react";
import { SignUp } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

function SignUpAdmin() {
  const navigate = useNavigate();

  const handleAfterSignUp = () => {
    navigate("/admin"); // Redirect to AdminPage after successful sign-up
  };

  return (
    <div className="d-flex justify-content-center align-items-center h-100 mt-5">
      <SignUp
        path="/signup/admin"
        routing="path"
        signInUrl="/signin/admin"
        afterSignUp={handleAfterSignUp} // Redirect after sign-up
        afterSignIn={handleAfterSignUp} // Redirect after sign-in
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

export default SignUpAdmin;