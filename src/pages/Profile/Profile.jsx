import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

function EditProfile() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("token")
  console.log(token)
  const decodedToken = jwtDecode(token);
  console.log(decodedToken)

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
  const handleCancel = () => {
    navigate("/profile");
  };

  return (
    <div style={{ height: "200vh" }}>
      <div style={styles.header}>
        <div style={styles.imgdiv}>
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            alt="profile"
          />
        </div>
      </div>
      <div style={styles.Main}>
        <div style={styles.details}>
          <h1
            style={{
              position: "relative",
              left: "150px",
              top: "120px",
              fontSize: "35px",
            }}
          >
            Sujal
          </h1>
          <p
            style={{
              marginTop: "auto",
              marginLeft: "77px",
              marginBottom: "50px",
            }}
          >
            HELLO This the My Description Section. I AM A PROFESSIONAL.
          </p>
          {

            localStorage.getItem("token") ?
            <button
              style={{
                backgroundColor: "#612ce2",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                cursor: "pointer",
                marginLeft: "auto",
                marginRight: "-325px",
                marginTop: "50px",
                marginBottom: "auto",
                transition: "background-color 0.3s ease",
              }}
              onClick={handleClick}
            >
              <FontAwesomeIcon icon={faPen} style={{ marginRight: "5px" }} />
              Edit
            </button>
            :
            <></>
          }
          <div
            style={{
              marginRight: "30px",
              marginTop: "120px",
              marginBottom: "auto",
              backgroundColor: "#f2efff",
              height: "80px",
              width: "150px",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              borderRadius: "5px",
            }}
          >
            <h1
              style={{ fontWeight: "bold", color: "#612ce2", fontSize: "20px" }}
            >
              222
            </h1>
            <h1 style={{ color: "#211249" }}>Total Blogs</h1>
          </div>
          <div
            style={{
              marginRight: "150px",
              marginTop: "120px",
              marginBottom: "auto",
              backgroundColor: "#f0f7ff",
              height: "80px",
              width: "150px",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              borderRadius: "5px",
            }}
          >
            <h1
              style={{ fontWeight: "bold", color: "#4a87dd", fontSize: "20px" }}
            >
              212
            </h1>
            <h1 style={{ color: "#1d2c5e" }}>Reactions</h1>
          </div>
        </div>
        <hr
          style={{ width: "82%", margin: "auto", borderTop: "1px solid #ccc" }}
        />
        <div style={{ display: "flex", height: "100%" }}>
          <div
            style={{
              marginTop: "10px",
              marginLeft: "58px",
            }}
          >
            <h1
              style={{
                fontSize: "30px",
                alignContent: "center",
                marginLeft: "90px",
                paddingBottom: "25px",
              }}
            >
              Blogs
            </h1>
            <div
              style={{
                height: "500px",
                width: "130vh",
                marginLeft: "90px",
                justifyContent: "left",
                alignItems: "left",
              }}
            >
              <img
                src={
                  selectedImage
                    ? selectedImage
                    : "https://bootdey.com/img/Content/avatar/avatar7.png"
                }
                className="mb-4 cursor-pointer"
                style={{
                  borderRadius: "50%",
                  width: "400px",
                  height: "400px",
                }}
                alt="avatar"
              />
            </label>
            <input
              type="file"
              className="hidden"
              onChange={handleImageChange}
              id="imageUpload"
            />
          </div>
        </div>

        <div className="w-96">
          <h3 className="mb-6 text-xl font-semibold">Personal info</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4  ">
              <label className="mr-4 font-bold text-gray-800">
                First name:
              </label>
                    <div className="p-4 rounded-full bg-gray-600 " style={{ backgroundColor: 'lightgray' }}>#MobilePhotography</div>
                    <div className="p-4 rounded-full bg-gray-600" style={{ backgroundColor: 'lightgray' }}>#Photography</div>
                    <div className="p-4 px-6 rounded-full bg-gray-600" style={{ backgroundColor: 'lightgray' }}>#Mountain</div>
                    <div className="p-4 px-6 rounded-full bg-gray-600" style={{ backgroundColor: 'lightgray' }}>#Beautiful</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label className="mr-4 font-bold text-gray-800">Last name:</label>
              <input
                type="text"
                value={lastName}
                onChange={handleLastNameChange}
                className="flex items-end mt-2 border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                style={{ width: "300px" }}
              />
              {lastNameError && (
                <div className="text-red-500">{lastNameError}</div>
              )}
            </div>
            <div className="mb-4 ">
              <label className="mr-4 font-bold text-gray-800">Username:</label>
              <input
                type="text"
                value={username}
                onChange={handleUsernameChange}
                className="flex items-end mt-2 border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                style={{ width: "300px" }}
              />
              {usernameError && (
                <div className="text-red-500">{usernameError}</div>
              )}
            </div>
            <div className="mb-4">
              <label className="mr-4 font-bold text-gray-800">
                New Password:
              </label>
              <input
                type="password"
                value={newPassword}
                onChange={handlePasswordChange}
                className="flex items-end mt-2 border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                style={{ width: "300px" }}
              />
              {passwordError && (
                <div className="text-red-500">{passwordError}</div>
              )}
            </div>
            <div className="mb-4">
              <label className="mr-4 font-bold text-gray-800">
                Confirm Password:
              </label>
              <input
                type="password"
                value={newPassword}
                onChange={handlePasswordChange}
                className="flex items-end mt-2 border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                style={{ width: "300px" }}
              />
              {passwordError && (
                <div className="text-red-500">{passwordError}</div>
              )}
            </div>
            <div className="flex space-x-4">
              <div className="text-center py-4">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg border-none cursor-pointer hover:bg-blue-600"
                  style={{ width: "140px" }}
                >
                  Save Changes
                </button>
              </div>
              <div className="py-4">
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-lg"
                  style={{ width: "140px" }}
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default EditProfile;
