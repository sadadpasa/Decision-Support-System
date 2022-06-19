import { Box, Divider, Heading, HStack, Text, VStack } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import { BiData } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { GiWeightCrush } from "react-icons/gi";
import { IconType } from "react-icons/lib";
import { useNavigate } from "react-location";

type LinkProps = {
  icon: IconType;
  text: string;
  to: string;
};

const Link = (props: LinkProps) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate({ to: props.to, replace: true });
  };

  return (
    <HStack
      display="flex"
      alignItems="center"
      spacing="2"
      cursor="pointer"
      onClick={onClick}
    >
      <props.icon size={20} />
      <Text>{props.text}</Text>
    </HStack>
  );
};

const Sidebar = () => (
  <Box
    as="aside"
    bgColor="green.400"
    w="80"
    color="white"
    p="8"
    flexShrink="0"
  >
    <Heading as="h3" fontSize="3xl" mb="2">
      Tugas Akhir SPK
    </Heading>

    {/* <Box
      bgColor="white"
      borderRadius={20}
    >
      <Text opacity="75" mb="3" fontWeight="bold" color={"blue"}>
        Anggota :
      </Text>
      <Text opacity="75" mb="1" fontWeight="bold">
        Robby Attoilah
      </Text>
      <Text opacity="75" mb="1" fontWeight="bold">
        Sadad Zulfanazhif Pasa
      </Text>
      <Text opacity="75" mb="1" fontWeight="bold">
        Samatha Mahendra
      </Text>
      <Text opacity="75" mb="1" fontWeight="bold">
        Thoriq Faisal Yahya
      </Text>
    </Box> */}

    <Divider my="4" />
    <Text textTransform="uppercase" opacity="75" mb="3" fontWeight="bold">
      Main
    </Text>
    <VStack spacing="4" alignItems="start">
      <Link icon={BiData} text="Dataset" to="/" />
    </VStack>
    <Divider my="4" />
    <Text textTransform="uppercase" opacity="75" mb="3" fontWeight="bold">
      Method
    </Text>
    <VStack spacing="4" alignItems="start">
      <Link
        icon={GiWeightCrush}
        text="Weight Product Method"
        to="/weight-product" />
    </VStack>
  </Box>
);

export default Sidebar;
