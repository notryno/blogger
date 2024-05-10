import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  const { token } = useParams(); 
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      margin: "auto",
      width: "600px",
      marginTop: "50px",
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
      paddingLeft: '18px'
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
    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    try {
      const res = await axios.post(
        `http://localhost:5079/api/auth/reset-password/${token}`,
        { password }
      );
      console.log(res.data); // You might want to handle this response in a meaningful way
      toast.success("Password reset successful.");
      //   history.push("/login"); // Redirect to login page after successful reset
    } catch (err) {
      console.error("Password reset failed:", err);
      toast.error("Password reset failed. Please try again later.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.text}>Reset Password</div>
        <div style={styles.underline}></div>
      </div>
      <div style={styles.inputs}>
        <div style={styles.input}>
          <input
            type="password"
            placeholder="New Password"
            style={styles.inputField}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div style={styles.input}>
          <input
            type="password"
            placeholder="Confirm Password"
            style={styles.inputField}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
      </div>
      <div style={styles.submit} onClick={handleResetPassword}>
        Reset Password
      </div>
      <Link to='/login'>
      <div style={styles.backLink}>Back to Login</div>
      </Link>
      <Toaster position="top-left" />
    </div>
  );
};

export default ResetPassword;