import Header from "../../components/Header";
import Form from "../../components/Form";
const Login = () => {
  return (
    <div>
      <Header />
      <div className="relative h-screen">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="background"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        <Form />
      </div>
    </div>
  );
};

export default Login;
