import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { phraseOfTheDay } from "../utils/phraseOfDay";

export default function Info({ data }) {
  const [phrase, setPhrase] = useState("");
  useEffect(() => {
    if (data) {
      const randomPhrase = data[parseInt(Math.random() * 10)];
      phraseOfTheDay(randomPhrase.content);

      setPhrase(JSON.parse(localStorage.getItem("phrase")).phrase);
    }
  }, [data]);

  return (
    <Stack
      id="phrase-of-the-day"
      minH={"95vh"}
      direction={{ base: "column", md: "row" }}
      marginBottom={"20"}
    >
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: useBreakpointValue({ base: "20%", md: "30%" }),
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "green.400",
                zIndex: -1,
              }}
            >
              დღის ფრაზა
            </Text>
          </Heading>
          <Text fontSize={{ base: "xl", lg: "xl" }} fontWeight={"bold"} color={"gray.500"}>
            {phrase}
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Link href={"#all-phrase-heading"} scroll={false}>
              <Button
                rounded={"full"}
                bg={"green.400"}
                color={"white"}
                _hover={{
                  bg: "green.500",
                }}
              >
                აღმოაჩინე მეტი
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"thinker"}
          objectFit={"cover"}
          src={"/assets/thinker.jpg"}
        />
      </Flex>
    </Stack>
  );
}
