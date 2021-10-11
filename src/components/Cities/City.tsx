import { Box, Flex, Image, Text, Heading } from "@chakra-ui/react";

interface CityProps {
  image: string;
  title: string;
  continent: string;
  flag: string;
}

export function City({image, title, continent, flag}: CityProps) {
  return (
    <Box 
      borderRadius='4px'
      overflow="hidden"
    >
      <Image 
        src={`/cities/${image}`} 
        alt="londres" 
        h="170px" 
        w="100%"
      />
      
      <Flex
        p="6"
        align="center"
        justify="space-between"
        bg="white"
        border="1px"
        borderColor="yellow.300"
        borderTop="0"
        borderTopRadius="0"
        borderBottomRadius="4px"
      >
        <Flex
          direction="column"
        >
          <Heading
            color="gray.700"
            fontSize="xl"
            fontWeight="500"
          >
            {title}
          </Heading>
        
          <Text
            mt="3" fonstSize="md" color="gray.500"
            fontWeight="500"
          >
            {continent}
          </Text>
        </Flex>
            <Image
              src={`/cities/bandeiras/${flag}`}
              alt="bandeira reino unido"
              w="30px" 
              h="30px"
              borderRadius="50%"
              objectFit="cover"
            />
      </Flex>

    </Box>
  )
}