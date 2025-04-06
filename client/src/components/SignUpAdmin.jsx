import React from "react";
import { SignUp } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

function SignUpAdmin() {
  const navigate = useNavigate();

  const handleAfterSignUp = () => {
    navigate("/admin"); // Redirect to the admin page after sign-up
  };

  return (
    <div className="d-flex justify-content-center align-items-center h-100 mt-5">
      <SignUp
        path="/signup/admin"
        routing="path"
        signInUrl="/signin/admin"
        afterSignUp={handleAfterSignUp}
        appearance={{
          layout: {
            socialButtonsPlacement: "top", // Display social buttons at the top
          },
        }}
        socialButtons={["google"]} // Enable Google OAuth
        signUpAttributes={{
          publicMetadata: { role: "admin" }, // Pass role as metadata
        }}
      />
    </div>
  );
}

export default SignUpAdmin;
