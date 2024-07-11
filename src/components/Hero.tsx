import React from "react";
import arrowRight from "/assets/icons/arrowRight.svg";

type Props = {};

const Hero: React.FC = (props: Props) => {
    return (
        <main className='bg-neutral-white p-10 bg-[url("/assets/mobileBg.png")] sm:bg-[url("/assets/desktopBg.png")] md:p-24 text-center text-primary'>

            <div><div className="text-[20px] font-helvetica-compressed flex gap-f2 justify-center ">
                <span className='bg-secondary rounded-full py-[8px] px-[15px]'>EXPLORE</span>
                <img src="/assets/icons/Ellipse.svg" alt="" />
                <span className='bg-secondary rounded-full py-[8px] px-[15px]'>NETWORK</span>
                <img src="/assets/icons/Ellipse.svg" alt="" />

                <span className='bg-secondary rounded-full py-[8px] px-[15px]'>BUILD</span>
            </div>
                <div className='mb-10'>
                    <h1 className='text-[50px] md:text-[120px] font-[500] font-helvetica-compressed border-[#D1A4FF] outlined-text'>FUSION TECH FEST 2024</h1>
                    <p className="text-center text-base sm:text">Get ready to dive into the future at Fusion Tech Fest! Join us for an unforgettable experience where groundbreaking innovation, cutting-edge creativity, and dynamic collaboration converge. Immerse yourself in a world of technological marvels, connect with industry leaders, and be inspired by visionary thinkers. Don't miss this chance to be part of an event that will shape the future of technology.</p >
                </div>
            </div>

            <div className="mx-auto mt-20 w-full md:w-[50%]">
                    <div className="flex justify-between py-2 text-[20px] font-helvetica-compressed text-primary border-x-0 border-y-[1px] border-t-transparent border-b-transparent border-gradient">
                        <div>
                            <span className='flex gap-2 justify-start'><img src="/assets/icons/calendar.svg" alt="" />
                                <div>
                                    <p>26th - 31st</p>
                                    <p className='block mt-[-10px]'>August, 2024</p>
                                </div>
                            </span>
                        </div>
                        <div className='flex md:flex-row flex-col items-center justify-center gap-2'>
                            <img src="/assets/genZ.svg" alt="genZ Techies" className="w-[53px]" />
                            <img src="/assets/icons/times.svg" alt="" className="w-[24px]" />
                            <img src="/assets/codeSpace.svg" alt="" className="w-[153px] h-[21px]" />
                        </div>
                        <div>
                            <span className="flex gap-2"><img src="/assets/icons/location.svg" alt="" className="inline" />
                                <p>Random Hall,<span className='block mt-[-10px]'>Lagos, Nigeria</span></p>
                            </span>
                        </div>
                    </div>
                </div>
        </main>
    );
};

export default Hero;
