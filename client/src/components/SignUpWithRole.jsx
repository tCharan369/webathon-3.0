// SignUpWithRole.jsx
import { SignUp } from "@clerk/clerk-react";
import { useParams, useNavigate } from "react-router-dom";

function SignUpWithRole() {
  const { role } = useParams(); // Read role from URL
  const navigate = useNavigate();

  const roleRedirectMap = {
    student: "/student-dashboard",
    faculty: "/faculty-dashboard",
    admin: "/admin-dashboard",
  };

  const redirectUrl = roleRedirectMap[role] || "/";

  const handleAfterSignUp = async () => {
    try {
      // Update the user's public metadata with the role
      const user = window.Clerk?.user;
      if (user) {
        await user.update({
          publicMetadata: {
            role,
          },
        });
      }
      // Redirect to the appropriate dashboard
      navigate(redirectUrl);
    } catch (error) {
      console.error("Error during signup redirection:", error);
    }
  };

  return (
    <div className="signup-page">
      <SignUp
        path={`/signup/${role}`}
        routing="path"
        redirectUrl={redirectUrl}
        afterSignUp={handleAfterSignUp} // Use afterSignUp callback
        appearance={{
          elements: {
            card: "shadow-md rounded-xl p-6",
          },
        }}
      />
    </div>
  );
}

export default SignUpWithRole;
