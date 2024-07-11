import React, { useState } from 'react';
import { Box, IconButton, Image, Flex, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';

const images = [
  'https://via.placeholder.com/300x200.png?text=Image+1',
  'https://via.placeholder.com/300x200.png?text=Image+2',
  'https://via.placeholder.com/300x200.png?text=Image+3',
  'https://via.placeholder.com/300x200.png?text=Image+4',
  'https://via.placeholder.com/300x200.png?text=Image+5',
  'https://via.placeholder.com/300x200.png?text=Image+6',
  'https://via.placeholder.com/300x200.png?text=Image+7',
  'https://via.placeholder.com/300x200.png?text=Image+8'
  // Add more images as needed
];

const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 4 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
     prevIndex!== images.length-4 ? (prevIndex + 1) % images.length : 0
    );
  };

  const getImageHeight = (index: number) => {
    return index % 2 === 0 ? '400px' : '300px';
  };

  return (
    <Box mb={10} position="relative" pt={10} borderRadius={"5px"} bg={"#78C7FF"} mx={10} height="auto" overflow="hidden">
      <Flex overflow="hidden" position="relative">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: -currentIndex * (100 / 4) + '%' }}
          transition={{ duration: 0.5 }}
          style={{ display: 'flex', width: '100%', alignItems:"flex-end" }}
        >
          {images.map((image, index) => (
            <Image
              px={5}
              key={index}
              src={image}
              alt={`carousel-image-${index}`}
              width="25%"
              height={getImageHeight(index)}
            />
          ))}
        </motion.div>
      </Flex>
      <Flex mt={20} transform="translateY(-50%)" justifyContent={"space-between"} alignItems={"center"} px={4}>
      <Flex gap={5} width="full">
        <IconButton
          aria-label="Previous"
          icon={<FaArrowLeft />}
          onClick={handlePrev}
          background="rgba(0, 0, 0, 0.5)"
          color="white"
          _hover={{ background: "rgba(0, 0, 0, 0.7)" }}
        />
        <IconButton
          aria-label="Next"
          icon={<FaArrowRight />}
          onClick={handleNext}
          background="rgba(0, 0, 0, 0.5)"
          color="white"
          _hover={{ background: "rgba(0, 0, 0, 0.7)" }}
        />
      </Flex>
      <Button
          aria-label="Next"
          onClick={handleNext}
          background="rgba(0, 0, 0, 0.5)"
          color="white"
          _hover={{ background: "rgba(0, 0, 0, 0.7)" }}
        >View Pictures <BsArrowRight size={25} /> </Button>
      </Flex>
    </Box>
  );
};

export default Gallery;
