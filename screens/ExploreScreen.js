import React, { useState, useRef } from "react";
import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
  Center,
  HStack,
  Stack,
  NativeBaseProvider,
} from "native-base";
import { StyleSheet, SafeAreaView, ScrollView, StatusBar } from "react-native";

const Example = () => {
  return (
    <Box alignItems="center">
      <Box
        maxW="80"
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
        _dark={{
          borderColor: "coolGray.600",
          backgroundColor: "gray.700",
        }}
        _web={{
          shadow: 2,
          borderWidth: 0,
        }}
        _light={{
          backgroundColor: "gray.50",
        }}
      >
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image
              source={{
                uri: "https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/275364962_1577594732619768_8909212789442935939_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=e3f864&_nc_ohc=2G0ciOlfQq8AX8OWj3v&_nc_oc=AQlH4-CCv_8tPfqxrSAB9I8GryfO9uN0RoIsf6nyRz_6Y8bMCRvn8FCwZHnP5OY33sjP4BktTot5HHX2aPXKYOCQ&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfBmOnhYLzeh6qkW2wM5ewkBurk2KNFCVefnTpYzgiJtUQ&oe=64024CB1",
              }}
              alt="image"
            />
          </AspectRatio>
          <Center
            bg="violet.500"
            _dark={{
              bg: "violet.400",
            }}
            _text={{
              color: "warmGray.50",
              fontWeight: "700",
              fontSize: "xs",
            }}
            position="absolute"
            bottom="0"
            px="3"
            py="1.5"
          >
            AMI
          </Center>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              Ami Profile
            </Heading>
            <Text
              fontSize="xs"
              _light={{
                color: "violet.500",
              }}
              _dark={{
                color: "violet.400",
              }}
              fontWeight="500"
              ml="-0.5"
              mt="-1"
            >
              This is some information of mine
            </Text>
          </Stack>
          <Text fontWeight="400">
            Welcome to Ami Profile
          </Text>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text
                color="coolGray.600"
                _dark={{
                  color: "warmGray.200",
                }}
                fontWeight="400"
              >
                6 mins ago
              </Text>
            </HStack>
          </HStack>
        </Stack>
      </Box>
    </Box>
  );
};

export default function FeedScreen({ navigation }) {
  return (
    <NativeBaseProvider>
      <ScrollView style={styles.scrollView}>
        <Center flex={1} px="3">
          <Example />
          <Example />
          <Example />
        </Center>
      </ScrollView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});
