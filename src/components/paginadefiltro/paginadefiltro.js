import { useState, useEffect } from 'react';
import {
  Box,
  Input,
  List,
  ListItem,
  Heading,
  Container,
  Spinner,
  Text,
  Button,
  VStack,
  Wrap,
  WrapItem,
  HStack,
  IconButton,
  Image,
  Divider,
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import axios from 'axios';

export default function Home() {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('');
  const [nameFilter, setNameFilter] = useState('');
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products/categories');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
    setLoading(false);
  };

  const filteredData = data.filter((item) => {
    return (
      item.title.toLowerCase().includes(nameFilter.toLowerCase()) &&
      (categoryFilter === '' || item.category === categoryFilter)
    );
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPageButtons = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
    let endPage = Math.min(totalPages, startPage + maxPageButtons - 1);

    if (endPage - startPage < maxPageButtons - 1) {
      startPage = Math.max(1, endPage - maxPageButtons + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <Button
          key={i}
          onClick={() => handlePageChange(i)}
          bg={currentPage === i ? '#66B2C2' : 'gray.300'}
          color="white"
          _hover={{ bg: '#66B2C2' }}
        >
          {i}
        </Button>
      );
    }
    return pageNumbers;
  };

  return (
    <Container maxW="container.xl" py={8}>
      <Heading mb={8} textAlign="center" color="#66B2C2">Lista de Produtos</Heading>
      <VStack spacing={4} mb={8}>
        <Wrap spacing={4} justify="center">
          <WrapItem>
            <Button
              onClick={() => setCategoryFilter('')}
              bg={categoryFilter === '' ? '#66B2C2' : 'gray.300'}
              color="white"
              _hover={{ bg: '#66B2C2' }}
            >
              Todas as Categorias
            </Button>
          </WrapItem>
          {categories.map((category, index) => (
            <WrapItem key={index}>
              <Button
                onClick={() => setCategoryFilter(category)}
                bg={categoryFilter === category ? '#66B2C2' : 'gray.300'}
                color="white"
                _hover={{ bg: '#66B2C2' }}
              >
                {category}
              </Button>
            </WrapItem>
          ))}
        </Wrap>
        <Input
          placeholder="Filtrar por nome"
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
          bg="white"
          borderColor="#66B2C2"
          focusBorderColor="#66B2C2"
          size="lg"
          shadow="sm"
        />
      </VStack>
      {loading ? (
        <Box textAlign="center" py={8}>
          <Spinner size="xl" color="#66B2C2" />
        </Box>
      ) : (
        <>
          <List spacing={4} mb={8}>
            {currentItems.map((item) => (
              <ListItem key={item.id} p={6} borderWidth="1px" borderRadius="lg" shadow="md">
                <HStack spacing={4}>
                  <Image src={item.image} alt={item.title} boxSize="150px" objectFit="cover" borderRadius="md" />
                  <Box>
                    <Heading size="md" color="#66B2C2">{item.title}</Heading>
                    <Text fontSize="sm" color="gray.500">
                      {item.category}
                    </Text>
                    <Box mt={2} color="gray.700">{item.description}</Box>
                  </Box>
                </HStack>
              </ListItem>
            ))}
          </List>
          <Divider my={8} />
          <HStack justifyContent="center" spacing={4}>
            <IconButton
              icon={<ChevronLeftIcon />}
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              isDisabled={currentPage === 1}
              aria-label="Previous Page"
              bg="#66B2C2"
              color="white"
              _hover={{ bg: '#66B2C2' }}
            />
            {renderPageNumbers()}
            <IconButton
              icon={<ChevronRightIcon />}
              onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
              isDisabled={currentPage === totalPages}
              aria-label="Next Page"
              bg="#66B2C2"
              color="white"
              _hover={{ bg: '#66B2C2' }}
            />
          </HStack>
        </>
      )}
    </Container>
  );
}
