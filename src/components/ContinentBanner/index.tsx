import { Flex, Heading } from "@chakra-ui/react";

export function ContinentBanner() {
  return (
    <Flex
      w="100%"
      h={["150px", "300px", "450px"]}
      px={["0", "0", "36"]}
      pt={["0", "0", "72"]}
      bgImage="url('/banner/banner_europa.jpg')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      align="center"
      justify={["center", "center", "flex-start"]}
    >
      <Heading
        textAlign={["center", "left"]}
        fontSize={["28px", "34px", "48px"]}
        fontWeight="500"
        color="gray.100"
      >
        Europa
      </Heading>
    </Flex>
  )
}