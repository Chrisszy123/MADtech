import Image from "next/image";
import React from "react";

const AboutGIC = () => {
  return (
    <div
      className="w-full h-full text-white md:px-24 px-2 md:py-6 py-4"
      style={{
        background: "linear-gradient(270.17deg, #041183 0.15%, #0414A4 98.92%)",
      }}
    >
      <div className="grid md:grid-cols-3 grid-cols-1 justify-center gap-[1rem]">
        <div>
          <h2 className="md:text-[24px] text-[20px]  font-[800] self-start">
            About GIC Choba
          </h2>
          <p className="block md:hidden text-[12px] font-[300] leading-[20px]">
            At Gateway International Church Choba Satellite, we believe that
            faith and technology are not at odds with each other. In fact,
            technology can be a powerful tool for connecting with others,
            sharing our message of Jesus and inspiration, and making a positive
            impact on the world.
          </p>
        </div>
        <div>
          <h2 className="md:text-[24px] text-[20px] font-[800] capitalize md:text-center text-start">
            a word from Pcee
          </h2>
          <div className="md:hidden flex flex-col justify-center gap-[1rem] ">
          <span className="text-[12px] font-[300] leading-[20px]">
            Hello dear! <br /> 
                I'm Pastor Chidi Courage,and on behalf of our Lead
              Pastor, Pastor George Izunwa, I'm excited to welcome you to
              MadTech 3.0! 
              <br/>
              <p className="mt-2">This amazing tech conference is a unique opportunity
              to explore the intersection of faith and innovation. We believe
              technology can be a powerful force for good. MadTech 3.0 provides
              a platform for thought leaders, tech enthusiasts, business owners
              and young people of God to come together, share ideas, and explore
              how technology can be used to uplift communities, enhance their
              businesses, inspire action, and even spread the message of Jesus.
              Whether you're a seasoned tech professional, a curious newcomer,
              or simply someone interested in exploring the potential of
              technology for positive change, MadTech 3.0 has something for you.</p>
              <p className="mt-2">I look forward to welcoming you to a conference filled with
              inspiring talks, hands-on training, thought-provoking workshops,
              and opportunities to connect with a like-minded community. In the
              spirit of innovation and collaboration, we invite you to join us
              at MadTech 3.0 and be part of what God is doing in this season.</p>
              <p className="mt-2">Best regards, <br />
              Pastor Chidi Courage. <br />
              Resident Pastor, Gateway International Church, Choba Satellite.
              </p>
          </span>
            <div className="flex flex-col justify-center md:items-center items-start">
              <h2 className="text-[22px] font-[600] capitalize">
                Service Times
              </h2>
              <div className="flex flex-col justify-start items-start">
                <span className="text-[12px] font-[300]">Wednesdays: 5PM</span>
                <span className="text-[12px] font-[300]">
                  {" "}
                  Sundays: 7AM (First Service)
                </span>
                <span className="text-[12px] font-[300] ml-[1rem]">
                  9AM (second Service)
                </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="md:text-[24px] text-[20px]  font-[800] capitalize md:text-end text-start">
            contact Us
          </h2>
          <div className="md:hidden flex flex-col md:items-end items-start gap-[1rem]">
            <span className="flex gap-4 justify-center items-center">
              <Image
                className="md:hidden block"
                src="/icons/home.png"
                alt="home"
                width={15}
                height={15}
              />
              <h5 className="text-[12px] font-[300]">
                172 Uniport Road, Beside Helena Haven,choba, Port Harcourt
              </h5>
              <Image
                className="md:block hidden"
                src="/icons/home.png"
                alt="home"
                width={15}
                height={15}
              />
            </span>

            <span className="flex gap-4 justify-center items-center">
              <Image
                className="md:hidden block"
                src="/icons/phone.png"
                alt="home"
                width={15}
                height={15}
              />
              <h5 className="text-[12px] font-[300]">
                +234 814 235 8193 <br /> +234 813 570 4096{" "}
              </h5>

              <Image
                className="md:block hidden"
                src="/icons/phone.png"
                alt="home"
                width={15}
                height={15}
              />
            </span>
            <span className="flex gap-4 justify-center items-center">
              <Image
                className="md:hidden block"
                src="/icons/mail.png"
                alt="home"
                width={15}
                height={15}
              />
              <h5 className="text-[12px] font-[300]">chobagic@gmail.com </h5>
              <Image
                className="md:block hidden"
                src="/icons/mail.png"
                alt="home"
                width={15}
                height={15}
              />
            </span>
          </div>
        </div>
      </div>
      <div className="md:grid hidden grid-cols-3 justify-center gap-[1rem] mt-[1rem]">
        <p className="text-[12px] font-[300] leading-[20px]">
        At Gateway International Church Choba Satellite, we believe that
            faith and technology are not at odds with each other. In fact,
            technology can be a powerful tool for connecting with others,
            sharing our message of Jesus and inspiration, and making a positive
            impact on the world.
        </p>

        <div className="flex flex-col justify-center gap-[1rem] ">
          <span className="text-[12px] font-[300] leading-[20px]">
            Hello dear! <br /> 
                I'm Pastor Chidi Courage,and on behalf of our Lead
              Pastor, Pastor George Izunwa, I'm excited to welcome you to
              MadTech 3.0! 
              <br/>
              <p className="mt-2">This amazing tech conference is a unique opportunity
              to explore the intersection of faith and innovation. We believe
              technology can be a powerful force for good. MadTech 3.0 provides
              a platform for thought leaders, tech enthusiasts, business owners
              and young people of God to come together, share ideas, and explore
              how technology can be used to uplift communities, enhance their
              businesses, inspire action, and even spread the message of Jesus.
              Whether you're a seasoned tech professional, a curious newcomer,
              or simply someone interested in exploring the potential of
              technology for positive change, MadTech 3.0 has something for you.</p>
              <p className="mt-2">I look forward to welcoming you to a conference filled with
              inspiring talks, hands-on training, thought-provoking workshops,
              and opportunities to connect with a like-minded community. In the
              spirit of innovation and collaboration, we invite you to join us
              at MadTech 3.0 and be part of what God is doing in this season.</p>
              <p className="mt-2">Best regards, <br />
              Pastor Chidi Courage. <br />
              Resident Pastor, Gateway International Church, Choba Satellite.
              </p>
          </span>
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-[22px] font-[600] capitalize">Service Times</h2>
            <div className="flex flex-col justify-start items-start">
              <span className="text-[12px] font-[300]">Wednesdays: 5PM</span>
              <span className="text-[12px] font-[300]">
                {" "}
                Sundays: 7AM (First Service)
              </span>
              <span className="text-[12px] font-[300] ml-[1rem]">
                9AM (second Service)
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end gap-[1rem]">
          <span className="flex gap-4 justify-center items-center">
            <h5 className="text-[12px] font-[300]">
              172 Uniport Road, Beside Helena Haven,choba, Port Harcourt
            </h5>
            <Image src="/icons/home.png" alt="home" width={15} height={15} />
          </span>

          <span className="flex gap-4 justify-center items-center">
            <h5 className="text-[12px] font-[300]">
              +234 814 235 8193 <br /> +234 813 570 4096{" "}
            </h5>

            <Image src="/icons/phone.png" alt="home" width={15} height={15} />
          </span>
          <span className="flex gap-4 justify-center items-center">
            <h5 className="text-[12px] font-[300]">chobagic@gmail.com </h5>
            <Image src="/icons/mail.png" alt="home" width={15} height={15} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutGIC;
