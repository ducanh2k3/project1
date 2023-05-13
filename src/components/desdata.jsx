import classes from "./Destination.module.css";

const Desdata = (props) => {
  return (
    <div className={props.CName}>
      <div className={classes.des_text}>
        <h2>{props.header}</h2>
        <p>
        {props.text}
        </p>
      </div>
      <div className={classes.img}>
        <img src={props.img1} alt="" />
        <img src={props.img2} alt="" />
      </div>
    </div>
  );
};

export default Desdata