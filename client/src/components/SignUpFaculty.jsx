import React from "react";
import { SignUp } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

function SignUpFaculty() {
  const navigate = useNavigate();

  const handleAfterSignUp = () => {
    navigate("/faculty"); // Redirect to FacultyPage after successful sign-up
  };

  return (
    <div className="d-flex justify-content-center align-items-center h-100 mt-5">
      <SignUp
        path="/signup/faculty"
        routing="path"
        signInUrl="/signin/faculty"
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

export default SignUpFaculty;