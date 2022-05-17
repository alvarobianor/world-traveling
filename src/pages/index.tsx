import { Box, Center, Flex, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Banner from "../components/Banner";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
import { Divider } from "@chakra-ui/react";
const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Flex flexDirection="column" alignItems="center">
        <Flex
          justifyContent="space-between"
          width="100%"
          padding="100"
          flexWrap="wrap"
        >
          <InfoCard key={0} info="Vida noturna" srcImage="/cocktail1.svg" />
          <InfoCard key={1} info="Praia" srcImage="/beach1.svg" />
          <InfoCard key={2} info="Moderno" srcImage="/building1.svg" />
          <InfoCard key={3} info="Clássico" srcImage="/museum1.svg" />
          <InfoCard key={4} info="e mais..." srcImage="/earth1.svg" />
        </Flex>

        <Box
          width="32"
          height="1"
          backgroundColor="facebook.700"
          borderRadius="100"
        />
      </Flex>
      {/* <Text fontSize="6xl" fontWeight="bold">
        Alvaro Bianor Sousa Medeiros
      </Text> */}
    </div>
  );
};

export default Home;
