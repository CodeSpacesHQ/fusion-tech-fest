import React from "react";
import arrowRight from "/assets/icons/arrowRight.svg";

type Props = {};

const Hero: React.FC = (props: Props) => {
    return (
        <main className='bg-neutral-white p-7 md:p-20 text-center text-primary bg-[url("/assets/mobileBg.png")] sm:bg-[url("/assets/desktopBg.png")] pb-20'>
            <div className="pt-32">
                <div className="text-[16px] sm:text-[20px] font-helvetica-compressed flex gap-f2 justify-center ">
                    <span className="bg-secondary rounded-full py-[8px] px-[15px]  ">
                        EXPLORE
                    </span>
                    <img src="/assets/icons/Ellipse.svg" alt="" />
                    <span className="bg-secondary rounded-full py-[8px] px-[15px]">
                        NETWORK
                    </span>
                    <img src="/assets/icons/Ellipse.svg" alt="" />

                    <span className="bg-secondary rounded-full py-[8px] px-[15px]">
                        BUILD
                    </span>
                </div>
                <div className="mb-10 mt-5">
                    <h1 className="text-[48px] md:text-[120px] font-[500] font-helvetica-compressed mx-[-10px] leading-none sm:leading-none text-shadow-p">
                        FUSION TECH FEST 2024
                    </h1>
                    <p className="text-center text-base sm:text font-[400] mt-5 font-helvetica-light">
                        Get ready to dive into the future at Fusion Tech Fest! Join us for
                        an unforgettable experience where groundbreaking innovation,
                        cutting-edge creativity, and dynamic collaboration converge. Immerse
                        yourself in a world of technological marvels, connect with industry
                        leaders, and be inspired by visionary thinkers. Don't miss this
                        chance to be part of an event that will shape the future of
                        technology.
                    </p>
                </div>
                <div>
                    <button className="bg-secondary py-2 px-4 rounded-full text-primary border-primary border shadow-[2px_4px_0_0_#361566]">
                        <a href="#">
                            Register{" "}
                            <img src={arrowRight} alt="arrowright" className="inline" />
                        </a>
                    </button>
                </div>
            </div>

            <div
                className="flex justify-between text-[20px] font-helvetica-compressed text-primary border border-[#36156640] border-x-0 border-y-[1px] mt-20 items-center p-3 md:px-20 w-fukll"
                style={{
                    borderWidth: "1px 0 1px 0",
                    borderStyle: "solid",
                    borderImageSource:
                        "linear-gradient(90deg, #FFFFFF 0%, #6C2ACC 50%, #FFFFFF 100%)",
                    borderImageSlice: 1,
                }}
            >
                <div>
                    <span className="flex gap-2 justify-star">
                        <img
                            src="/assets/icons/calendar.svg"
                            alt=""
                            className="w-[24px] sm:w-[36px]"
                        />
                        <span className="  text-[14px] sm:text-[20px] whitespace-nowrap text-left">
                            <p className="mb-[-7px] p-0 sm:mb-[-10px]">26th - 31st</p>
                            <p className="m-0 p-0">August, 2024</p>
                        </span>
                    </span>
                </div>
                <div className="flex md:flex-row flex-col items-center justify-center gap-2 ">
                    <img src="/assets/genZ.svg" alt="genZ Techies" className="w-[53px]" />
                    <img
                        src="/assets/icons/times.svg"
                        alt=""
                        className="w-[17px] md:w-[24px]"
                    />
                    <img
                        src="/assets/codeSpace.svg"
                        alt=""
                        className="w-[110px] h-[15px] sm:w-[153px] sm:h-[21px]"
                    />
                </div>
                <div>
                    {" "}
                    <span className="flex gap-2">
                        <img
                            src="/assets/icons/location.svg"
                            alt=""
                            className="w-[24px] sm:w-[36px]"
                        />
                        <span className="flvex flex-col items-start text-[14px] sm:text-[20px] whitespace-nowrap text-left">
                            <p className="mb-[-7px] sm:mb-[-10px] p-0">Random Hall,</p>
                            <p className="m-0 p-0">Lagos, Nigeria</p>
                        </span>
                    </span>
                </div>
            </div>
        </main>
    );
};

export default Hero;
