import {
    Flex,
    Box,
    SimpleGrid,
    Heading,
    Text,
    Button,
    Stack,
    Divider,
  } from "@chakra-ui/react";
  
  import Image from "next/image";
  import Logo4 from "../../assets/logobusiness.png";
  import ArrowLogo from "../../assets/setabusiness.png";
  
  const Business = () => {
    return (
      <Flex
        flexDirection="column"
        p={{ base: 4, md: 10 }}
        alignItems="center"
        bg="white"
      >
        <Heading
          as="h2"
          size="xl"
          pl={{ base: "0", md: "20" }}
          mb={{ base: 4, md: 0 }}
          textAlign="center"
          zIndex={2}
          width={{ base: "100%", md: "60%" }}
          maxW="800px"
        >
          Improve your Business
        </Heading>
  
        <Flex alignItems="center" justifyContent="center" mb={10}>
          <Image src={ArrowLogo} alt="Arrow Logo" width={50} height={50} />
          <Text fontSize={{ base: "md", md: "lg" }} textAlign="center">
            Improve the Quality of your Business and Feel the Benefits with Us
          </Text>
        </Flex>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={1}
          alignItems="center"
          maxW="1400px"
        >
          <Flex justify="center" align="center" zIndex={1} mb="10">
            <Image
              src={Logo4}
              alt="Improve Business"
              width={400}
              height={400}
            />
          </Flex>
          <Box zIndex={1}>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
              <Stack
                p={5}
                boxShadow="lg"
                borderRadius="xl"
                bg="white"
                alignItems="center"
                textAlign="center"
                border="1px solid"
                borderColor="#9EB5CF"
              >
                <Heading size="md" mb={2}>
                  Achieve Goals
                </Heading>
                <Divider mb={4} borderBottom="2px" borderColor="#9EB5CF" />
                <Text>
                  Setting goals is like creating a roadmap to our dreams. They
                  give us direction and purpose.
                </Text>
              </Stack>
              <Stack
                p={5}
                boxShadow="lg"
                borderRadius="xl"
                bg="#2D3748"
                alignItems="center"
                textAlign="center"
                border="1px solid"
                borderColor="#9EB5CF"
                color="white"
              >
                <Heading size="md" mb={2}>
                  Campaign Manage
                </Heading>
                <Divider mb={4} borderBottom="2px" borderColor="#9EB5CF" />
                <Text>
                  Set clear and measurable objectives for your campaigns. Know
                  what you want to achieve.
                </Text>
              </Stack>
              <Stack
                p={5}
                boxShadow="lg"
                borderRadius="xl"
                bg="white"
                alignItems="center"
                textAlign="center"
                border="1px solid"
                borderColor="#9EB5CF"
              >
                <Heading size="md" mb={2}>
                  Brand Development
                </Heading>
                <Divider mb={4} borderBottom="2px" borderColor="#9EB5CF" />
                <Text>
                  We build a strong personal brand identity with consistent
                  verbiage style, visual appearance, and values.
                </Text>
              </Stack>
            </SimpleGrid>
          </Box>
        </SimpleGrid>
  
        <Button
          mt={8}
          color="white"
          bg="#66B2C2"
          borderRadius="full"
          size="lg"
          _hover={{ bgGradient: "linear(to-r, teal.400, green.400)" }}
        >
          View More
        </Button>
      </Flex>
    );
  };
  
  export default Business;