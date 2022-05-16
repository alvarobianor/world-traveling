import { Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div>
      <Header />

      <Text fontSize="6xl" fontWeight="bold">
        Alvaro Bianor Sousa Medeiros
      </Text>
    </div>
  );
};

export default Home;
