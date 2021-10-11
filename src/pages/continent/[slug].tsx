import { Flex, Text } from "@chakra-ui/react"
import { Cities } from "../../components/Cities"
import { ContinentBanner } from "../../components/ContinentBanner"
import { ContinentDescription } from "../../components/ContinentDescription"
import { Header } from "../../components/Header"

export default function Continent() {
  return (
    <Flex direction="column">
      <Header />
      <ContinentBanner />

      <Flex 
        direction="column"
        w="100%"
        maxW="1160px"
        mx="auto"
        mb="10"
        px="1rem"
      >
        <ContinentDescription />
        <Cities />
      </Flex>
    </Flex>
  )
}