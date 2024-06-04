import { useState } from "react";
import { Container, Text, VStack, Heading, Box, Image, SimpleGrid, Input, Textarea, Button, FormControl, FormLabel } from "@chakra-ui/react";

const initialRecipes = [
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
  const [recipes, setRecipes] = useState(initialRecipes);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = { title, image, description };
    setRecipes([...recipes, newRecipe]);
    setTitle("");
    setImage("");
    setDescription("");
  };

  return (
    <Container centerContent maxW="container.lg" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">Recipe Sharing Website</Heading>
        <Text fontSize="lg">Discover and share your favorite recipes!</Text>
        
        <Box as="form" onSubmit={handleSubmit} width="100%" maxW="md" p={6} borderWidth="1px" borderRadius="lg" boxShadow="md">
          <VStack spacing={4}>
            <FormControl id="title" isRequired>
              <FormLabel>Recipe Title</FormLabel>
              <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter recipe title" />
            </FormControl>
            <FormControl id="image" isRequired>
              <FormLabel>Image URL</FormLabel>
              <Input value={image} onChange={(e) => setImage(e.target.value)} placeholder="Enter image URL" />
            </FormControl>
            <FormControl id="description" isRequired>
              <FormLabel>Description</FormLabel>
              <Textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter recipe description" />
            </FormControl>
            <Button type="submit" colorScheme="blue" width="full">Submit Recipe</Button>
          </VStack>
        </Box>

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