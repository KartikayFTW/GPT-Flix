import Logo from "../assets/logo.png";
const Header = () => {
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 sm:2/3 md:w-1/2 w-2/3 ">
      <img
        // src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        src={Logo}
        alt="logo"
        className="w-44"
      />
    </div>
  );
};

export default Header;
