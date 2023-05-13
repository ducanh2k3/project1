import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Menu } from "./Data";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [icon, setIcon] = useState("fas fa-bars");
  const [isActive, setIsActive] = useState(false);
  const [def, setDef] = useState(classes.NavbarItems);

  const Close = () => {
    setIcon("fas fa-times");
    setIsActive(!isActive);
    if (icon === "fas fa-times") {
      setIcon("fas fa-bars");
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setDef(classes.NavbarItemsWhite);
      } else {
        setDef(classes.NavbarItems);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [def]);
  return (
    <>
      <nav className={def}>
        <h1 className={classes.NavbarLogo}>Viet Nam</h1>
        <div className={classes.menuicons}>
          <i onClick={Close} className={icon}></i>
        </div>
        <ul className={`${classes.nav_menu} ${isActive ? classes.active : ""}`}>
          {Menu.map((item, index) => {
            return (
              <li key={index}>
                {" "}
                <Link className="text-center" to={item.url}>
                  {" "}
                  <i className={item.icon}></i> {item.title}
                </Link>{" "}
              </li>
            );
          })}
        </ul>
      </nav>
      <Outlet></Outlet>
    </>
  );
};

export default Navbar;
