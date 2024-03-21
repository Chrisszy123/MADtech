import About from "./components/About";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";
import MeetTutors from "./components/MeetTutors";
import Testimonials from "./components/Testimonials";
import AboutGIC from "./components/AboutGIC";
import Footer from "./components/Footer";

export default function Home() {
  const images = [
    { imageUrl: "/images/bg1.png", caption: "MAD TECH", subText: "SUMMIT" },
    { imageUrl: "/images/bg1.png", caption: "MAD TECH", subText: "SUMMIT" },
    // Add more image objects as needed
  ];
  const testimonials = [
    {
      title: "Emmanuel Kefas",
      description:
        "Hello good evening sir Titus  I've gotten a scholarship with Harvoxx tech Hub, and I've gotten this opportunity through madtech, thank you for the madtech.️ my first class is starting this Thursday, All thanks to MADTECH",
    },
    {
      title: "Dayo Moses",
      description:
        "Thank you for the opportunity to tap from your wealth of knowledge.I learnt a lot in this boot camp [ MAD Tech summit] To Engee Titus and every other facilitator.Remain blessed. ",
    },
    {
      title: "Esther Appiah",
      description:
        "I was a part of the frontend engineering bootcamp where I learnt a lot and saw myself improve massively, I want to thank Gateway choba lighthouse for making this opportunity available through MADTECH. ",
    },
    // Add more image objects as needed
  ];
  const crowd = [
    { imageUrl: "/images/crowd.png", caption: "BOOK", subText: "A SEAT" },
    // Add more image objects as needed
  ];
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <Navbar />
      <Jumbotron
        images={images}
        captionClass="font-[900] md:text-[54px] text-[35px] text-center w-full"
        subTextClass="font-[600] md:text-[43px] text-[15px] text-center pl-[8px] md:tracking-[23px] tracking-[20px] w-full"
      />
      <About />
      <MeetTutors />
      <Jumbotron
        images={crowd}
        captionClass="font-[900] md:text-[45px] text-[25px] w-full text-center tracking-[2px]"
        subTextClass="font-[600] md:text-[16px] text-[10px] tracking-[13px] w-full text-center"
        book
      />
      <Testimonials cards={testimonials} />
      <AboutGIC />
      <Footer />
    </main>
  );
}
