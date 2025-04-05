import React from "react";
import { SignUp } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

function SignUpFaculty() {
  const navigate = useNavigate();

  const handleAfterSignUp = () => {
    navigate("/faculty");
  };

  return (
    <div className="d-flex justify-content-center align-items-center h-100 mt-5">
      <SignUp
        path="/signup/faculty"
        routing="path"
        signInUrl="/signin/faculty"
        afterSignUp={handleAfterSignUp}
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

export default SignUpFaculty;
