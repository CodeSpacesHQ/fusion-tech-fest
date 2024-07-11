import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";
import SectionTitle from "./SectionTitle";

const sponsors: {name:string, image:string}[] = [
    {name:"oulne", image:"/oulne.png"},
    {name:"Paystack", image:"/paystack.png"},
    {name:"Chimoney", image:"/chimoney.png"},
    {name:"Sail Innovation Lab", image:"/sil.png"},
    {name:"vercel", image:"/vercel.png"},
    {name:"kora", image:"/kora.png"},
    {name:"Ingressive For Good", image:"/ifg.png"},
    {name:"Treford", image:"/treford.png"},
    {name:"NexaScale", image:"/nexascale.png"},
]

const Sponsor: React.FC = () => {
    return (
        <Box my={10}>
            <SectionTitle title="SPONSORS AND PARTNERS" />
            <Flex mt={20} justifyContent={"space-around"} alignItems={"center"}>
            <Box w={["100%","80%","60%"]} className="mx-auto flex flex-wrap justify-center gap-5">
                {sponsors.map((sponsor, index) => (
                    <div
                    key={index}
                    className="flex justify-center items-center w-1/2 md:w-1/4 lg:w-1/6"
                    >
                    <Image src={sponsor.image} alt={sponsor.name} height={"36px"} />
                    </div>
                ))}
            </Box>
            </Flex>
        </Box>
    );
};

export default Sponsor;
