import { 
  Flex, 
  Text, 
  Heading, 
  Icon, 
  Popover, 
  PopoverTrigger, 
  PopoverContent, 
  PopoverArrow, 
  PopoverCloseButton, 
  PopoverBody
} from "@chakra-ui/react";

import { RiInformationLine } from "react-icons/ri";

export function Infos() {
  return (

    <Flex 
      justify="space-between"
      align="center" 
    >

      <Flex direction="column" justify="center" align={["flex-start", "flex-start", "center" ]}>
        <Heading fontWeight='600' fontSize={['2xl', '5xl']} color="yellow.400">50</Heading>
        <Text color="gray.700" fontWeight="bold" fontSize={["md", "xl",]}>Países</Text>
      </Flex>
      
      <Flex direction="column" justify="center" align={["flex-start", "flex-start", "center" ]}>
        <Heading fontWeight='600' fontSize={['2xl', '5xl']} color="yellow.400">60</Heading>
        <Text color="gray.700" fontWeight="bold" fontSize={["md", "xl",]}>Línguas</Text>
      </Flex>
      
      <Flex direction="column" justify="center" align={["flex-start", "flex-start", "center" ]}>
        <Heading fontWeight='600' fontSize={['2xl', '5xl']} color="yellow.400">27</Heading>
        <Flex align="center">
          <Text color="gray.700" fontWeight="bold" fontSize={["md", "xl",]}>cidades +100
            <Popover>
              <PopoverTrigger> 
                <span>
                <Icon cursor="pointer" as={RiInformationLine} color="gray.500" ml="1" w={["10px", "16px"]} />
                </span>
              </PopoverTrigger>
              <PopoverContent borderColor="gray.500" bg="gray.300" color="gray.500">
                <PopoverArrow bg="gray.300"/>
                <PopoverCloseButton />
                <PopoverBody fontWidth="400" fontWeight="500" fontSize="lg" color="gray.500">
                  Grécia, Paris, Londres
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Text>
        </Flex>
      </Flex>

    </Flex>
  )
}