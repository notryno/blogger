import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      margin: "auto",
      width: "600px",
      marginTop: "10px",
      backgroundColor: "white",
      paddingBottom: "10px",
      alignItems: "center",
    },
    header: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "9px",
      width: "100%",
      marginTop: "30px",
    },
    text: {
      color: "orange",
      fontSize: "48px",
      fontWeight: "700",
    },
    underline: {
      width: "90px",
      height: "6px",
      background: "orange",
      borderRadius: "9px",
    },
    inputs: {
      display: "flex",
      flexDirection: "column",
      gap: "25px",
      marginTop: "55px",
    },
    input: {
      display: "flex",
      alignItems: "center",
      margin: "-4px auto",
      width: "480px",
      height: "80px",
      backgroundColor: "#eaeaea",
      borderRadius: "6px",
      padding: "30px 0px",
    },
    submit: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "480px",
      height: "59px",
      color: "#fff",
      backgroundColor: "orange",
      borderRadius: "50px",
      fontSize: "19px",
      fontWeight: "700",
      cursor: "pointer",
      marginTop: "30px",
    },
    inputIcon: {
      margin: "0px 30px",
      color: "grey",
      fontSize: "20px",
    },
    inputField: {
      height: "30px",
      width: "400px",
      background: "transparent",
      border: "none",
      outline: "none",
      color: "#797979",
      fontSize: "19px",
    },
    backLink: {
      display: "flex",
      alignItems: "center",
      color: "orange",
      cursor: "pointer",
      fontSize: "18px",
      marginTop: "20px",
    },
  };

  const handleResetPassword = async () => {
    // Implement your password reset logic here
    try {
      // Example of sending a reset password request
      const res = await axios.post(
        "http://localhost:5079/api/auth/reset-password",
        { email }
      );
      console.log(res.data); // You might want to handle this response in a meaningful way
      toast.success("Password reset instructions sent to your email.");
      navigate("/login"); // Redirect to the login page after sending reset instructions
    } catch (err) {
      console.error("Password reset failed:", err);
      toast.error("Password reset failed. Please try again later.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.text}>Forgot Password</div>
        <div style={styles.underline}></div>
      </div>
      <div style={styles.inputs}>
        <div style={styles.input}>
          <FontAwesomeIcon icon={faEnvelope} style={styles.inputIcon} />
          <input
            type="text"
            placeholder="Enter your email"
            style={styles.inputField}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div
        style={{
          ...styles.submit,
        }}
        onClick={handleResetPassword}
      >
        Reset Password
      </div>
      <div style={styles.backLink} onClick={() => navigate("/login")}>
        Back to Login
      </div>
      <Toaster position="top-left" />
    </div>
  );
};

export default ForgotPassword;
