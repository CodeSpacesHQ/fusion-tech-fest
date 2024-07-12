import React from "react";

type Props = {};
interface Icons {
    href: string;
    src: string;
    alt: string;
}

const socialMediaLinks: Icons[] = [
    {
        href: "https://instagram.com/",
        src: "/assets/icons/instagram.svg",
        alt: "Instagram Logo",
    },
    {
        href: "https://x.com/",
        src: "/assets/icons/x.svg",
        alt: "X(Twitter) Logo",
    },
    {
        href: "https://facebook.com/",
        src: "/assets/icons/facebook.svg",
        alt: "Facebook Logo",
    },
    {
        href: "https://t.me/",
        src: "/assets/icons/telegram.svg",
        alt: "telegram Logo",
    },

]

const Footer = (props: Props) => {
    return (
        <section className="bg-neutral-white pt-20 p-8 sm:p-20">
            <div className="flex justify-center mb-10 md:mb-20">
                <img src="/assets/fusionTechLogo.svg" alt="Fusion Tech Logo" className="w-[800px] max-w-full" />
            </div>
            <div className="flex justify-between items-center flex-col-reverse sm:flex-row gap-6">
                <div>
                    <p className="text-primary font-helvetica-light font-[400] text-center hidden md:block">© 2024 GenZtechies X Codespace | All rights reserved.</p>
                    <p className="text-primary font-helvetica-light font-[400] text-center md:hidden block">© 2024 GenZtechies X Codespace <span className="block sm:text-left"> All rights reserved.</span></p>
                </div>
                <div className="flex flex-col items-center sm:items-end gap-3">
                    <ul className="flex gap-4 font-helvetica-compressed text-primary text-[18px]">
                        <li><a href="">INITIATIVES</a></li>
                        <li><a href="">DONATE</a></li>
                        <li><a href="">GALLERY</a></li>
                        <li><a href="">PRESS</a></li>
                    </ul>
                    <ul className="flex gap-2 justify-end">

                        {socialMediaLinks.map((link, i) => (<li className="" key={i}><a href={link.href} className="block bg-secondary rounded-full p-[6.4px] border border-primary"><img src={link.src} alt={link.alt} className="w-4 h-4" /></a></li>))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Footer;
