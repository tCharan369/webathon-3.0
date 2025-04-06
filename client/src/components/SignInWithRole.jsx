import React from "react";
import { SignIn } from "@clerk/clerk-react";
import { useParams } from "react-router-dom";

function SignInWithRole() {
  const { role } = useParams();

  const roleRedirectMap = {
    student: "/student-dashboard",
    faculty: "/faculty-dashboard",
    admin: "/admin-dashboard",
  };

  const redirectUrl = roleRedirectMap[role] || "/";

  return (
    <div className="signin-page d-flex justify-content-center align-items-center h-100 mt-5">
      <SignIn
        path={`/signin/${role}`}
        routing="path"
        redirectUrl={redirectUrl}
        appearance={{
          elements: {
            card: "shadow-md rounded-xl p-6",
          },
        }}
      />
    </div>
  );
}

export default SignInWithRole;