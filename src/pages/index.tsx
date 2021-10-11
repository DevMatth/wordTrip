import { Flex, Text } from "@chakra-ui/react"
import { Banner } from "../components/Banner"
import { Divider } from "../components/Divider"
import { Header } from "../components/Header"
import { MenuNav } from "../components/MenuNav"
import { Slide } from "../components/Slide"


export default function Home() {
  return (
      <Flex direction="column">
        <Header />
        <Banner />
        <MenuNav />
        <Divider />
        
        <Text fontWeight="normal" fontSize={["lg", "3xl", "4xl"]} mb={["5", "14"]} textAlign="center" >
        Vamos Nessa ? <br />
        Então escolha seu continente
        </Text>
        
        <Slide />

      </Flex>
    )  
}
