import React from "react";
import { Center, Container, Heading, HStack } from "native-base";

const InitiateSearch = () => {
  return (
    <Center>
      <Container>
        <HStack mx="25%" pt="5" space="4" width="100%">
          <Heading fontSize={18}>Please initiate a search</Heading>
        </HStack>
      </Container>
    </Center>
  );
};

export default InitiateSearch;
