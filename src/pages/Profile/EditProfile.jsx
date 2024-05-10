import React, { useState } from "react";
import "./EditProfile.css";

function EditProfile() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [firstName, setFirstName] = useState("dey-dey");
  const [lastName, setLastName] = useState("bootdey");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("janesemail@gmail.com");
  const [newPassword, setNewPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [usernameError, setUsernameError] = useState("");

  const handleImageChange = (e) => {
    console.log("Image selected:", e.target.files[0]);
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setSelectedImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const validateFirstName = (value) => {
    if (!value) {
      setFirstNameError("First name is required");
      return false;
    } else if (/\d/.test(value)) {
      setFirstNameError("First name cannot contain numbers");
      return false;
    } else {
      setFirstNameError("");
      return true;
    }
  };

  const validateLastName = (value) => {
    if (!value) {
      setLastNameError("Last name is required");
      return false;
    } else if (/\d/.test(value)) {
      setLastNameError("Last name cannot contain numbers");
      return false;
    } else {
      setLastNameError("");
      return true;
    }
  };

  const validateUsername = (value) => {
    if (!value) {
      setUsernameError("Username is required");
      return false;
    } else {
      setUsernameError("");
      return true;
    }
  };

  const handleFirstNameChange = (e) => {
    const value = e.target.value;
    setFirstName(value);
    validateFirstName(value);
  };

  const handleLastNameChange = (e) => {
    const value = e.target.value;
    setLastName(value);
    validateLastName(value);
  };

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUsername(value);
    validateUsername(value);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setNewPassword(newPassword);
    if (newPassword.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields before submitting
    const isValid =
      validateFirstName(firstName) &&
      validateLastName(lastName) &&
      validateUsername(username) &&
      newPassword.length >= 8;

    if (isValid) {
      // Perform form submission
      console.log("Form submitted successfully!");
    } else {
      console.log("Form validation failed!");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center", color: "#007bff" }}>Edit Profile</h1>
      <hr />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width: "300px", marginRight: "20px" }}>
          <div style={{ textAlign: "center" }}>
            <img
              src={
                selectedImage
                  ? selectedImage
                  : "https://bootdey.com/img/Content/avatar/avatar7.png"
              }
              style={{ borderRadius: "50%", width: "200px", height: "200px" }}
              alt="avatar"
            />
            <h6>Upload a different photo...</h6>
            <input
              type="file"
              style={{ marginBottom: "10px" }}
              onChange={handleImageChange}
            />
          </div>
        </div>

        <div style={{ width: "400px" }}>
          <h3 style={{ marginBottom: "20px" }}>Personal info</h3>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "20px" }}>
              <label style={{ marginRight: "20px" }}>First name:</label>
              <input
                type="text"
                value={firstName}
                onChange={handleFirstNameChange}
              />
              {firstNameError && (
                <div style={{ color: "red" }}>{firstNameError}</div>
              )}
            </div>
            <div style={{ marginBottom: "20px" }}>
              <label style={{ marginRight: "20px" }}>Last name:</label>
              <input
                type="text"
                value={lastName}
                onChange={handleLastNameChange}
              />
              {lastNameError && (
                <div style={{ color: "red" }}>{lastNameError}</div>
              )}
            </div>
            <div style={{ marginBottom: "20px" }}>
              <label style={{ marginRight: "20px" }}>Username:</label>
              <input
                type="text"
                value={username}
                onChange={handleUsernameChange}
              />
              {usernameError && (
                <div style={{ color: "red" }}>{usernameError}</div>
              )}
            </div>
            <div style={{ marginBottom: "20px" }}>
              <label style={{ marginRight: "20px" }}>Email:</label>
              <input type="text" value={email} disabled />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <label style={{ marginRight: "20px" }}>New Password:</label>
              <input
                type="password"
                value={newPassword}
                onChange={handlePasswordChange}
              />
              {passwordError && (
                <div style={{ color: "red" }}>{passwordError}</div>
              )}
            </div>
            <div style={{ marginBottom: "20px" }}>
              <label style={{ marginRight: "20px" }}>Confirm Password:</label>
              <input
                type="password"
                value={newPassword}
                onChange={handlePasswordChange}
              />
              {passwordError && (
                <div style={{ color: "red" }}>{passwordError}</div>
              )}
            </div>
            <div style={{ textAlign: "center" }}>
              <button
                type="submit"
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#007bff",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default EditProfile;
