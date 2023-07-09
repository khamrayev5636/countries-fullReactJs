import "./header.scss";
import  Moon from "../../assets/svg/whitelogo.svg"

const Header = () => {
  return (
    <header className="header py-4">
      <div className="container">
        <div className="wrapper d-flex justify-content-between align-items-center">
          <a className="header__logo" href="#">
            Where in the world?
          </a>
          <div className="d-flex align-items-center">
            <img
              className="me-2"
              src={Moon}
              width={20}
              height={20}
              alt="header logo"
            />
            <button className="header__dark">Dark Mode</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
