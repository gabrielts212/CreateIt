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
// import  Link from "next/link";


function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const isMobile = useBreakpointValue({ base: true, lg: false });

  return (
    <ChakraProvider>
      <Box bg="white" px={4} py={2} pt="10">
        <Flex align="center">
          <Link href="/"  pl={8}>
            <Image src={Logo} alt="Logo"  />
          </Link>

          <Spacer />

          {isMobile ? (
            <Button
              onClick={() => setShowMenu(!showMenu)}
              display="flex"
              alignItems="center"
              justifyContent="center"
              bgColor="white"
              bg="white"
              w={120}
              h={10}
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
              <a href="/" >
              
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
            href="/paginadefiltros"  passHref
              as="span"
              my={2}
              _hover={{ textDecoration: "none", color: "gray.600" }}
            >
              PARTNER
            </a>
            {/* <a
          href="/registerpage"
          className="block mt-4 text-green-500 hover:text-green-400 text-base"
        >
          Ainda não tem uma conta? Cadastre-se
        </a> */}




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
        )}
      </Box>
    </ChakraProvider>
  );
}

export default Header;
