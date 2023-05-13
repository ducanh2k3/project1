import Header from "../components/Header";
import contactimg from "../assests/contact.jpg";
import Footer from "../components/footer";
import Form from "../components/Form";
const Contact = () => {
  return (
    <div>
      {" "}
      <Header CName={"background"} img={contactimg} h1={"Contact"} p={""} />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
