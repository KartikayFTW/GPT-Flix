import Logo from "../assets/logo.png";
const Header = () => {
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 sm:2/3 md:w-1/2 w-2/3 ">
      <img src={Logo} alt="logo" className="w-44" />
    </div>
  );
};

export default Header;
