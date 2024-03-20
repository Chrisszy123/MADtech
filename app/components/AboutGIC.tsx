import Image from "next/image";
import React from "react";

const AboutGIC = () => {
  return (
    <div
      className="w-full h-full text-white md:px-24 px-2 md:py-6 px-2"
      style={{
        background: "linear-gradient(270.17deg, #041183 0.15%, #0414A4 98.92%)",
      }}
    >
      <div className="grid md:grid-cols-3 grid-cols-1 justify-center gap-[1rem]">
        <div>
            <h2 className="md:text-[24px] text-[20px]  font-[800] self-start">About GIC Choba</h2>
            <p className="block md:hidden text-[12px] font-[300] leading-[20px]">
            Lorem ipsum dolor sit amet consectetur. Commodo donec at ipsum et et
            enim donec scelerisque. Aliquam amet eget enim non mattis. Semper
            cursus cursus vestibulum imperdiet enim non. Posuere ac elementum
            cursus volutpat cras morbi.Lorem ipsum dolor sit amet consectetur.
            Commodo donec at ipsum et et enim donec scelerisque. Aliquam amet
            egetenim non mattis. Semper cursus cursus vestibulum imperdiet enim
            non. Posuere ac elementum cursus volutpat cras morbi.Lorem ipsum
            dolor sit amet consectetur. Commodo donec
          </p>
        </div>
       <div>
       <h2 className="md:text-[24px] text-[20px] font-[800] capitalize md:text-center text-start">a word from Pcee</h2>
       <div className="md:hidden flex flex-col justify-center gap-[1rem] ">
          <p className="text-[12px] font-[300] leading-[20px]">
            Lorem ipsum dolor sit amet consectetur. Commodo donec at ipsum et et
            enim donec scelerisque. Aliquam amet eget enim non mattis. Semper
            cursus cursus vestibulum imperdiet enim non. Posuere ac elementum
            cursus volutpat cras morbi.Lorem ipsum dolor sit amet
          </p>
          <div className="flex flex-col justify-center md:items-center items-start">
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
       </div>
        <div>
        <h2 className="md:text-[24px] text-[20px]  font-[800] capitalize md:text-end text-start">contact Us</h2>
        <div className="md:hidden flex flex-col md:items-end items-start gap-[1rem]">
          <span className="flex gap-4 justify-center items-center">
          <Image className="md:hidden block" src="/icons/home.png" alt="home" width={15} height={15} />
            <h5 className="text-[12px] font-[300]">
              172 Uniport Road, Beside Helena Haven,choba, Port Harcourt
            </h5>
            <Image className="md:block hidden" src="/icons/home.png" alt="home" width={15} height={15} />
          </span>

          <span className="flex gap-4 justify-center items-center">
          <Image className="md:hidden block" src="/icons/phone.png" alt="home" width={15} height={15} />
            <h5 className="text-[12px] font-[300]">
              +234 814 235 8193 <br /> +234 813 570 4096{" "}
            </h5>

            <Image className="md:block hidden" src="/icons/phone.png" alt="home" width={15} height={15} />
          </span>
          <span className="flex gap-4 justify-center items-center">
          <Image className="md:hidden block" src="/icons/mail.png" alt="home" width={15} height={15} />
            <h5 className="text-[12px] font-[300]">chobagic@gmail.com </h5>
            <Image className="md:block hidden" src="/icons/mail.png" alt="home" width={15} height={15} />
          </span>
        </div>
        </div>
        
      </div>
      <div className="md:grid hidden grid-cols-3 justify-center gap-[1rem] mt-[1rem]">
          <p className="text-[12px] font-[300] leading-[20px]">
            Lorem ipsum dolor sit amet consectetur. Commodo donec at ipsum et et
            enim donec scelerisque. Aliquam amet eget enim non mattis. Semper
            cursus cursus vestibulum imperdiet enim non. Posuere ac elementum
            cursus volutpat cras morbi.Lorem ipsum dolor sit amet consectetur.
            Commodo donec at ipsum et et enim donec scelerisque. Aliquam amet
            egetenim non mattis. Semper cursus cursus vestibulum imperdiet enim
            non. Posuere ac elementum cursus volutpat cras morbi.Lorem ipsum
            dolor sit amet consectetur. Commodo donec
          </p>
        
        <div className="flex flex-col justify-center gap-[1rem] ">
          <p className="text-[12px] font-[300] leading-[20px]">
            Lorem ipsum dolor sit amet consectetur. Commodo donec at ipsum et et
            enim donec scelerisque. Aliquam amet eget enim non mattis. Semper
            cursus cursus vestibulum imperdiet enim non. Posuere ac elementum
            cursus volutpat cras morbi.Lorem ipsum dolor sit amet
          </p>
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
