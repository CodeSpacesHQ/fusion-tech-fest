import { Box, Text, Image, Flex, Container } from "@chakra-ui/react";
import SectionTitle from "./SectionTitle";


const About= () => {
  return (
    <Container maxW={"7xl"} as="section" id="about" py={20}>
        <SectionTitle title="ABOUT US" />
      
      <Box pb={{ base: 8, md: 20 }}>
        <Text
          fontFamily="helvetica-light"
          fontWeight={400}
          fontSize={{ base: "base", md: "22px" }}
          color="#361566"
          textAlign="center"
        >
          Fusion Tech Fest is a pioneering event hosted by{" "}
          <Text as="span" fontWeight={700}>
            Genz Techies
          </Text>{" "}
          and{" "}
          <Text as="span" fontWeight={700}>
            Code Space
          </Text>{" "}
          to unite GenZ tech enthusiasts in a collaborative endeavor to push the
          boundaries of innovation and technology. Under the theme{" "}
          <Text as="span" fontWeight={700}>
            "Collaborative Minds, Limitless Possibilities,"
          </Text>{" "}
          we aim to showcase the transformative power of teamwork and innovative
          thinking in tech. There will be a virtual hackathon from{" "}
          <Text as="span" fontWeight={700}>
            August 26th
          </Text>{" "}
          to{" "}
          <Text as="span" fontWeight={700}>
            30th
          </Text>{" "}
          and a one-day conference on{" "}
          <Text as="span" fontWeight={700}>
            August 31st
          </Text>{" "}
          will serve as a beacon for aspiring tech pioneers and seasoned
          professionals alike.
        </Text>
        <Box mt={10}>
          <Image
            src="/assets/aboutDesktop.png"
            alt="About Desktop"
            display={{ base: "none", md: "block" }}
            mx="auto"
            maxW="100%"
          />
          <Image
            src="/assets/aboutMobile.png"
            alt="About Mobile"
            display={{ base: "block", md: "none" }}
            mx="auto"
            maxW="100%"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default About;
