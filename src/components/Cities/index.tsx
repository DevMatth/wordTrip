import { Flex, Heading, Grid } from "@chakra-ui/react";
import { City } from "./City";

export function Cities() {
  return (
    <Flex
      direction="column"
    >
      <Heading
        mb="3rem"
        fontWeight="500"
      >
        Cidades +100
      </Heading>
      <Grid
        templateColumns={[ "1fr", "1fr 1fr", "1fr 1fr 1fr 1fr"]}
        gap={["20px", "45px"]}
        alignItems="center"
        justifyContent="center"
        px={["30px", "0"]}
      >
        
        <City 
          image="londres.jpg"
          title="Londres"
          continent="Reino Unido"
          flag="reino_unido.png"
        />
        <City 
          image="paris.jpg"
          title="París"
          continent="França"
          flag="franca.jpg"
        />
        <City 
          image="roma.jpg"
          title="Roma"
          continent="Itália"
          flag="italia.jpg"
        />
        <City 
          image="praga.jpg"
          title="Praga"
          continent="República Tcheca"
          flag="republica_tcheca.png"
        />
        <City 
          image="amsterda.jpg"
          title="Amsterdã"
          continent="Holanda"
          flag="holanda.png"
        />
      
      </Grid>
    </Flex>
  )
}