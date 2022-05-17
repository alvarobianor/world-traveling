import { Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

type InfoCardProps = {
  info: string;
  srcImage: string;
};

const InfoCard = ({ info, srcImage }: InfoCardProps) => {
  return (
    <Flex flexDirection="column" alignItems="center" width="163px">
      <Image src={srcImage} alt={info} width={85} height={85} />
      <Text color="myGray.50" fontSize="2xl" mt="2" fontWeight="bold">
        {info}
      </Text>
    </Flex>
  );
};

export default InfoCard;
