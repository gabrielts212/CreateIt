import {
    Box,
    Flex,
    FormControl,
    Input,
    Button,
    Text,
    useBreakpointValue,
    Heading,
  } from "@chakra-ui/react";
  import React from "react";
  import Image from "next/image";
  import CheckIcon from "../../assets/t.png";
  import Logo from "../../assets/logocirculos.png";
  import Logo2 from "../../assets/logoformtext.png";
  
  const Form = () => {
    const formBg = useBreakpointValue({ base: "white", md: "gray.50" });
  
    return (
      <Flex
        minHeight="100vh"
        width="full"
        align="center"
        justify="center"
        p={8}
        bg="white"
      >
        <Flex
          width="full"
          maxW="1200px"
          flexDirection="column"
          bg={formBg}
          borderRadius="3xl"
          overflow="hidden"
          boxShadow="xl"
          p={6}
          border="2px solid #CBD5E0"
        >
          <Heading
            as="h2"
            size="xl"
            pl={{ base: "0", md: "20" }}
            width={{ base: "100%", md: "60%" }}
            mb={{ base: 4, md: 0 }}
            textAlign="center"
            zIndex={2}
            maxW="500px"
          >
            Choose a Package According to Your Needs
          </Heading>
  
          <Flex flexDirection={{ base: "column", md: "row" }} align="center">
            <Flex
              flex={1}
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              p={8}
            >
              <Box width="full" maxW="md">
                <FormControl id="name" mb={4} display="flex" alignItems="center">
                  <Image
                    src={CheckIcon}
                    alt="Check icon"
                    width={20}
                    height={20}
                  />
                  <Input
                    type="text"
                    placeholder="Name"
                    borderRadius="full"
                    ml={2}
                  />
                </FormControl>
                <FormControl id="email" mb={6} display="flex" alignItems="center">
                  <Image
                    src={CheckIcon}
                    alt="Check icon"
                    width={20}
                    height={20}
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    borderRadius="full"
                    ml={2}
                  />
                </FormControl>
                <Button
                  width="full"
                  colorScheme="customTeal"
                  borderRadius="full"
                  bg="#66B2C2"
                  _hover={{ bgGradient: "linear(to-r, teal.400, green.400)" }}
                  h={12}
                  fontWeight="bold"
                  textTransform="uppercase"
                >
                  Get Started
                </Button>
              </Box>
            </Flex>
  
            <Flex
              flex={1}
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              p={8}
              position="relative"
            >
              <Text
                color="gray.600"
                fontWeight="bold"
                textAlign="center"
                mb={4}
                zIndex={1}
              >
                Make Your Choice, our partners are very experienced in their field
                and have the potential to increase your business
              </Text>
              <Box zIndex={1} display="flex" justifyContent="center" mb={8}>
                <Image src={Logo} alt="Logo" width={400} height={150} />
              </Box>
              <Box
                position="absolute"
                top="-30px"
                right="-50px"
                transform="rotate(15deg)"
                zIndex={1}
              >
                <Image src={Logo2} alt="Logo" width={70} height={70} />
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    );
  };
  
  export default Form;