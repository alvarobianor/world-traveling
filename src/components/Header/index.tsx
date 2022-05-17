import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Flex, IconButton } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
const Header = () => {
  const router = useRouter();

  return (
    <Flex
      w="100%"
      h="100"
      paddingLeft={router.asPath !== "/" ? "60px" : "100px"}
      paddingRight="100"
      flexDirection="row"
      alignItems="center"
    >
      {router.asPath !== "/" && (
        <Link href="/" passHref>
          <IconButton
            aria-label="Back Page"
            variant="unstyled"
            icon={<ChevronLeftIcon w={6} h={6} color="myGray.50" />}
          />
        </Link>
      )}

      <Flex w="100%" h="100%" justifyContent="center" alignItems="center">
        <Image src="/world-trip-logo.svg" alt="logo" width={185} height={50} />
      </Flex>
    </Flex>
  );
};

export default Header;
