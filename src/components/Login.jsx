import { useState } from "react";
import Header from "./Header";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="relative h-screen">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="background"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        <div className="absolute top-0 left-0 w-full h-full flex place-items-center justify-center">
          <form className="p-12 md:bg-[#000000BF] bg-black md:w-[420px] w-full md:h-[600px] h-full">
            <div className="flex flex-col justify-center items-center h-5/6 gap-20 ">
              <div className="w-full">
                <h1 className="font-medium text-4xl text-white ">
                  {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>
              </div>
              <div className="w-full flex flex-col justify-center place-items-center">
                {!isSignInForm ? (
                  <input
                    type="text"
                    placeholder="Name"
                    className="block w-full p-2 m-2 bg-gray-700"
                  />
                ) : null}
                <input
                  type="text"
                  placeholder="Email Address"
                  className="block w-full p-2 m-2 bg-gray-700"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="block w-full p-2 m-2 bg-gray-700"
                />
                <button className="block w-full p-4 m-4 bg-red-700 text-white font-bold rounded-lg">
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
      </div>
    </div>
  );
};

export default Login;
