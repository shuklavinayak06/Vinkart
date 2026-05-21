import CommonForm from "@/components/common/form";
import { useToast } from "@/components/ui/use-toast";
import { loginFormControls } from "@/config";
import { loginUser } from "@/store/auth-slice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
};

function AuthLogin() {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const { toast } = useToast();

  function onSubmit(event) {
    event.preventDefault();
    dispatch(loginUser(formData)).then((data) => {
      if (data?.payload?.success) {
        toast({ title: data?.payload?.message });
      } else {
        toast({ title: data?.payload?.message, variant: "destructive" });
      }
    });
  }

  return (
    <div style={{ width: "100%", maxWidth: "400px" }}>

      {/* Header */}
      <div style={{ marginBottom: "2.5rem" }}>
        <p style={{
          fontSize: "0.7rem", letterSpacing: "0.3em",
          color: "#999", textTransform: "uppercase", marginBottom: "0.5rem"
        }}>
          Welcome back
        </p>
        <h1 style={{
          fontSize: "2rem", fontWeight: "800", color: "#111",
          letterSpacing: "-0.02em", marginBottom: "0.5rem"
        }}>
          Sign in
        </h1>
        <div style={{
          width: "30px", height: "2px",
          background: "#111", marginBottom: "1rem"
        }} />
        <p style={{ color: "#999", fontSize: "0.9rem" }}>
          Don't have an account?{" "}
          <Link to="/auth/register" style={{
            color: "#111", fontWeight: "700",
            textDecoration: "none", borderBottom: "1.5px solid #111",
            paddingBottom: "1px", letterSpacing: "0.02em"
          }}>
            Register
          </Link>
        </p>
      </div>

      {/* Form */}
      <CommonForm
        formControls={loginFormControls}
        buttonText={"Sign In"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />

    </div>
  );
}

export default AuthLogin;