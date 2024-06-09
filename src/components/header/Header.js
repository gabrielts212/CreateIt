import React, { useState } from "react";
import {
  ChakraProvider,
  Box,
  Flex,
  Spacer,
  Button,
  Text,
  Link,
  useBreakpointValue,
} from "@chakra-ui/react";
import Image from "next/image";
import Logo from "../../assets/logo.png";
import { motion } from "framer-motion";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const isMobile = useBreakpointValue({ base: true, lg: false });

  const logoVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      transition: { duration: 0.5 }
    },
  };

  const menuVariants = {
    hidden: { opacity: 0, x: "-100%" },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const headerVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 50 } },
  };

  return (
    <ChakraProvider>
      <motion.div initial="hidden" animate="visible" variants={headerVariants}>
        <Box
          bg="#F8EFBA"
          px={4}
          py={2}
          pt="5"
          pb="5"
          position="fixed"
          top={0}
          left={0}
          right={0}
          zIndex={1000}
        >
          <Flex align="center">
            <Link href="/" pl={8}>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={logoVariants}
              >
                <Image src={Logo} alt="Logo" />
              </motion.div>
            </Link>

            <Spacer />

            {isMobile ? (
              <Button
                onClick={() => setShowMenu(!showMenu)}
                display="flex"
                alignItems="center"
                justifyContent="center"
                bg="#F8EFBA"
                w={120}
                h={10}
                _hover={{ bg: "#F8EFBA" }}
                _active={{ bg: "#F8EFBA" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  width="24px"
                  height="24px"
                >
                  {showMenu ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  )}
                </svg>
              </Button>
            ) : (
              <Flex align="center">
                <a href="/">
                  <Text
                    as="span"
                    mx={4}
                    fontWeight="bold"
                    _hover={{ textDecoration: "none", color: "gray.600" }}
                    cursor="pointer"
                  >
                    HOME
                  </Text>
                </a>

                <a href="/paginadeprodutos" passHref>
                  <Text
                    as="a"
                    mx={4}
                    _hover={{ textDecoration: "none", color: "gray.600" }}
                    cursor="pointer"
                    textDecoration="none"
                  >
                    SERVICE
                  </Text>
                </a>

                <a href="/paginadefiltros" passHref>
                  <Text
                    as="a"
                    mx={4}
                    _hover={{ textDecoration: "none", color: "gray.600" }}
                    cursor="pointer"
                    textDecoration="none"
                  >
                    PARTNER
                  </Text>
                </a>

                <Button
                  ml={4}
                  colorScheme="customTeal"
                  borderRadius="full"
                  bg="#344455"
                  _hover={{ bgGradient: "linear(to-r, teal.400, green.400)" }}
                  w={24}
                  h={8}
                  fontWeight="normal"
                >
                  Contact Us
                </Button>
              </Flex>
            )}
          </Flex>

          {isMobile && showMenu && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={menuVariants}
            >
              <Flex direction="column" mt={2} p={2} borderRadius="md">
                <Text
                  as="span"
                  my={2}
                  fontWeight="bold"
                  _hover={{ textDecoration: "none", color: "gray.600" }}
                >
                  HOME
                </Text>

                <Link
                  as="span"
                  my={2}
                  _hover={{ textDecoration: "none", color: "gray.600" }}
                >
                  SERVICE
                </Link>

                <a
                  href="/paginadefiltros"
                  passHref
                  as="span"
                  my={2}
                  _hover={{ textDecoration: "none", color: "gray.600" }}
                >
                  PARTNER
                </a>

                <Button
                  mt={4}
                  colorScheme="customTeal"
                  borderRadius="full"
                  bg="#344455"
                  _hover={{ bg: "#66B2C2" }}
                  w="100%"
                  fontWeight="normal"
                >
                  Contact Us
                </Button>
              </Flex>
            </motion.div>
          )}
        </Box>
      </motion.div>
    </ChakraProvider>
  );
}

export default Header;
