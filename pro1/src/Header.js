import './Header.css';

function Header() {
  return (
    <div className="">
      <header>
        <div className="container">
          <div className="row justify-content-between">
            <div className="logo">
              <h1>PL<span>.</span></h1>
            </div>
            <div className="nav align-self-center ">
              <ul >
                <li>
                  <a href="#">HOME</a>
                </li>
                <li>
                  <a href="#">ABOUT</a>
                </li>
                <li>
                  <a href="#">SERVICES</a>
                </li>
                <li>
                  <a href="#">PAGES</a>
                </li>
                <li>
                  <a href="#">BLOG</a>
                </li>
                <li>
                  <a href="#">CONTACT</a>
                </li>
              </ul>
            </div>
            <div className="align-self-center">
              <button className="button1">ORDER NOW</button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;