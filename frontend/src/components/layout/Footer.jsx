import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiFillInstagram, AiFillYoutube, AiFillLinkedin } from "react-icons/ai";
import { FaGitSquare } from "react-icons/fa";
import { Context } from "../../main";

const Footer = () => {
  const isDashboard = useLocation("http://localhost:5173/dashboard");
  const { mode, setMode } = useContext(Context);

  return (
    <footer
      className={
        isDashboard.pathname === "/dashboard"
          ? "hideFooter"
          : mode === "light"
          ? "light-footer"
          : "dark-footer"
      }
    >
      <div className="container">
        <div className="about">
          <h3>İletişim</h3>
          <p>
          Reklam, Sponsorluk, Soru ve Tavsiyeleriniz için: 
          </p>
          <p>
            <span>Email:</span>semasevim@gmail.com
          </p>
          <p>
            <span>Phone:</span>0123987123
          </p>
        </div>
        <div className="quick_links">
          <h3>Sayfalar</h3>
          <ul>
            <Link to={"/"}>Anasayfa</Link>
            <Link to={"/blogs"}>Bloglar</Link>
            <Link to={"/about"}>Hakkımızda</Link>
            <Link to={"/dashboard"}>Dashboard</Link>
          </ul>
        </div>
        <div className="categories">
          <h3>Katagoriler</h3>
          <ul>  
            <li>Avrupa</li>
            <li>Asya</li>
            <li>Afrika</li>
            <li>Güney Amerika</li>
            <li>Kuzey Amerika</li>
            <li>Avustralya</li>
          </ul>
        </div>
        <div className="news_letter">
          <div>
            <h3>Haftalık Bülten</h3>
            <p>Yayınlanan en yeni içeriklerimizden haberdar olmak için Abone Olun!</p>
          </div>
          <div>
            <input type="text" placeholder={`Email`} />
            <button>Abone Ol</button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="logo">Travel <span>Blog</span></div>
        <div className="links">
          <Link to={"/"} target="_blank">
            <AiFillInstagram />
          </Link>
          <Link to={"/"} target="_blank">
            <FaGitSquare />
          </Link>
          <Link to={"https://www.linkedin.com/in/semasevim/"} target="_blank">
            <AiFillYoutube />
          </Link>
          <Link to={"https://github.com/SemaSevim/"} target="_blank">
            <AiFillLinkedin />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
