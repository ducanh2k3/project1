import classes from "./Destination.module.css";
import Desdata from "./desdata";
import halong1 from "../assests/halong1.jpg";
import halong2 from "../assests/halong2.jpg";
import pq1 from "../assests/pq1.jpg";
import pq2 from "../assests/pq2.jpg";
const Destination = () => {
  return (
    <div className={classes.destination}>
      <h1>Popular Destination</h1>
      <p>Some beautiful place for you to visit when you come to Viet Nam</p>
      <Desdata
        header={"Ha Long Bay , Quang Ninh"}
        text={`  This iconic Vietnamese landscape deserves its fame.
         Embarking on an overnight cruise through the emerald waters is
          an experience like no other. Sunsets over the bay are magnificent a
          nd the mist rising off the waters adds an eerie, mysterious element
           to this geological wonder. It’s the number one tourist destination 
           in Vietnam so it can be crammed during high season, but gazing at the
            limestone formations in the water is worth it.`}
        img1={halong1}
        img2={halong2}
        CName={classes.firstdes}
      />
      <Desdata
        header={"Phu Quoc, Kien Giang"}
        text={`Phu Quốc island is undergoing massive construction to accommo
        date the recent flood of domestic and foreign tourists and is
         predicted to become Asia’s top vacation destination in the coming years. 
         Phú Quốc is home to dense jungles and stunning waterfalls and the northern
          beaches are still relatively untouched by tourism..`}
        img1={pq1}
        img2={pq2}
        CName={classes.seconddes}
      />
    </div>
  );
};

export default Destination;
