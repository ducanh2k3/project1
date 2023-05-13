import hoian from "../assests/hoian.jpg";
import danang from "../assests/danang.jpg";
import dalat from "../assests/dalat.jpg";

export const Menu = [
  {
    title: "Home",
    url: "/",
    CName: "nav_links",
    icon: "fa-solid fa-house-user",
  },
  {
    title: "About",
    url: "/about",
    CName: "nav_links",
    icon: "fa-solid fa-circle-info",
  },
  {
    title: "Service",
    url: "/service",
    CName: "nav_links",
    icon: "fa-solid fa-briefcase",
  },
  {
    title: "Contact",
    url: "/contact",
    CName: "nav_links",
    icon: "fa-solid fa-address-book",
  },
];

export const DataTrip = [
  {
    name: "Da Lat",
    text: "Nestled in the southern highland region of the country, picturesque Đà Lạt is a refreshing break from the south’s tropical climate. Cool temperatures and fresh air – not the mention the gorgeous surroundings – make Đà Lạt a must-see destination. You can catch a quick flight from Saigon or hop on a bus.",
    img:  dalat ,
  },
  {
    name: "Da Nang",
    text: "Da Nang is Vietnam’s third largest city and lies approximately 30km (19mi) north of Hoi An. This is the city you’ll fly into before driving south into the colonial town, but Da Nang is also a great city to explore. Like any coastal Vietnamese town, Da Nang’s white sand and clear water beaches are a must for beach lovers whilst the city has some fabulous nightlife too. The Dragon Bridge is illuminated at night and the whole place looks incredible from the vantage point of one of its many rooftop bars.",
    img: danang ,
  },
  {
    name: "Hoi An",
    text: "Charming Hoi An is another top choice for Vietnamese and foreign vacationers, and it features on Culture Trip’s specially curated small-group Vietnam tour. The old city is full of colonial architecture and is a lovely place to take in an early morning or late afternoon stroll, when the sun is no longer at its blistering peak. Lush gardens, illuminated lanterns glowing after dark, good food and gorgeous beaches await at this dreamy, ancient spot in central Vietnam.",
    img: hoian ,
  },
];
