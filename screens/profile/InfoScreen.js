import * as React from "react";
import {
  View,
  Button,
  Image,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  TextInput,
  Alert,
} from "react-native";
import { Avatar } from "react-native-elements";
import * as Animatable from "react-native-animatable";

function InfoScreen() {
  let fullname = "Ami Neko"
  let name = "Amiko"

  return <View style={styles.container}>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <ScrollView>
          <Text style={styles.text_footer}>Avatar</Text>
          <View style={styles.avatar}>
            <Avatar
              size="xlarge"
              rounded
              source={{
                uri: "https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/302429277_1705158236530083_2778884477716421616_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=jJnpXimwTbIAX_lGQiT&_nc_ht=scontent.fsgn2-3.fna&oh=00_AfDa2sAVTmaP0PgWMA4on3ohLvia1phUSkgwmJ-pQDSVNw&oe=641B3057",
              }}
              onPress={() => Alert.alert("Avatar")}
            />
            <Text style={{ marginVertical: 20, fontSize: 16 }}>
              Hello, Amiko
            </Text>
          </View>

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}
          >
            Full Name
          </Text>
          <View style={styles.action}>
            <TextInput
              placeholder="Full name"
              value={fullname}
              style={styles.textInput}
              autoCapitalize="none"
              // onChangeText={(val) => setData({
              //   ...data,
              //   firstName: val
              // })}
            />
          </View>

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}
          >
            Name
          </Text>
          <View style={styles.action}>
            <TextInput
              placeholder="Name"
              value={name}
              style={styles.textInput}
              autoCapitalize="none"
              // onChangeText={(val) => setData({
              //   ...data,
              //   lastName: val
              // })}
            />
          </View>

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}
          >
            Images
          </Text>
          <View style={styles.action}>
            <Image 
              source = {require('../../assets/image/ami_logo.jpg')} 
              style={{width: 300, height: 300}}
            />
          </View>
        </ScrollView>
      </Animatable.View>
    </View>
}

export default InfoScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    textAlign: "center",
    margin: 10,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  avatar: {
    flexDirection: "column",
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
    justifyContent: "center",
    alignItems: "center",
    padding: 50,
  },
});
