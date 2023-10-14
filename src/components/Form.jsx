import React from "react";
import { useState } from "react";
import { checkValidateData } from "../utils/validate";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/store/userSlice";
const Form = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);

  const [errors, setErrors] = useState({});
  const [authError, setAuthError] = useState();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = checkValidateData(
      email,
      password,
      isSignInForm ? null : name
    );
    setErrors(validationErrors);

    const errorCount = Object.keys(validationErrors).filter(
      (errorKey) => !(isSignInForm && errorKey === "name")
    ).length;

    // If there are validation errors, return early
    if (errorCount > 0) {
      return;
    }

    // Sign In Sign Up Logic

    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          setAuthError();
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          }).then(() => {
            const { uid, email, displayName, photoURL } = auth.currentUser;

            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL,
              })
            );
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setAuthError(errorCode + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          setAuthError();
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setAuthError(errorCode + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrors({});
    setEmail("");
    setPassword("");
    setName("");
  };
  return (
    <div className="absolute top-0 left-0 w-full h-full flex place-items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="p-12 md:bg-[#000000BF] bg-black md:w-[420px] w-full md:h-[600px] h-full"
      >
        <div className="flex flex-col justify-center items-center h-5/6 gap-20 ">
          <div className="w-full">
            <h1 className="font-medium text-4xl text-white ">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>
          </div>
          <div className="w-full flex flex-col justify-center place-items-center">
            {!isSignInForm && (
              <>
                <input
                  type="text"
                  placeholder="Name"
                  className={`block w-full p-2 m-2 bg-gray-700 ${
                    errors.name ? "border border-red-500" : ""
                  }`}
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    setErrors((prevErrors) => {
                      const { name, ...rest } = prevErrors;
                      return rest;
                    });
                  }}
                  autoFocus={errors.name}
                />
                <div className="text-red-500 text-xs w-full h-4">
                  {errors.name ? <span>{errors.name}</span> : null}
                </div>
              </>
            )}
            <input
              type="email"
              placeholder="Email Address"
              className={`block w-full p-2 m-2 bg-gray-700 ${
                errors.email ? "border border-red-500" : ""
              }`}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrors((prevErrors) => {
                  const { email, ...rest } = prevErrors;
                  return rest;
                });
              }}
              autoFocus={errors.email}
            />
            <div className="text-red-500 text-xs w-full h-4">
              {errors.email ? <span>{errors.email}</span> : null}
            </div>
            <input
              type="password"
              placeholder="Password"
              className={`block w-full p-2 m-2 bg-gray-700 ${
                errors.password ? "border border-red-500" : ""
              }`}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setErrors((prevErrors) => {
                  const { password, ...rest } = prevErrors;
                  return rest;
                });
              }}
              autoFocus={errors.password}
            />
            <div className="text-red-500 text-xs w-full h-4">
              {errors.password ? <span>{errors.password}</span> : null}
            </div>

            <button
              //   onClick={handleBtnClick}
              className="block w-full p-4 m-4 bg-red-700 text-white font-bold rounded-lg"
            >
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <div
              onClick={toggleSignInForm}
              className="flex gap-2 cursor-pointer"
            >
              {isSignInForm ? (
                <>
                  <p className="text-gray-400">New to GPT-FLIX?</p>
                  <p className="text-white cursor-pointer"> Sign Up Now</p>
                </>
              ) : (
                <>
                  <p className="text-gray-400">Already Registered</p>
                  <p className="text-white cursor-pointer"> Sign In Now</p>
                </>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
