import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";

const Header = () => {
  return (
    <Flex flex="1" w="100%" h="100" justifyContent="center" alignItems="center">
      <Image src="/world-trip-logo.svg" alt="logo" width={185} height={50} />
    </Flex>
  );
};

export default Header;
