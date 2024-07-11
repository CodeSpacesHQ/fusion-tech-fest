type Props = {};

const About: React.FC = (props: Props) => {
  return (
    <section id="about" className="py-10">
      <div className="m text-center">
        <span className="bg-secondary rounded-full py-[8px] px-[15px]   font-[500] text-[16px] md:text-[20px] text-primary font-helvetica-compressed text-center">
          ABOUT US{" "}
        </span>
      </div>
      <div className="md:p-20 p-8">
        <p className="font-helvetica-light font-400] text-base md:text-[22px] text-primary">
          Fusion Tech Fest is a pioneering event hosted by{" "}
          <span className="font-[700]">Genz Techies</span> and{" "}
          <span className="font-[700]">Code Space</span> to unite GenZ tech
          enthusiasts in a collaborative endeavor to push the boundaries of
          innovation and technology. Under the theme{" "}
          <span className="font-[700]">
            "Collaborative Minds, Limitless Possibilities,"{" "}
          </span>{" "}
          we aim to showcase the transformative power of teamwork and innovative
          thinking in tech. There will be a virtual hackathon from{" "}
          <span className="font-[700]">August 26th </span>to{" "}
          <span className="font-[700]">30th</span> and a one-day conference on{" "}
          <span className="font-[700]">August 31st</span> will serve as a beacon
          for aspiring tech pioneers and seasoned professionals alike.
        </p>
        <div className="mt-10 flex flex-row justify-center items-center w-full">
          <img
            src="/assets/aboutDesktop.png"
            alt=""
            className="max-w-full hidden md:block"
          />
          <img
            src="/assets/aboutMobile.png"
            alt=""
            className="max-w-full md:hidden block"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
