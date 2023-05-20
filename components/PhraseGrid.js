import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

export default function PhrasesGrid({ data }) {
  return (
    <Box p={4}>
      <Stack id="all-phrase-heading" spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={"3xl"} >
          ყველა ბრძნული გამონათქვამი
        </Heading>
      </Stack>

      <Container maxW={"6xl"} mt={10}>
        <SimpleGrid
          columns={{ base: 2, lg: 2, md: 1, sm: 1, xs: 1 }}
          spacing={10}
        >
          {data.map((item) => (
            <HStack key={item.id} align={"top"}>
              <Box color={"green.400"} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={"start"}>
                <Text color={"gray.600"} fontWeight={"bold"}>
                  {item.content}
                </Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
