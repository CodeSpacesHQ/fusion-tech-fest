import React from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';
import SectionTitle from './SectionTitle';
import HumanCard from './HumanCard'; // Assuming you have a HumanCard component

const speakers = [
    {
        name: "John Doe",
        position: "CEO of Tech Innovators",
        image: "/path/to/image1.jpg"
    },
    {
        name: "Jane Smith",
        position: "CTO of Future Tech",
        image: "/path/to/image2.jpg"
    },
    {
        name: "Sam Wilson",
        position: "Lead Developer at DevHub",
        image: "/path/to/image3.jpg"
    },
    {
        name: "Anna Lee",
        position: "Product Manager at InnovateNow",
        image: "/path/to/image4.jpg"
    }
    // Add more speakers as needed
];

const KeynoteSpeakers: React.FC = () => {
  return (
    <Box px={[10, 20]} pb={{ base: 8, md: 20 }}>
        <SectionTitle title="Keynote Speakers" />
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={10}>
            {speakers.map((speaker, index) => (
                <HumanCard
                    key={index}
                    name={speaker.name}
                    position={speaker.position}
                    image={speaker.image}
                />
            ))}
        </SimpleGrid>
    </Box>
  );
};

export default KeynoteSpeakers;
