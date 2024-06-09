import {
    Box,
    Flex,
    SimpleGrid,
    Heading,
    Text,
    Button,
    Stack,
    HStack,
  } from "@chakra-ui/react";
  import React from "react";
  
  const GreatWork = () => {
    return (
      <Box position="relative" width="100%" bg="#66B2C2" py={{ base: 8, md: 16 }}>
        <Flex
          flexDirection="column"
          p={{ base: 4, md: 10 }}
          alignItems="center"
          bg="#66B2C2"
          borderBottomLeftRadius={{ base: "40px", md: "80px" }}
          borderBottomRightRadius={{ base: "40px", md: "80px" }}
          zIndex={2}
        >
          <Heading
            fontFamily="Montserrat"
            fontSize={{ base: "2xl", md: "48px" }}
            textAlign="center"
            mb={6}
            color="white"
          >
            The Great Work
          </Heading>
          <Flex justifyContent="center" alignItems="center" mb={6}>
            <Text fontSize={{ base: "md", md: "lg" }} color="white" ml={2}>
              Collaborating with our agency is an effective marketing strategy to
              achieve goals.
            </Text>
          </Flex>
          <HStack spacing={4} mb={6} wrap="wrap" justify="center">
            <Button
              variant="outline"
              colorScheme="whiteAlpha"
              borderRadius="full"
            >
              Influence & Followers
            </Button>
            <Button
              variant="solid"
              bg="white"
              color="#66B2C2"
              borderRadius="full"
            >
              Wedding Party
            </Button>
            <Button
              variant="outline"
              colorScheme="whiteAlpha"
              borderRadius="full"
            >
              Business Expansion
            </Button>
            <Button
              variant="outline"
              colorScheme="whiteAlpha"
              borderRadius="full"
            >
              Publishing Business
            </Button>
          </HStack>
  
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={10}
            alignItems="center"
            w="full"
            maxW="1200px"
            bg="white"
            p={6}
            borderRadius="xl"
            boxShadow="lg"
            mb={40}
          >
            <Box display="flex" alignItems="center">
              <Text fontSize={{ base: "md", md: "lg" }} mb={4}>
                <strong>Our experienced team</strong> will be present to ensure
                every aspect of the event runs smoothly from welcoming guests.
              </Text>
            </Box>
            <Box display="flex" alignItems="center">
              <Text fontSize={{ base: "md", md: "lg" }} mb={4}>
                <strong>Every precious moment</strong> will be captured by our
                professional photographers and videographers.
              </Text>
            </Box>
          </SimpleGrid>
          <Box
            position="absolute"
            bottom={0}
            left={0}
            width="100%"
            height="80px"
            borderTopLeftRadius={{ base: "40px", md: "80px" }}
            borderTopRightRadius={{ base: "40px", md: "80px" }}
            bg="#F8EFBA"
            zIndex={1}
          />
        </Flex>
      </Box>
    );
  };
  
  export default GreatWork;