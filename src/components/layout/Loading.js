import React from "react";
import { ActivityIndicator } from "react-native";
import { Center, Container, Heading, HStack } from "native-base";

const Loading = () => {
  return (
    <Center>
      <Container>
        <HStack mx="25%" pt="5" space="4" width="100%">
          <ActivityIndicator />
          <Heading fontSize={18}>Loading results</Heading>
        </HStack>
      </Container>
    </Center>
  );
};

export default Loading;
