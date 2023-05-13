import Header from "../components/Header";
import img from "../assests/imghome.jpg";
import Destination from "../components/Destination";
import MoreDes from "../components/moredes";
import Footer from "../components/footer";
const Home = () => {
  return (
    <>
      {" "}
      <Header
        CName={"background"}
        img={img}
        header_text={"Get Started"}
        h1={"Welcome to Viet Nam"}
        p={"Choose Your Favorite Destination"}
      />
      <Destination />
      <MoreDes />
      <Footer/>

    </>
  );
};

export default Home;
