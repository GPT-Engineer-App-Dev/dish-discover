import { Container, Text, VStack, Heading, Box, Image, SimpleGrid } from "@chakra-ui/react";

const recipes = [
  {
    title: "Spaghetti Carbonara",
    image: "https://via.placeholder.com/150",
    description: "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper."
  },
  {
    title: "Chicken Tikka Masala",
    image: "https://via.placeholder.com/150",
    description: "Chunks of grilled chicken (tikka) cooked in a creamy, spiced tomato sauce."
  },
  {
    title: "Beef Stroganoff",
    image: "https://via.placeholder.com/150",
    description: "A Russian dish of sautéed pieces of beef served in a sauce with smetana (sour cream)."
  }
];

const Index = () => {
  return (
    <Container centerContent maxW="container.lg" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">Recipe Sharing Website</Heading>
        <Text fontSize="lg">Discover and share your favorite recipes!</Text>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {recipes.map((recipe, index) => (
            <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md">
              <Image src={recipe.image} alt={recipe.title} />
              <Box p={6}>
                <Heading as="h3" size="md" mb={2}>{recipe.title}</Heading>
                <Text>{recipe.description}</Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;