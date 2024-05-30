import {
    Box,
    SimpleGrid,
    Heading,
    Text,
    Button,
    useColorModeValue,
    Divider,
  } from "@chakra-ui/react";
  import Image from "next/image";
  import CheckIcon from "../../assets/checkIcon.png";
  
  const PriceCard = ({
    title,
    price,
    features,
    buttonText,
    buttonColor,
    bgColor,
    textColor,
    priceColor,
  }) => {
    return (
      <Box
        p={8}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        bg={bgColor}
        borderRadius="3xl"
        boxShadow="lg"
        width="100%"
        maxW="320px"
        textAlign="center"
        border="1px solid"
        borderColor={buttonColor}
        position="relative"
        zIndex={2}
        mb={{ base: 10, md: 0 }}
      >
        <Heading as="h3" size="lg" mb={4}>
          {title}
        </Heading>
        <Divider mb={4} borderBottom="2px" borderColor="#344455" w="100%" />
        <Box mb={4}>
          {features.map((feature, index) => (
            <Box
              key={index}
              display="flex"
              alignItems="center"
              mb={2}
              _hover={{ bgGradient: "linear(to-r, teal.400, green.400)" }}
            >
              <Image src={CheckIcon} alt="check icon" width={40} height={40} />
              <Text ml={2}>{feature}</Text>
            </Box>
          ))}
        </Box>
        <Box
          borderBottom="2px"
          borderColor="#344455"
          width="100%"
          mb={4}
          position="relative"
          display="flex"
          justifyContent="center"
        >
          <Box
            position="absolute"
            left="-2.5"
            top="50%"
            transform="translateY(-50%)"
            bg="#344455"
            borderRadius="full"
            width="10px"
            height="10px"
          />
          <Box
            position="absolute"
            right="-2.5"
            top="50%"
            transform="translateY(-50%)"
            bg="#344455"
            borderRadius="full"
            width="10px"
            height="10px"
          />
        </Box>
        <Text fontWeight="bold" fontSize="4xl" mb={4} color={priceColor}>
          ${price}
        </Text>
        <Button
          variant="outline"
          position="absolute"
          _hover={{ bgGradient: "linear(to-r, teal.400, green.400)" }}
          bottom="-70px"
          borderRadius="full"
          width="150px"
          height="50px"
          borderColor={buttonColor}
          color={buttonColor}
          bg={buttonColor}
          textColor={textColor}
        >
          {buttonText}
        </Button>
      </Box>
    );
  };
  
  const Plans = () => {
    const plans = [
      {
        title: "Basic",
        price: "56",
        features: [
          "Single Post Package",
          "Story Package",
          "Collaboration Package",
        ],
        buttonText: "Get Now",
        buttonColor: "white",
        bgColor: "white",
        textColor: "black",
        priceColor: "black",
      },
      {
        title: "Standard",
        price: "120",
        features: [
          "6 Post Package",
          "Story Package",
          "Collaboration Package",
          "Free Second Week",
        ],
        buttonText: "Get Now",
        buttonColor: "#4F6C8C",
        bgColor: "#4F6C8C",
        textColor: "white",
        priceColor: "white",
      },
      {
        title: "Premium",
        price: "200",
        features: [
          "12 Post Package",
          "24 Story Package",
          "Collaboration Package",
          "Free Second Week",
        ],
        buttonText: "Get Now",
        buttonColor: "white",
        bgColor: "white",
        textColor: "black",
        priceColor: "black",
      },
    ];
  
    return (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        py={16}
        px={8}
        bg={useColorModeValue("white", "gray.900")}
        position="relative"
      >
        <Box
          justifyContent="center"
          position="absolute"
          width="60%"
          height="40%"
          top="385"
          bg="#66B2C2"
          borderRadius="3xl"
          zIndex={1}
        />
        <Heading
          as="h2"
          size="xl"
          mb={10}
          textAlign="center"
          zIndex={2}
          maxW="320px"
        >
          Choose a Package According to Your Needs
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} zIndex={2}>
          {plans.map((plan, index) => (
            <PriceCard
              key={index}
              title={plan.title}
              price={plan.price}
              features={plan.features}
              buttonText={plan.buttonText}
              buttonColor={plan.buttonColor}
              bgColor={plan.bgColor}
              textColor={plan.textColor}
              priceColor={plan.priceColor}
            />
          ))}
        </SimpleGrid>
      </Box>
    );
  };
  
  export default Plans;