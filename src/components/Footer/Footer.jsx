import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer__inner">
          <div className="footer__links">
            <a href="https://bookie.uz/" target="_blank">
              Bookie.uz
            </a>
            <ul className="footer__list">
              <li>
                <a
                  href="https://www.instagram.com/bookie_karakalpak/?utm_medium=copy_link"
                  target="_blank"
                >
                  <svg focusable="false" viewBox="0 0 24 24" ariaРidden="true">
                    <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://t.me/bookie_nks" target="_blank">
                  <svg focusable="false" viewBox="0 0 24 24" ariaРidden="true">
                    <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCrb_94b-JGhG0X43CUx6CyA"
                  target="_blank"
                >
                  <svg focusable="false" viewBox="0 0 24 24" ariaРidden="true">
                    <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__made">
            <p>Made by INTUZA ACADEMY</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
