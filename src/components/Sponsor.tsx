import React from "react";

type Props = {};

const Sponsor: React.FC = (props: Props) => {
    return (
        <section id="sponsor" className="p-8 sm:p-20 py-16">
            <div className="mb-6 text-center">
                <span className="bg-secondary rounded-full py-[8px] px-[15px]   font-[500] text-[16px] md:text-[20px] text-primary font-helvetica-compressed text-center">
                    SPONSORS AND PARTNERS
                </span>
            </div>

            <div className="mt-10 flex flex-row justify-center items-center w-full">
                <img
                    src="/assets/logosDesktop.png"
                    alt=""
                    className="max-w-full hidden md:block px-10"
                />
                <img
                    src="/assets/logosMobile.png"
                    alt=""
                    className="max-w-full md:hidden block"
                />
            </div>
        </section>
    );
};

export default Sponsor;
