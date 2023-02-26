import * as React from 'react';
import { View, Button, Image, Text, StyleSheet } from 'react-native';

function ProfileScreen() {
  return (
    <View style={styles.container}>
        <Text>This is my Profile</Text>
        <Image 
            source = {require('../assets/image/ami_logo.jpg')} 
            style={{width: 300, height: 300}}
        />
        <Image
            source={{uri: 'assets:/image/ami_logo.jpg'}}
            style={{width: 100, height: 100}}
        />
    </View>
  );
}

export default ProfileScreen;

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
        textAlign: 'center',
        margin: 20
	},

});