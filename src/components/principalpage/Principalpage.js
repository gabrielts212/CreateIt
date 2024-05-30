import {
    Box,
    Heading,
    Text,
    Button,
    SimpleGrid,
    VStack,
    HStack,
    Divider,
    Flex,
  } from "@chakra-ui/react";
  
  import Image from "next/image";
  
  import Logoformtext from "../../assets/logoformtext.png";
  import Checked from "../../assets/checked.png";
  
  const Principalpage = () => {
    return (
      <Box
        position="relative"
        p={{ base: 4, md: 10 }}
        bg="white"
        overflow="hidden"
      >
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={10}
          alignItems="center"
          maxW="1200px"
          mx="auto"
          pb={40}
        >
          <Box position="relative" width="100%">
            <VStack
              align="flex-start"
              spacing={6}
              zIndex={1}
              position="relative"
              p={{ base: 4, md: 10 }}
              border="2px solid #CBD5E0"
              borderRadius="xl"
            >
              <Box position="relative" width="100%">
                <Heading
                  fontFamily="Montserrat"
                  fontSize={{ base: "2xl", md: "48px" }}
                  textAlign="left"
                >
                  LET'S TURN YOUR VLOGGING PASSION
                </Heading>
                <Box
                  position="absolute"
                  top="0"
                  right="-50px"
                  transform="rotate(15deg)"
                  zIndex={-1}
                >
                  <Image src={Logoformtext} alt="Logo" width={50} height={50} />
                </Box>
              </Box>
              <Text fontSize={{ base: "md", md: "lg" }} lineHeight="1.5">
                Join Us on Our Blog and Enjoy{" "}
                <Text as="span" color="teal.500">
                  High-Quality Content
                </Text>{" "}
                that Inspires and Provides Solutions
              </Text>
              <Button
                colorScheme="teal"
                bg="#66B2C2"
                borderRadius="full"
                size="lg"
                _hover={{ bgGradient: "linear(to-r, teal.400, green.400)" }}
              >
                JOIN BE PARTNER
              </Button>
            </VStack>
            <HStack spacing={8} pt={4} wrap="wrap" mt={6}>
              <VStack spacing={0} align="center">
                <Heading size="lg">35.2+</Heading>
                <Text>REVIEWS</Text>
              </VStack>
              <VStack spacing={0} align="center">
                <Heading size="lg">20K+</Heading>
                <Text>CUSTOMERS</Text>
              </VStack>
              <VStack spacing={0} align="center">
                <Heading size="lg">89%</Heading>
                <Text>AGENCY RATE</Text>
              </VStack>
              <VStack spacing={0} align="center">
                <Heading size="lg">2016</Heading>
                <Text>BEGIN ON</Text>
              </VStack>
            </HStack>
          </Box>
  
          <Box
            position="relative"
            width="100%"
            height="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            pr="32"
            pb="20"
          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              position="relative"
              zIndex={1}
            >
              <Box
                bg="gray.200"
                width={{ base: "150px", md: "200px" }}
                height={{ base: "200px", md: "300px" }}
                borderRadius="50%"
                border="2px solid black"
                position="relative"
                zIndex={2}
              />
  
              <Box
                bg="#66B2C2"
                width={{ base: "200px", md: "300px" }}
                height={{ base: "150px", md: "200px" }}
                borderRadius="20px"
                display="flex"
                justifyContent="center"
                alignItems="center"
                position="absolute"
                left={{ base: "75px", md: "100px" }}
                zIndex={1}
                px={4}
              >
                <VStack color="white" spacing={3} textAlign="left" pl="10">
                  <Flex align="center" w="100%">
                    <Box mr={2}>
                      <Image src={Checked} alt="Checked" width={15} height={15} />
                    </Box>
                    <Text fontSize={{ base: "sm", md: "lg" }} flex="1">
                      TRUSTED
                    </Text>
                  </Flex>
                  <Flex align="center" w="100%">
                    <Box mr={2}>
                      <Image src={Checked} alt="Checked" width={15} height={15} />
                    </Box>
                    <Text fontSize={{ base: "sm", md: "lg" }} flex="1">
                      ACTUAL
                    </Text>
                  </Flex>
                  <Flex align="center" w="100%">
                    <Box mr={2}>
                      <Image src={Checked} alt="Checked" width={15} height={15} />
                    </Box>
                    <Text fontSize={{ base: "sm", md: "lg" }} flex="1">
                      TRUSTED
                    </Text>
                  </Flex>
                  <Flex align="center" w="100%">
                    <Box mr={2}>
                      <Image src={Checked} alt="Checked" width={15} height={15} />
                    </Box>
                    <Text fontSize={{ base: "sm", md: "lg" }} flex="1">
                      ACTUAL
                    </Text>
                  </Flex>
                </VStack>
              </Box>
            </Box>
          </Box>
        </SimpleGrid>
        <Box
          position="absolute"
          bottom={0}
          left={0}
          width="100%"
          height="80px"
          borderTopLeftRadius="80px"
          borderTopRightRadius="80px"
          bg="#66B2C2"
          zIndex={1}
        />
      </Box>
    );
  };
  
  export default Principalpage;