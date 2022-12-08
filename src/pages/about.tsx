import { Stack, Heading } from "@chakra-ui/layout";
import { Avatar, Box, Center, Flex, Text } from "@chakra-ui/react";

import Head from "next/head";
import { useState } from "react";

export default function About() {
  return (
    <>
      <Head>
        <title>Ditto</title>
      </Head>
      <Center>
        <Flex p={4} align="center" direction="column">
          <Heading>The Team</Heading>
          <Flex gap={10} justify="center" mt={5}>
            <Box>
              <Flex justify="center" align="center" direction="column">
                <Avatar
                  size="2xl"
                  name="Segun Adebayo"
                  src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.15752-9/317800743_1322827241785764_6612593415057556072_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_ohc=Si-VSxKiw-0AX_c4WoC&tn=u99fTYg4oeux01si&_nc_ht=scontent-sjc3-1.xx&oh=03_AdTsAjRpVHQhYawU9GhdHYPOPXCIJsf9ctE0b6XTO8c2PA&oe=63B8A0C1"
                />
                <Text fontSize="xl">Kiran Suresh</Text>
              </Flex>
            </Box>
            <Box>
              <Flex justify="center" align="center" direction="column">
                <Avatar
                  size="2xl"
                  name="Segun Adebayo"
                  src="https://i.imgur.com/HkLY72h.jpg"
                />
                <Text fontSize="xl">Tony Xin</Text>
              </Flex>
            </Box>
            <Box>
              <Flex justify="center" align="center" direction="column">
                <Avatar
                  size="2xl"
                  name="Segun Adebayo"
                  src="https://www.ocf.berkeley.edu/~launchpad/media/uploads/profile_pictures/1424_38a2gea.jpeg"
                />
                <Text fontSize="xl">Annie Lee</Text>
              </Flex>
            </Box>
            <Box>
              <Flex justify="center" align="center" direction="column">
                <Avatar
                  size="2xl"
                  name="Segun Adebayo"
                  src="https://www.ocf.berkeley.edu/~launchpad/media/uploads/profile_pictures/1844.jpg"
                />
                <Text fontSize="xl">Chloe Wong</Text>
              </Flex>
            </Box>
            <Box>
              <Flex justify="center" align="center" direction="column">
                <Avatar
                  size="2xl"
                  name="Segun Adebayo"
                  src="https://www.ocf.berkeley.edu/~launchpad/media/uploads/profile_pictures/1804.jpeg"
                />
                <Text fontSize="xl">Sebastian Zhao</Text>
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </Center>
    </>
  );
}
