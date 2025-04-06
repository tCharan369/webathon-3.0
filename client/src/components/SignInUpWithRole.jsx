import { SignUp, SignIn, useUser } from "@clerk/clerk-react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function SignInUpWithRole({ mode = "signup" }) {
  // console.log("SignInUpWithRole component rendered");
  const { role } = useParams(); // student, faculty, admin
  const navigate = useNavigate();
  const { user } = useUser(); // 🛠 Correct usage of the hook

  const roleRedirectMap = {
    student: "/student-dashboard",
    faculty: "/faculty-dashboard",
    admin: "/admin-dashboard",
  };

  const redirectUrl = roleRedirectMap[role] || "/";

  const handleAfterAuth = async () => {
    console.log("handleAfterAuth called");
    try {
      if (user) {
        const userData = {
          firstName: user.firstName,
          fullName: user.fullName,
          email: user.primaryEmailAddress.emailAddress,
          profileImageUrl: user.profileImageUrl,
          role: role || "public",
        };

        console.log("Auth user data:", userData);

        // 🔄 Send data to backend with axios
        const response = await axios.post("http://localhost:1986/studentUser/createUser", userData);
        console.log("Backend response:", response.data);
      }

      // ✅ Navigate to appropriate dashboard
      navigate(redirectUrl);
    } catch (error) {
      console.error("Error during auth flow:", error);
    }
  };

  return (
    <div className="auth-page">
      {mode === "signup" ? (
        <SignUp
          path={`/signup/${role}`}
          routing="path"
          afterSignUp={handleAfterAuth}
          redirectUrl={redirectUrl}
          appearance={{
            elements: {
              card: "shadow-md rounded-xl p-6",
            },
          }}
        />
      ) : (
        <SignIn
        path={`/signin/${role}`}
        routing="path"
        afterSignIn={handleAfterAuth}
        afterSignInUrl={{redirectUrl} || null} // 👈 correct
        appearance={{
          elements: {
            card: "shadow-md rounded-xl p-6",
          },
        }}
      />
      
      )}
    </div>
  );
}

export default SignInUpWithRole;
