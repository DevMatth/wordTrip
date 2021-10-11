import { Grid, GridItem } from "@chakra-ui/react";
import { ElementMenuNav } from "./ElementMenuNav";

export function MenuNav() {
  return (
    <Grid 
      templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
      w="100%"
      justifyContent="space-between"
      align="center"
      mt={["10", "32"]}
      mx="auto"
      maxW="1160px"
      gap={[1, 5]}
    >
      <GridItem>
        <ElementMenuNav icon="cocktail" text="vida noturna"/>
      </GridItem>

      <GridItem>
        <ElementMenuNav icon="surf" text="praias"/>
      </GridItem>

      <GridItem>
        <ElementMenuNav icon="building" text="moderno"/>
      </GridItem>

      <GridItem>
        <ElementMenuNav icon="museum" text="clássico"/>
      </GridItem>

      <GridItem colSpan={[2, 2, 2, 1]}>
        <ElementMenuNav icon="earth" text="e mais..."/>
      </GridItem>
    </Grid>
  )
}