import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function EditProfile() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [firstName, setFirstName] = useState("dey-dey");
  const [lastName, setLastName] = useState("bootdey");
  const [username, setUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const navigate = useNavigate()

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
    navigate('/profile')
   }

  return (
    <div className="p-6 bg-gray-200">
      <h1 className="text-center text-blue-500 text-2xl font-bold mb-4">Edit Profile</h1>
      <hr />
      <div className="flex justify-center">
        <div className="w-64 mr-4">
          <div className="text-center">
            <img
              src={
                selectedImage
                  ? selectedImage
                  : "https://bootdey.com/img/Content/avatar/avatar7.png"
              }
              className="rounded-full w-48 h-48 mx-auto mb-4"
              alt="avatar"
            />
            <label htmlFor="imageUpload" className="cursor-pointer text-blue-500 text-3xl font-bold ">Upload Photo</label>
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
              <label className="mr-4 font-bold text-gray-800">First name:</label>

              <input
                type="text"
                value={firstName}
                onChange={handleFirstNameChange}
                className="flex items-end mt-2 border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              />
              {firstNameError && (
                <div className="text-red-500">{firstNameError}</div>
              )}
            </div>
            <div className="mb-4">
              <label className="mr-4 font-bold text-gray-800">Last name:</label>
              <input
                type="text"
                value={lastName}
                onChange={handleLastNameChange}
                className="flex items-end mt-2 border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
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
              />
              {usernameError && (
                <div className="text-red-500">{usernameError}</div>
              )}
            </div>
            <div className="mb-4">
              <label className="mr-4 font-bold text-gray-800">New Password:</label>
              <input
                type="password"
                value={newPassword}
                onChange={handlePasswordChange}
                className="flex items-end mt-2 border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              />
              {passwordError && (
                <div className="text-red-500">{passwordError}</div>
              )}
            </div>
            <div className="mb-4">
              <label className="mr-4 font-bold text-gray-800">Confirm Password:</label>
              <input
                type="password"
                value={newPassword}
                onChange={handlePasswordChange}
                className="flex items-end mt-2 border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
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
                >
                  Save Changes
                </button>
              </div>
              <div className="py-4">
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg" onClick={handleCancel}>Cancel</button>
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
