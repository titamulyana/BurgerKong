import Logo from "../../src/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faSignOut, faUserPlus, faBowlFood, faBurger } from "@fortawesome/free-solid-svg-icons";
const House = <FontAwesomeIcon icon={faHouse} />;
const Sign = <FontAwesomeIcon icon={faSignOut} />;
const User = <FontAwesomeIcon icon={faUserPlus} />;
const Food = <FontAwesomeIcon icon={faBurger} />;

export default function SideBar() {
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem("access_token");
    navigate("/login", { replace: true });
  };

  return (
    <div className="col-2">
      <div className="card shadow align-items-center" style={{ height: "100vh" }}>
        <div className="my-4 text-center">
          <img src={Logo} style={{ height: "60px", flex: "1", resizeMode: "contain" }} />
          <p style={{ fontFamily: "cursive", fontSize: "25px", lineHeight: "2" }}>
            <b>Burger Kong</b>
          </p>
        </div>
        <div className="w-100">
          <Link to="/" style={{ color: "black", textDecoration: "none" }} className="card m-1 p-1 text-center">
            {House}Dashboard
          </Link>
          <Link to="/register" style={{ color: "black", textDecoration: "none" }} className="card m-1 p-1 text-center">
            {User}Register Admin
          </Link>
          <Link to="/add-food" style={{ color: "black", textDecoration: "none" }} className="card m-1 p-1 text-center">
            {Food}Add Food
          </Link>
          <li onClick={logOut} className="card mx-1 p-1 text-center" style={{ color: "red" }}>
            {Sign}Sign Out
          </li>
        </div>
      </div>
    </div>
  );
}
