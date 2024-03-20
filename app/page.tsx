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
        "Lorem ipsum dolor sit amet consectetur. Commodo donec at ipsum et et enim donec scelerisque. Aliquam amet eget enim non mattis. Semper cursus cursus vestibulum imperdiet enim non. Posuere ac elementum cursus volutpat cras morbi.Lorem ipsum dolor sit amet consectetur. Commodo donec at ipsum et et enim donec scelerisque. Aliquam amet egetenim non mattis. Semper cursus cursus vestibulum imperdiet enim non. ",
    },
    {
      title: "Dayo Moses",
      description:
        "Lorem ipsum dolor sit amet consectetur. Commodo donec at ipsum et et enim donec scelerisque. Aliquam amet eget enim non mattis. Semper cursus cursus vestibulum imperdiet enim non. Posuere ac elementum cursus volutpat cras morbi.Lorem ipsum dolor sit amet consectetur. Commodo donec at ipsum et et enim donec scelerisque. Aliquam amet egetenim non mattis. Semper cursus cursus vestibulum imperdiet enim non. ",
    },
    {
      title: "Esther Appiah ",
      description:
        "Lorem ipsum dolor sit amet consectetur. Commodo donec at ipsum et et enim donec scelerisque. Aliquam amet eget enim non mattis. Semper cursus cursus vestibulum imperdiet enim non. Posuere ac elementum cursus volutpat cras morbi.Lorem ipsum dolor sit amet consectetur. Commodo donec at ipsum et et enim donec scelerisque. Aliquam amet egetenim non mattis. Semper cursus cursus vestibulum imperdiet enim non. ",
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
