import classes from "./footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={classes.footer}>
        <div className={classes.top}>
          <div>
            <h1>Viet Nam</h1>
            <p>Welcome to Viet Nam</p>
          </div>
          <div>
            <div>
              <i className="fa-brands fa-facebook-square"></i>
              <i className="fa-brands fa-instagram-square"></i>
              <i className="fa-brands fa-square-twitter"></i>
            </div>
          </div>
        </div>
        <div className={classes.bottom}>
          <div>
            <h4>Project</h4>
            <p>Changelog</p>
            <p>Status</p>
            <p>License</p>
            <p>All versions</p>
          </div>
          <div>
            <h4>Community</h4>
            <p>Github</p>
            <p>Issues</p>
            <p>License</p>
            <p>All versions</p>
          </div>
          <div>
            <h4>Others</h4>
            <p>Terms of service</p>
            <p>Privacy Policy</p>
            <p>License</p>
          </div>
          <div>
            <h4>Help</h4>
            <p>Support</p>
            <p>Troubleshooting</p>
            <p>Contact Us</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
