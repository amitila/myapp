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

const CardProfile = ({ name, uri }) => {
  return (
    <Box alignItems="center">
      <Box
        style={styles.box}
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
                uri: uri ? uri : "https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/273394924_1777734582617651_8343890262031318766_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=sSc6OS9EkUQAX_CB64W&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfCKhr-sJQi29nnrrDjpETB4UEhNXbjZm3s63GiePFI3Nw&oe=641B841F",
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
            {name}
          </Center>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              {name} Profile
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
              This is some information of {name}
            </Text>
          </Stack>
          <Text fontWeight="400">
            Welcome to {name} Profile
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

const CardList = ({people}) => {
  people = [
    {
      name: 'Ami',
      uri: "https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/302429277_1705158236530083_2778884477716421616_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=jJnpXimwTbIAX_lGQiT&_nc_ht=scontent.fsgn2-3.fna&oh=00_AfDa2sAVTmaP0PgWMA4on3ohLvia1phUSkgwmJ-pQDSVNw&oe=641B3057"
    },
    {
      name: 'Ngoc Son',
      uri: "https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/273394924_1777734582617651_8343890262031318766_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=sSc6OS9EkUQAX_CB64W&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfCKhr-sJQi29nnrrDjpETB4UEhNXbjZm3s63GiePFI3Nw&oe=641B841F"
    },
    {
      name: 'Thuy Tien',
      uri: "https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/275748751_3167461046862823_8126194687889844356_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=x00JAqQ2R5cAX_51iYL&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfC6Y8Eszz_pFNmkxCQGH9__1WXu8nWDGc92W0GpFBDyDA&oe=641B4763"
    },
    {
      name: 'Nhat Trang',
      uri: "https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/329602626_1236234433636457_3162120989437559236_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=4XZbUYJPQ70AX9aQqb1&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfD0lN2CCmUSOR4R2VJXfhrDX50cdriY24l95zHvUkRmsw&oe=641C38A9"
    },
    {
      name: "Viet Ha",
      uri: "https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/335288023_911868576699896_6323009427604021691_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=4aI3wyuuI6sAX8HZL40&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfAjjvFAQgeQDNRc9tv1PFPSK-G1LDBub4RagIiXxqg5vQ&oe=641B8FB6"
    },
    {
      name: "Duong Long",
      uri: "https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/326723412_581449600663384_8010127557279504353_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=8zjR10PJDKUAX_iRDOI&_nc_ht=scontent.fsgn2-3.fna&oh=00_AfB5v7f7NmL5Bno5uRAVoCSF77hyh-KLphxcXCjR-Rz1Vg&oe=641C267E"
    },
    {
      name: "Dieu Hien",
      uri: "https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.6435-9/164801823_2993126470920256_3843280488950000021_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Oru2rWqs5QYAX_mCFR5&_nc_ht=scontent.fsgn2-3.fna&oh=00_AfCW-6p5skFoCeSuGdjSvdCehhLQUsj09Fxd9_vsonA-iw&oe=643DEE35"
    },
    {
      name: "Ngoc Duy",
      uri: "https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/315848267_916000032703280_2203319055626933534_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=DP_dwyGJpDUAX8kp07B&_nc_oc=AQm7_EsQ1cQSv2uBsrgwlBOyHjsdIhsXWxAHwFFRG0ArEuxkiwVK-iNynl3pyW7kIdNDSkiTPNnNIKNsogYkuAgK&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfAMAKscIyAHCWlL8nC1PIOI-dBj-7weY09bMtcg3W-tug&oe=641ACC19"
    }
  ]
  let list = []
  for (const person of people) {
    list.push(<CardProfile key={person.name} name={person.name} uri={person.uri}/>)
  }
  return list
}

export default function FeedScreen({ navigation }) {
  return (
    <NativeBaseProvider style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Center flex={1} px="3">
          <CardList />
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
  box: {
    margin: 5
  },
  scrollView: {
    marginHorizontal: 10,
    margin: 5
  },
  text: {
    fontSize: 42,
  },
});
