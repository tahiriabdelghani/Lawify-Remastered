import logo from "../assets/images/logo-removebg.png";

const Logo = () => {
  return (
    <img
      style={{ width: "100px", height: "84px" }}
      src={logo}
      alt="Jobify"
      className="logo"
    />
  );
};

export default Logo;
