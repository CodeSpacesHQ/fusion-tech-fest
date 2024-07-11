import { useState } from "react";
import Logo from "/assets/fusionTechLogo.svg";
import arrowRight from "/assets/icons/arrowRight.svg"
import hamburger from "/assets/icons/hamburger.svg"
import closeArrow from "/assets/icons/closeArrow.svg"
// import
type Props = {};

const Header: React.FC = (props: Props) => {
    const [isToggle, setIsToggle] = useState<boolean>(false)


    const handleToggle = () => {
        setIsToggle(i => !i);
    }
    return (
        <nav className="sm:py-10 sm:px-20 px-7 py-12 fixed w-full bg-transparent" >
            <div className="p-3 flex justify-between border-[#36156640] rounded-full border items-center  ">
                <div>
                    <img src={Logo} alt="Fusion Tech Logo" />
                </div>
                <div className="text-primary font-[500] text-[18px] font-helvetica-compressed gap-8 md:flex hidden">
                    <a href="#about">About</a>
                    <a href="#schedule">Schedule</a>
                    <a href="#speaker">Speaker</a>
                    <a href="#judges">Judges</a>
                    <a href="#faq">FAQs</a>
                    <a href="#gallery">Gallery</a>
                </div>
                <div className="hidden md:block"><button className="bg-secondary py-2 px-4 rounded-full text-primary border-primary border shadow-[2px_4px_0_0_#361566]"><a href="#">Register <img src={arrowRight} alt="arrowright" className="inline" /></a></button></div>
                <div className="block md:hidden z-50">
                    {isToggle ? (<button className="bg-secondary py-2 px-4 rounded-full text-primary border-primary border shadow-[2px_4px_0_0_#361566] cursor-pointer font-helvetica-compressed text-[18px]" onClick={handleToggle}>
                        Close
                        <img src={closeArrow} alt="close arrow" className="inline ml-2" />
                    </button>) : <button className="bg-secondary py-2 px-4 rounded-full text-primary border-primary border shadow-[2px_4px_0_0_#361566] cursor-pointer font-helvetica-compressed text-[18px] " onClick={handleToggle}>
                        Menu
                        <img src={hamburger} alt="hamburger" className="inline ml-2" />
                    </button>}
                </div>
                {/*
            {
                isToggle && */}
                <div className={`absolute sm:hidden flex p-10 items-center
                ${isToggle
                        ? 'fixedd md:hidden left-0 top-0 w-full  h-fullS bg-neutral-white ease-in duration-200'
                        : 'ease-in-out w-full left-0 duration-200 absodlute  top-[-200%]'}
                        `}
                //className={`flex absolute top-0 bg-neutral-white w-full left-0 p-10 items-center transition-transformm duration-300 transform translate-y-0 md:hlidden transition-all ease-in ${isToggle ? "-translate-y-full" : ""} transform`}

                ><div></div>
                    <div className="text-primary font-[500] text-[50px] font-helvetica-compressed gap-4  flex text-shadow-lg uppercase flex-col mt-32">
                        <a href="#about">About</a>
                        <a href="#schedule">Schedule</a>
                        <a href="#speaker">Speaker</a>
                        <a href="#judges">Judges</a>
                        <a href="#faq">FAQs</a>
                        <a href="#gallery">Gallery</a>
                    </div>                </div>
                {/* } */}
            </div>
        </nav >
    );
};

export default Header;
