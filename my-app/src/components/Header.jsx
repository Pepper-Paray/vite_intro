import React from "react";
import PropTypes from "prop-types";
import "./Header.css"; // Optional external CSS

/**
 * Header Component
 * @param {string} title - The main title text.
 * @param {Array} links - Navigation links [{ label: string, href: string }]
 */
const Header = ({ title, links }) => {
  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__title">{title}</h1>
        <nav className="header__nav">
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

// Prop validation
Header.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ),
};

// Default props
Header.defaultProps = {
  links: [],
};

export default Header;
