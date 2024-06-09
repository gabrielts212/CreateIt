import { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  List,
  ListItem,
  Text,
  VStack,
  HStack,
  IconButton,
  Image,
  Badge,
  Spinner,
  Grid,
  GridItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from '@chakra-ui/react';
import { DeleteIcon, StarIcon, ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import axios from 'axios';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [newProduct, setNewProduct] = useState({ title: '', image: '' });
  const [currentPage, setCurrentPage] = useState(1);
  const [currentFavPage, setCurrentFavPage] = useState(1);
  const itemsPerPage = 10;
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
    setLoading(false);
  };

  const toggleFavorite = (product) => {
    if (favorites.find((fav) => fav.id === product.id)) {
      setFavorites(favorites.filter((fav) => fav.id !== product.id));
    } else {
      setFavorites([...favorites, product]);
    }
  };

  const createProduct = () => {
    if (!newProduct.title || !newProduct.image) return;
    const product = { ...newProduct, id: new Date().getTime() }; 
    setProducts([...products, product]);
    setNewProduct({ title: '', image: '' });
    onClose();
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
    setFavorites(favorites.filter((fav) => fav.id !== id));
  };

  const handlePageChange = (direction, type) => {
    if (type === 'products') {
      setCurrentPage((prevPage) => prevPage + direction);
    } else if (type === 'favorites') {
      setCurrentFavPage((prevPage) => prevPage + direction);
    }
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase()) &&
    !favorites.find((fav) => fav.id === product.id)
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const indexOfLastFavItem = currentFavPage * itemsPerPage;
  const indexOfFirstFavItem = indexOfLastFavItem - itemsPerPage;
  const currentFavItems = favorites.slice(indexOfFirstFavItem, indexOfLastFavItem);
  const totalFavPages = Math.ceil(favorites.length / itemsPerPage);

  return (
    <Container maxW="container.xl" py={8} minHeight="80vh">
      <Heading mb={8} textAlign="center" color="teal.600">Produtos e Favoritos</Heading>
      <Grid templateColumns={{ base: '1fr', lg: '2fr 1fr' }} gap={6}>
        <GridItem>
          <Heading size="lg" mb={4} color="teal.500">Produtos</Heading>
          <VStack spacing={4} mb={4}>
            <Input
              placeholder="Buscar produtos"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              bg="white"
              borderColor="teal.400"
              focusBorderColor="teal.600"
            />
            <Button onClick={onOpen} colorScheme="teal" variant="solid">Adicionar Novo Produto</Button>
          </VStack>
          {loading ? (
            <Box textAlign="center" py={8}>
              <Spinner size="xl" color="teal.500" />
            </Box>
          ) : (
            <>
              <List spacing={3} mb={4}>
                {currentItems.map((product) => (
                  <ListItem key={product.id} p={4} borderWidth="1px" borderRadius="lg">
                    <HStack justify="space-between">
                      <Box>
                        <Image src={product.image} alt={product.title} boxSize="50px" objectFit="cover" />
                        <Text ml={4}>{product.title}</Text>
                      </Box>
                      <HStack>
                        <Badge colorScheme={favorites.find((fav) => fav.id === product.id) ? 'green' : 'gray'}>
                          {favorites.find((fav) => fav.id === product.id) ? 'Favorito' : 'Não Favorito'}
                        </Badge>
                        <IconButton
                          icon={<StarIcon />}
                          colorScheme={favorites.find((fav) => fav.id === product.id) ? 'yellow' : 'gray'}
                          onClick={() => toggleFavorite(product)}
                        />
                        <IconButton
                          icon={<DeleteIcon />}
                          colorScheme="red"
                          onClick={() => deleteProduct(product.id)}
                        />
                      </HStack>
                    </HStack>
                  </ListItem>
                ))}
              </List>
              <HStack justifyContent="center" spacing={4}>
                <IconButton
                  icon={<ChevronLeftIcon />}
                  onClick={() => handlePageChange(-1, 'products')}
                  isDisabled={currentPage === 1}
                  aria-label="Previous Page"
                  bg="teal.500"
                  color="white"
                  _hover={{ bg: 'teal.600' }}
                />
                <Text>
                  Página {currentPage} de {totalPages}
                </Text>
                <IconButton
                  icon={<ChevronRightIcon />}
                  onClick={() => handlePageChange(1, 'products')}
                  isDisabled={currentPage === totalPages}
                  aria-label="Next Page"
                  bg="teal.500"
                  color="white"
                  _hover={{ bg: 'teal.600' }}
                />
              </HStack>
            </>
          )}
        </GridItem>
        <GridItem>
          <Heading size="lg" mb={4} color="teal.500">Favoritos</Heading>
          <List spacing={3}>
            {currentFavItems.map((product) => (
              <ListItem key={product.id} p={4} borderWidth="1px" borderRadius="lg">
                <HStack justify="space-between">
                  <Box>
                    <Image src={product.image} alt={product.title} boxSize="50px" objectFit="cover" />
                    <Text ml={4}>{product.title}</Text>
                  </Box>
                  <IconButton
                    icon={<DeleteIcon />}
                    colorScheme="red"
                    onClick={() => toggleFavorite(product)}
                  />
                </HStack>
              </ListItem>
            ))}
          </List>
          <HStack justifyContent="center" spacing={4} mt={4}>
            <IconButton
              icon={<ChevronLeftIcon />}
              onClick={() => handlePageChange(-1, 'favorites')}
              isDisabled={currentFavPage === 1}
              aria-label="Previous Page"
              bg="teal.500"
              color="white"
              _hover={{ bg: 'teal.600' }}
            />
            <Text>
              Página {currentFavPage} de {totalFavPages}
            </Text>
            <IconButton
              icon={<ChevronRightIcon />}
              onClick={() => handlePageChange(1, 'favorites')}
              isDisabled={currentFavPage === totalFavPages}
              aria-label="Next Page"
              bg="teal.500"
              color="white"
              _hover={{ bg: 'teal.600' }}
            />
          </HStack>
        </GridItem>
      </Grid>

      <Modal isOpen={isOpen} onClose={onClose} motionPreset="scale">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Adicionar Novo Produto</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>
              <Input
                placeholder="Nome do novo produto"
                value={newProduct.title}
                onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
                bg="white"
                borderColor="teal.400"
                focusBorderColor="teal.600"
              />
              <Input
                placeholder="URL da imagem"
                value={newProduct.image}
                onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                bg="white"
                borderColor="teal.400"
                focusBorderColor="teal.600"
              />
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} mr={3}>
              Cancelar
            </Button>
            <Button onClick={createProduct} colorScheme="teal">
              Adicionar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
}
