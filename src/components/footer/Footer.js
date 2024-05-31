import {
    Box,
    Container,
    SimpleGrid,
    Stack,
    Text,
    Flex,
    Divider,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Center,Link
  } from "@chakra-ui/react";
 
  import Image from "next/image";
  import Logo from "../../assets/logo.png";
  import Logo2 from "../../assets/logo2.png";
  import { TiSocialInstagramCircular, TiSocialLinkedinCircular } from "react-icons/ti";
  import { TiSocialTwitterCircular } from "react-icons/ti";
  
  
  const Footer = () => {
    return (
      <Box bg="white" color="gray.700" py={10}>
        <Divider w="90%" borderWidth={2} borderColor="gray" mb={20} mx="auto" />
  
        <Container maxW="6xl">
          <SimpleGrid columns={{ base: 1, md: 5 }} spacing={4}>
            <Stack align="center" spacing={4} pr="41" justifyContent="center">
              <Box pb={10}>

              <Link >
                <Image src={Logo} alt="Logo" width={120} height={100} />
              </Link>
              </Box>
              <Flex justifyContent="center">
                <Link mx={1}>
                <TiSocialTwitterCircular size={35}/>
                </Link>
                <Link mx={1}>
                  <TiSocialInstagramCircular  size={35} />
                </Link>
                <Link mx={1}>
                  <TiSocialLinkedinCircular size={35} />
                </Link>
              </Flex>
            </Stack>
  
            <Accordion allowToggle display={{ base: "block", md: "none" }}>
              <AccordionItem>
                <h2>
                  <Flex justifyContent="center">
                    <AccordionButton width="70%">
                      <Box
                        flex="1"
                        display="flex"
                        textAlign="center"
                        alignItems="center"
                        justifyContent="center"
                        bg="#66B2C2"
                        borderRadius="full"
                        px={2}
                        py={1}
                      >
                        <Text color="white" mr={2}>
                          Influencers
                        </Text>
                        <AccordionIcon color="white" />
                      </Box>
                    </AccordionButton>
                  </Flex>
                </h2>
                <AccordionPanel
                  pb={4}
                  textAlign="center"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Flex mb={4} alignItems="center" justifyContent="center">
                    <Box mr={4} mb="4">
                      <Image src={Logo2} alt="Logo" width={7} height={7} />
                    </Box>
                    <Stack spacing={0}>
                      <Text>Content</Text>
                      <Text>About Influencers</Text>
                      <Text>Performance</Text>
                      <Text>Work</Text>
                    </Stack>
                  </Flex>
                </AccordionPanel>
              </AccordionItem>
  
              <AccordionItem>
                <h2>
                  <Flex justifyContent="center">
                    <AccordionButton width="70%">
                      <Box
                        flex="1"
                        textAlign="center"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        bg="#66B2C2"
                        borderRadius="full"
                        px={2}
                        py={1}
                      >
                        <Text color="white" mr={2}>
                          Service
                        </Text>
                        <AccordionIcon color="white" />
                      </Box>
                    </AccordionButton>
                  </Flex>
                </h2>
                <AccordionPanel
                  pb={4}
                  textAlign="center"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Flex mb={4} alignItems="center" justifyContent="center">
                    <Box mr={4}>
                      <Image src={Logo2} alt="Logo" width={12} height={12} />
                    </Box>
                    <Stack spacing={0}>
                      <Text>Upgrade Rate</Text>
                      <Text>Copy Writing</Text>
                      <Text>Vlogging</Text>
                      <Text>Publishing</Text>
                    </Stack>
                  </Flex>
                </AccordionPanel>
              </AccordionItem>
  
              <AccordionItem>
                <h2>
                  <Flex justifyContent="center">
                    <AccordionButton width="70%">
                      <Box
                        flex="1"
                        textAlign="center"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        bg="#66B2C2"
                        borderRadius="full"
                        px={2}
                        py={1}
                      >
                        <Text color="white" mr={2}>
                          Community
                        </Text>
                        <AccordionIcon color="white" />
                      </Box>
                    </AccordionButton>
                  </Flex>
                </h2>
                <AccordionPanel
                  pb={4}
                  textAlign="center"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Flex mb={4} alignItems="center" justifyContent="center">
                    <Box mr={4}>
                      <Image src={Logo2} alt="Logo" width={12} height={12} />
                    </Box>
                    <Stack spacing={0}>
                      <Text>Influencers Form</Text>
                      <Text>Sharing Session</Text>
                      <Text>Meet & Greet</Text>
                    </Stack>
                  </Flex>
                </AccordionPanel>
              </AccordionItem>
  
              <AccordionItem>
                <h2>
                  <Flex justifyContent="center">
                    <AccordionButton width="70%">
                      <Box
                        flex="1"
                        textAlign="center"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        bg="#66B2C2"
                        borderRadius="full"
                        px={2}
                        py={1}
                      >
                        <Text color="white" mr={2}>
                          About
                        </Text>
                        <AccordionIcon color="white" />
                      </Box>
                    </AccordionButton>
                  </Flex>
                </h2>
                <AccordionPanel
                  pb={4}
                  textAlign="center"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Flex mb={4} alignItems="center" justifyContent="center">
                    <Box mr={4}>
                      <Image src={Logo2} alt="Logo" width={12} height={12} />
                    </Box>
                    <Stack spacing={0}>
                      <Text>Work On</Text>
                      <Text>Profile</Text>
                      <Text>Privacy</Text>
                    </Stack>
                  </Flex>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
  







  
            <Stack
              align="flex-start"
              spacing={2}
              display={{ base: "none", md: "block" }}
            >
              <Box bg="#66B2C2" borderRadius="full" px={3} py={1} mb={2}>
                <Text color="white" fontWeight="500" fontSize="lg">
                  Influencers
                </Text>
              </Box>

              <Flex alignItems="center">
                <Box  mr={4} pb="6">
                  <Image src={Logo2} alt="Logo" width={6} height={6} />
                </Box>
  
                <Stack spacing={0}>
                  <Text>Content</Text>
                  <Text>About Influencers</Text>
                  <Text>Performance</Text>
                  <Text>Work</Text>
                </Stack>
              </Flex>
            </Stack>
  
            <Stack
              align="flex-start"
              spacing={2}
              display={{ base: "none", md: "block" }}
            >
              <Box bg="#66B2C2" borderRadius="full" px={3} py={1} mb={2}>
                <Text color="white" fontWeight="500" fontSize="lg">
                  Service
                </Text>
              </Box>
              <Flex alignItems="center">
                <Box mr={4} pb="6">
                  <Image src={Logo2} alt="Logo" width={6} height={6} />
                </Box>
                <Stack spacing={0}>
                  <Text>Upgrade Rate</Text>
                  <Text>Copy Writing</Text>
                  <Text>Vlogging</Text>
                  <Text>Publishing</Text>
                </Stack>
              </Flex>
            </Stack>
  
            <Stack
              align="flex-start"
              spacing={2}
              display={{ base: "none", md: "block" }}
            >
              <Box bg="#66B2C2" borderRadius="full" px={3} py={1} mb={2}>
                <Text color="white" fontWeight="500" fontSize="lg">
                  Community
                </Text>
              </Box>
              <Flex alignItems="center">
                <Box mr={4} pb="1">
                  <Image src={Logo2} alt="Logo" width={6} height={6} />
                </Box>
                <Stack spacing={0}>
                  <Text>Influencers Form</Text>
                  <Text>Sharing Session</Text>
                  <Text>Meet & Greet</Text>
                </Stack>
              </Flex>
            </Stack>
  
            <Stack
              align="flex-start"
              spacing={2}
              display={{ base: "none", md: "block" }}
            >
              <Box bg="#66B2C2" borderRadius="full" px={3} py={1} mb={2}>
                <Text color="white" fontWeight="500" fontSize="lg">
                  About
                </Text>
              </Box>
              <Flex alignItems="center">
                <Box mr={4} pb="1">
                  <Image src={Logo2} alt="Logo" width={6} height={6} />
                </Box>
                <Stack spacing={0}>
                  <Text>Work On</Text>
                  <Text>Profile</Text>
                  <Text>Privacy</Text>
                </Stack>
              </Flex>
            </Stack>
          </SimpleGrid>



          
        </Container>





        <Box textAlign="center" mt={20}>
          <Divider w="90%" borderWidth={2} borderColor="gray" mb={5} mx="auto" />
          <Text>Resource by Blogger LandingPage - ©2024</Text>
        </Box>
      </Box>
    );
  };
  
  export default Footer;