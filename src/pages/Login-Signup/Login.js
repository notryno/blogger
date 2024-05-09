import React, { useState } from "react";
import { motion } from "framer-motion";
import { RiLockPasswordLine } from "react-icons/ri";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Login = () => {
  const [showLogin, setShowLogin] = useState(true);

  const toggleForm = () => {
    setShowLogin((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-500 flex justify-center items-center">
      <div className="max-w-md w-full bg-white p-8 rounded shadow-md">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            {showLogin ? "Sign in to your account" : "Create an account"}
          </h2>
        </div>
        <Formik
          initialValues={{
            username: "",
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            country: "",
            phoneNumber: "",
            gender: "",
          }}
          validationSchema={Yup.object({
            username: Yup.string().required("Required"),
            email: Yup.string().email("Invalid email address").required("Required"),
            password: Yup.string().min(6, "Password must be at least 6 characters").required("Required"),
            firstName: Yup.string().required("Required"),
            lastName: Yup.string().required("Required"),
            country: Yup.string().required("Required"),
            phoneNumber: Yup.string().matches(/^[0-9]{10}$/, "Phone number must be 10 digits").required("Required"),
            gender: Yup.string().required("Required"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form className="mt-8 space-y-6">
            {/* Username field */}
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <Field
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                placeholder="Username"
                className="input-field"
              />
              <ErrorMessage name="username" component="div" className="error-message" />
            </div>

            {/* Password field */}
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <Field
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder="Password"
                className="input-field"
              />
              <ErrorMessage name="password" component="div" className="error-message" />
            </div>

            {/* Additional fields for Signup */}
            {!showLogin && (
              <>
                {/* First Name field */}
                <div>
                  <label htmlFor="firstName" className="sr-only">
                    First Name
                  </label>
                  <Field
                    id="firstName"
                    name="firstName"
                    type="text"
                    autoComplete="given-name"
                    placeholder="First Name"
                    className="input-field"
                  />
                  <ErrorMessage name="firstName" component="div" className="error-message" />
                </div>

                {/* Last Name field */}
                <div>
                  <label htmlFor="lastName" className="sr-only">
                    Last Name
                  </label>
                  <Field
                    id="lastName"
                    name="lastName"
                    type="text"
                    autoComplete="family-name"
                    placeholder="Last Name"
                    className="input-field"
                  />
                  <ErrorMessage name="lastName" component="div" className="error-message" />
                </div>

                {/* Email field */}
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Email"
                    className="input-field"
                  />
                  <ErrorMessage name="email" component="div" className="error-message" />
                </div>

                {/* Country field */}
                <div>
                  <label htmlFor="country" className="sr-only">
                    Country
                  </label>
                  <Field
                    id="country"
                    name="country"
                    type="text"
                    autoComplete="country"
                    placeholder="Country"
                    className="input-field"
                  />
                  <ErrorMessage name="country" component="div" className="error-message" />
                </div>

                {/* Phone Number field */}
                <div>
                  <label htmlFor="phoneNumber" className="sr-only">
                    Phone Number
                  </label>
                  <Field
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    autoComplete="tel"
                    placeholder="Phone Number"
                    className="input-field"
                  />
                  <ErrorMessage name="phoneNumber" component="div" className="error-message" />
                </div>

                {/* Gender field */}
                <div>
                  <label htmlFor="gender" className="sr-only">
                    Gender
                  </label>
                  <Field as="select" id="gender" name="gender" className="input-field">
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </Field>
                  <ErrorMessage name="gender" component="div" className="error-message" />
                </div>
              </>
            )}

            {/* Sign in / Sign up Button */}
            <div>
              <button
                type="submit"
                className="btn"
              >
                <span className="icon">
                  <RiLockPasswordLine className="icon" aria-hidden="true" />
                </span>
                {showLogin ? "Sign in" : "Sign up"}
              </button>
            </div>
          </Form>
        </Formik>

        {/* Toggle between login and signup forms */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-sm text-center mt-4"
        >
          <motion.button
            type="button"
            onClick={toggleForm}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="toggle-btn"
          >
            {showLogin ? "Create new account" : "Already have an account?"}
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
