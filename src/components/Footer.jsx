import React from 'react';

const Footer = () => {
    return (
        <footer className="page-footer #00695c teal darken-3">
        <div className="footer-copyright">
          <div className="container">
          © {new Date().getFullYear()} Смотрим и читаем внимательно
          <a className="grey-text text-lighten-4 right" href="https://github.com/chemikaldos/react-shop" rel="noreferrer" target='_blank'>React Shop</a>
          </div>
        </div>
      </footer>
    );
};

export default Footer;