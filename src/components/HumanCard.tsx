'use client'

import {
  Box,
  Text,
  Center,
} from '@chakra-ui/react'

export default function HumanCard({name, position, image}:{name:string, position:string, image:string}) {
 
  return (
    <Center py={6}>
      <Box
        w="xs"
        rounded={'sm'}
        my={5}
        mx={[0, 5]}
        overflow={'hidden'}
        bgSize={"cover"} bgImage={`url('https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80')`}
        height={"350px"}
        border={'1px'}
        borderRadius={"5px"}
        display={"flex"}
        alignItems={"flex-end"}
        borderColor="black"
        boxShadow={'6px 6px 0 #361566'}>
        
        <Box bottom={32}>
            <Text casing={"uppercase"} w={"fit-content"} bg={"#FAD278"} p={2} fontSize={'lg'} fontWeight={800}>
                {name}
            </Text>
            <Text casing={"uppercase"} w={"fit-content"} bg={"#FAD278"} p={2} fontSize={'md'} fontWeight={600}>
                {position}
            </Text>
        </Box>
      </Box>
    </Center>
  )
}