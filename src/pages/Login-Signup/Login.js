import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVenusMars,
  faUser,
  faGlobe,
  faEnvelope,
  faLock,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import ReactFlagsSelect from "react-flags-select";
import Select from "react-select";

const Login = () => {
  const [action, setAction] = useState("Sign Up");
  const [showPassword, setShowPassword] = useState(false);
  const [selected, setSelected] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    console.log(`Option selected:`, selectedOption);
  };

  const options = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Others", label: "Others" },
  ];

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      margin: "auto",
      width: "600px",
      marginTop: "10px",
      backgroundColor: "white",
      paddingBottom: "10px",
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
      width: "9 0px",
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
    forgotPassword: {
      paddingLeft: "62px",
      marginTop: "25px",
      color: "#797979",
      fontSize: "18px",
    },
    forgotPasswordSpan: {
      color: "#4c00b4",
      cursor: "pointer",
    },
    submitContainer: {
      display: "flex",
      gap: "30px",
      margin: "60px auto",
    },
    submit: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "220px",
      height: "59px",
      color: "#fff",
      background: "orange",
      borderRadius: "50px",
      fontSize: "19px",
      fontWeight: "700",
      cursor: "pointer",
    },
    graySubmit: {
      background: "white",
      color: "#676767",
      border: "1px solid #676767",
    },
    countryselect: {
      width: "450px",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.text}>{action}</div>
        <div style={styles.underline}></div>
      </div>
      <div style={styles.inputs}>
        {action !== "Login" && (
          <>
            <div style={styles.input}>
              <FontAwesomeIcon icon={faUser} style={styles.inputIcon} />
              <input
                type="text"
                placeholder="Full Name"
                style={styles.inputField}
              />
            </div>
            <div style={styles.input}>
              <FontAwesomeIcon icon={faUser} style={styles.inputIcon} />
              <input
                type="text"
                placeholder="Username"
                style={styles.inputField}
              />
            </div>
            <div style={styles.input}>
              <FontAwesomeIcon icon={faVenusMars} style={styles.inputIcon} />
              <Select
                value={selectedOption}
                onChange={handleChange}
                options={options}
                placeholder="Gender"
                isClearable
                styles={{
                  control: (provided) => ({
                    ...provided,
                    width: "350px",
                    margin: "10px 0",
                    backgroundColor: "rgb(234, 234, 234)",
                  }),
                }}
              />
            </div>
            <div style={styles.input}>
              <FontAwesomeIcon icon={faGlobe} style={styles.inputIcon} />
              <ReactFlagsSelect
                selected={selected}
                onSelect={(code) => setSelected(code)}
                className="countryselect" // Apply custom CSS class
                placeholder="Country"
                searchable
                searchPlaceholder="Search Country"
                selectedSize={20}
                fullWidth={false}
              />
            </div>
          </>
        )}
        <div style={styles.input}>
          <FontAwesomeIcon icon={faEnvelope} style={styles.inputIcon} />
          <input type="text" placeholder="Email" style={styles.inputField} />
        </div>

        <div style={styles.input}>
          <FontAwesomeIcon icon={faLock} style={styles.inputIcon} />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            style={{
              ...styles.inputField,
              width: "360px",
            }}
          />
          <FontAwesomeIcon
            icon={showPassword ? faEyeSlash : faEye}
            onClick={togglePasswordVisibility}
            style={{ color: "grey", fontSize: "20px", cursor: "pointer" }}
          />
        </div>
      </div>
      {action === "Sign Up" ? (
        <div></div>
      ) : (
        <div style={styles.forgotPassword}>
          Forgot Password?{" "}
          <span style={styles.forgotPasswordSpan}>Click here</span>
        </div>
      )}
      <div style={styles.submitContainer}>
        <div
          style={
            action === "Login"
              ? { ...styles.submit, ...styles.graySubmit }
              : { ...styles.submit, color: "white" } // Set color to white when "Sign Up" button is not selected
          }
          onClick={() => setAction("Sign Up")}
        >
          Sign Up
        </div>
        <div
          style={
            action === "Sign Up"
              ? { ...styles.submit, ...styles.graySubmit }
              : { ...styles.submit, color: "white" } // Set color to white when "Login" button is not selected
          }
          onClick={() => setAction("Login")}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default Login;
