import Card from "./Card";
import Navbar from "./Navbar";

import classes from "./header.module.css";

const Header = (props) => {
  return (
    <>
      <div className={classes.card}>
        <Card>
          {" "}
          <Navbar />
        </Card>
      </div>
      <div className={classes.nav_links}>
        <img className={classes.img} src={props.img} alt="" />
        <div className={classes.header_text}>
          <h1>{props.h1}</h1>
          <p>{props.p}</p>
        </div>
      </div>
    </>
  );
};

export default Header;
