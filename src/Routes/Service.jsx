import Header from "../components/Header";
import serviceimg from "../assests/service.jpg";
import Footer from "../components/footer";
import MoreDes from "../components/moredes";

const Service = () => {
  return (
    <div>
      {" "}
      <Header CName={"background"} img={serviceimg} h1={"Service"} p={""} />
      <MoreDes />
      <Footer />
    </div>
  );
};

export default Service;
