import "./App.css";
import Home from "./Routes/Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import UserLayout from "./components/UserLayout";
import Service from "./Routes/Service";
import Contact from "./Routes/Contact";
import About from "./Routes/About";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route   path="/service" element={<Service />}/>
          <Route path="/contact" element={<Contact />} />
          <Route   path="/about" element={<About />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
