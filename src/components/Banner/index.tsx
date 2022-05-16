import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

const Banner = () => {
  return (
    <Flex
      flex="1"
      w="100%"
      h={["200", "270", "335"]}
      bgImage="/background.png"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      px="100"
      alignItems="center"
    >
      <Stack spacing="4" width="50%">
        <Text color="myWhite.50" fontSize={["md", "xl", "3xl", "5xl"]}>
          5 Continentes, <br />
          infinitas possibilidades.
        </Text>
        <Text fontSize={["md", "l", "2xl"]}>
          Chegou a hora de tirar do papel a viagem que você <br />
          sempre sonhou.{" "}
        </Text>
      </Stack>

      <Flex w="50%" height="100%" justifyContent="center">
        <Box paddingTop="50px">
          <Image
            src="/Airplane.svg"
            alt="Picture of the author"
            width={504}
            height={324}
          />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Banner;
