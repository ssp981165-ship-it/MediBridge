import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <span className="website-name">MediBridge</span>
        <span className="copyright">
          © {new Date().getFullYear()} MediBridge. All rights reserved.
        </span>
      </div>
    </footer>
  );
};
