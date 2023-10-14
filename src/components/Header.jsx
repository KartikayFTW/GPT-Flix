import Logo from "../assets/logo.png";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);
  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
        //signout successful
        navigate("/");
      })
      .catch((error) => {
        // An error happened
        console.log(error);
      });
  };
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10  w-screen  flex justify-between">
      <img src={Logo} alt="logo" className="w-44" />
      {user && (
        <div className="flex gap-4">
          <div>
            <img
              src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-vnl1thqrh02x7ra2.webp"
              alt="profile"
              className="w-12  h-12"
            />
          </div>
          <button className="font-bold text-white" onClick={signOutHandler}>
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
