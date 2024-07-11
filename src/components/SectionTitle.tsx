import { Box, Text } from "@chakra-ui/react"

const SectionTitle = ({title}:{title:string}) => {
  return (
    <Box display={"flex"} pt={10} justifyContent={"space-around"} className="mb-6 text-center">
        <Text w={"fit-content"} casing={"uppercase"} className="bg-secondary rounded-full py-[8px] px-[15px] font-[500] text-[16px] md:text-[20px] text-primary font-helvetica-compressed text-center">
            {title}
        </Text>
    </Box>
  )
}

export default SectionTitle