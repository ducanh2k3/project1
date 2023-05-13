import aboutimg from "../assests/about.jpg";
import Header from "../components/Header";
import Footer from "../components/footer";
import AboutText from "../components/aboutext";

const About = () => {
  return (
    <div>
      {" "}
      <Header CName={"background"} img={aboutimg} h1={"About"} p={""} />
      <AboutText />
      <Footer />
    </div>
  );
};

export default About;
