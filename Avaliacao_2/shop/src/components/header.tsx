const Header = () => (
  <>
    <header>
      <div className="container head">
        <button onClick={() => window.scrollTo(0, 0)} className="top">
          <img src="./images/logo.png" alt="Logo" width="128" />
        </button>
        <a href="#cart">
          <img src="./images/cart.png" alt="Cart" width="32" />
        </a>
      </div>
    </header>
    <div className="space"></div>
  </>
);

export default Header;
