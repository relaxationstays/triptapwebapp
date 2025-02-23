import { BiSolidHotel } from "react-icons/bi";
import {
  FaArrowAltCircleLeft,
  FaBusAlt,
  FaCar,
  FaExchangeAlt,
  FaRegArrowAltCircleLeft,
} from "react-icons/fa";
import { FaTrainSubway } from "react-icons/fa6";
import { GrSchedules } from "react-icons/gr";
import { PiAirplaneTakeoff } from "react-icons/pi";

// menuData.js
export const headerDataSection = {
  name: "TripTrap",
  headertext: [
    {
      title: "deals",
      id: 1,
    },
    {
      title: "deals",
      id: 2,
    },
    {
      title: "support",
      id: 3,
    },
    {
      title: "bookings",
      id: 3,
    },
  ],
  headerButtom: [
    {
      name: "login",
      id: "1",
    },
    {
      name: "register",
      id: "1",
    },
  ],
};
export const headerTwoSection = {
  name: "header",
  headerTwoSectionButton: [
    {
      title: "hotels",
      id: 1,
      icon: <BiSolidHotel />,
    },
    {
      title: "flights",
      id: 2,
      icon: <PiAirplaneTakeoff />,
    },
    {
      title: "trains",
      id: 3,
      icon: <FaTrainSubway />,
    },
    {
      title: "bus & travel",
      id: 4,
      icon: <FaBusAlt />,
    },
    {
      title: "car rentals",
      id: 5,
      icon: <FaCar />,
    },
    {
      title: "events",
      id: 6,
      icon: <GrSchedules />,
    },
  ],
};
export const MainSection = {
  name: "header",
  text1:
    "where you get trapped in the beauty of the world and unforgettable happiness",
  text2:
    "At triptrap, we believe that every journey is an opportunity for adventure, discovery and unfrogettable experience",
  btntext: "booking Now",

  col2heading: "Find Hotels",
  text1co: "City or Hotel Name",
  text2Col1: "Check in",
  text2Col3: "Duration",
  text2Col3: "Guest and Rooms",
  btntextx: "Search Hotel",
};

export const BigPromoSection = {
  name1: "big",
  name2: "promo",
  text1: "limited time offer book now and save big!",
  text2:
    "Big Promo Alert! Are your ready for the ultimate adventure at unbeatable price? TripTrap is thrilled to announce our lastest Big Promo, offering your incredible deals on your dream vacations! ",
  btntext: "book Now",
  imagedata: [
    {
      text1: "Let's Explore Together",
      textimage: <FaRegArrowAltCircleLeft />,
      promo: "Special Offer",
      bg: "https://static.vecteezy.com/system/resources/previews/028/534/308/non_2x/couple-young-travel-and-take-a-selfie-on-journey-generative-ai-free-photo.jpeg",
      text2:
        "Embark on a journey with us and uncover new horizons, create lasting memories, and make every trip extraordinary.",
    },
    {
      text1: "Our adventure awaits",
      promo: "New heights",
      text2:
        "At TripTap, the world is our playground, and every journey is an opportunity to discover something new. Join us as we explore the wonders of the world and create memories that will last a lifetime.",
      textimage: <FaExchangeAlt />,
      bg: "https://qph.cf2.quoracdn.net/main-qimg-7fac816f2dca689c9d8d24079bb19ab6-lq",
    },
    {
      text1: "Snowy winter wonderland",
      textimage: <FaRegArrowAltCircleLeft />,
      promo: "Year End Promo",
      bg: "https://america.sullair.com/sites/default/files/2020-01/Snowmaking1.png",
      text2:
        "Experience the magic of a snowy escape this winter. From cozy cabins to thrilling slopes, adventure awaits!",
    },
    {
      text1: "Flight next week",
      promo: "Ramadam Promo",
      textimage: <FaRegArrowAltCircleLeft />,
      bg: "https://images.pexels.com/photos/112116/pexels-photo-112116.jpeg?cs=srgb&dl=pexels-tarik-nachat-28300-112116.jpg&fm=jpg",
      text2:
        "Plan your next journey during Ramadan and enjoy exclusive offers on flights, destinations, and more.",
    },
  ],
};

export const bannerSection = {
  text1: "Ready to embark on your next",
  text2: "adventure? Connect with TripTrip today",
  text3: "to start planninf your dream trip",
  bttex: "Booking Now",
};
export const recommendSection = {
  name: "Recommeded for you",
  text2: "I hope i find these",
  text2x: "recommedation enjoyable",
  array: [
    {
      title: "Surfing at Sundak",
      price: 250.0,
      description:
        "Experience stunning sunsets, white-washed buildings, and crystal-clear waters.",
      action: "Booking Trip",
      bg: "https://images.unsplash.com/photo-1676196919586-32234be2a211?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Rafting at Progo",
      price: 125.0,
      description: "Experience stunning sunsets, white-washed waters.",
      action: "Booking Trip",
      bg: "https://cdn.britannica.com/87/138787-050-33727493/Belovezhskaya-Forest-Poland.jpg",
    },
    {
      title: "Baturaden Bobocabin",
      price: 150.0,
      description: "Experience stunning sunsets, white-washed.",
      action: "Booking Trip",
      bg: "https://static.wixstatic.com/media/fa6e10_ee6f4d8d64474e899005d608ea7bb97a~mv2.jpg/v1/fill/w_480,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Instagram%20-%20eallistone_edited_edited_edi.jpg",
    },
    {
      title: "Dieng Villa View",
      price: 750.0,
      description: "Experience stunning sunsets, white-washed.",
      action: "Booking Trip",
      bg: "https://media.newyorker.com/photos/672a8e53acc456ea88e11b1b/3:4/pass/r45252web.jpg ",
    },
  ],
};

export const BestSection = {
  title: "Best Event for 2024",
  title2:
    // "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",

  span: " Carnevale",
  span1: " at Venesla",
  btnText: "Booking Ticket",
  bg: "https://img.lovepik.com/background/20211021/large/lovepik-pink-background-image_400110349.jpg",
  text1:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  text2: "Lorem ipsum dolor sit  ",
  text3: "Lorem ipsum dolor sit amet,  elit",
};

export const AboutSection = {
  name1: "about",
  name2: "us",
  text1:
    "where you get trapped in the beauty of the world and unforgettable happiness",
  text2:
    "Big Promo Alert! Are your ready for the ultimate adventure at unbeatable price? TripTrap is thrilled to announce our lastest Big Promo, offering your incredible deals on your dream vacations! ",
  btntext: "book Now",
  imagedata: [
    {
      text1: "",
      text1: "",
      textimage: "",
    },
    {
      text1: "",
      text1: "",
      textimage: "",
    },
    {
      text1: "",
      text1: "",
      textimage: "",
    },
    {
      text1: "",
      text1: "",
      textimage: "",
    },
  ],
};
