import classes from "./moredes.module.css";
import { DataTrip } from "./Data";

const MoreDes = (props) => {
  return (
    <div className={classes.trip}>
      <div>
        <h1>More Destination for you !</h1>
        <p>You can discover unique and beautiful place in Viet Nam </p>
      </div>
      <div className={classes.tripcover}>
        {DataTrip.map((item,index) => {
          console.log(item);
          return (
            <div key={index} className={classes.tripcard}>
              <div className={classes.img}>
                <img src={item.img} alt="" />
              </div>
              <div>
                <h4>{item.name}</h4>
                <p>{item.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MoreDes;
