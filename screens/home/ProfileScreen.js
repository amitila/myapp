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

function ProfileScreen({ navigation }) {
  let fullname = "Ami Neko"
  let name = "Amiko"

  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <ScrollView>
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

          <View style={styles.card}>
            <Button
              title="Ami Info"
              onPress={() => navigation.navigate("Info")}
            />
          </View>
          <View style={styles.card}>
            <Button
              title="Ami Image"
              onPress={() => navigation.navigate("Image")}
            />
          </View>
          <View style={styles.card}>
            <Button
              title="Ami Documentation"
              onPress={() => navigation.navigate("Documentation")}
            />
          </View>
          <View style={styles.card}>
            <Button
              title="Ami Travel"
              onPress={() => navigation.navigate("Travel")}
            />
          </View>
          <View style={styles.card}>
            <Button
              title="Ami Language"
              onPress={() => navigation.navigate("Language")}
            />
          </View>
        </ScrollView>
      </Animatable.View>
    </View>
  );
}

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    textAlign: "center",
    margin: 10,
  },
  card: {
    flex: 1, 
    justifyContent: "center", 
    margin:5,
    backgroundColor: "#f2f2f2"
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
