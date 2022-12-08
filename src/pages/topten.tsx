import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getTopTen } from "../db/utils/pokemon";

export default function TopTen() {
  const [topTen, setTopTen] = useState<any>([]);

  const getTopTenPokemon = async () => {
    const result: any = await getTopTen();
    let resultArr = [];
    for (let i = 0; i < Object.keys(result).length; i++) {
      resultArr.push(result[i]);
    }
    setTopTen(resultArr);
  };

  useEffect(() => {
    getTopTenPokemon();
  }, []);

  return (
    <Box p={4}>
      <Flex direction="column" align="center">
        <Heading mb={2}>Top ten powerful pokemon!</Heading>
        <Text fontSize="md" mb={10}>Based on calculated ELO from battle page.</Text>
        <Wrap gap={10}>
          {topTen.map((pokemon: any) => (
            <WrapItem>
              <Image
                style={{ transition: "all 0.5s" }}
                _hover={{
                  transform: "scale(1.1)",
                  cursor: "pointer",
                }}
                src={pokemon[0]}
              ></Image>
            </WrapItem>
          ))}
        </Wrap>
      </Flex>
    </Box>
  );
}
