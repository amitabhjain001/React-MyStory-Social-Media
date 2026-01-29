const Footer = ({ setSelectedTab }) => {
  return (
    <div className="container">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a
              href="#"
              className="nav-link px-2 text-body-secondary"
              onClick={() => setSelectedTab("Home")}
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#"
              className="nav-link px-2 text-body-secondary"
              onClick={() => setSelectedTab("About")}
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#"
              className="nav-link px-2 text-body-secondary"
              onClick={() => setSelectedTab("Signup")}
            >
              Sign Up
            </a>
          </li>
        </ul>
        <p className="text-center text-body-secondary">© 2026 Company, Inc</p>
      </footer>
    </div>
  );
};

export default Footer;
