import React from 'react'

type Props = {}
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


const JoinCommunity = (props: Props) => {
    return (
        <section className='bg-neutral-white p-8 sm:p-20 bg-[url("/assets/Switch.png")]'>
            <div className="bg-primary rounded-lg px-5 py-16 font-helvetica-compressed flex flex-col lg:flex-row gap-4 md:gap-3">
                <div className='flex flex-col gap-3 lg:w-[60%]'>
                    <div className="font-[500] "><h2 className="text-white text-4xl md:text-7xl">JOIN THE<span className="text-[#F4B0E9]"> COMMUNITY</span> AND<span className="text-[#F4B0E9]"> NETWORK </span>WITH LIKE MINDS</h2></div>
                    <div className="justify-between w-[16rem] md:w-[20rem] rounded-[30px] px-[12px] py-[8px] bg-[rgba(255,255,255,0.3)] flex items-center gap-2">
                        <p className="text-[#f4b0e9] md:text-[18px] whitespace-nowrap">Join Community</p>
                        <ul className='flex space-x-1'>
                            {socialMediaLinks.map((link, i) => (
                                <li key={i} className="inline">
                                    <a href={link.href} className="bg-[#f4b0e9] block rounded-full p-[6.4px] border border-primary">
                                        <img src={link.src} alt={link.alt} className="w-4 h-4" />
                                    </a>
                                </li>))}
                        </ul>
                    </div>

                </div>
                <div className='md:wd1/2 '><img src="/assets/MemojiGroup.png" alt="Memoji Group" className="w-[648px] max-w-full" /></div></div>
        </section>)
}

export default JoinCommunity