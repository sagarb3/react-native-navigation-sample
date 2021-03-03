import React, { useState } from 'react';
import { View, Button, Text, StyleSheet, Alert, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Permissions } from 'react-native-unimodules';

const ImgPicker = (props: any) => {
    const [pickedImage, setPickedImage] = useState();
    const verifyPermission = async () => {
        const result = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (result.status !== "granted") {
            Alert.alert('Insufficient permission', 'You need camera permissions', [{
                text: 'Okay'
            }])
            return false;
        }
        return true;
    }
    const takeImage = async () => {
        const hasPermission = await verifyPermission();
        if (!hasPermission) {
            return;
        }
        const image:any = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.5
        });
        //console.log(image.uri);
        setPickedImage(image.uri)
    }
    return <View style={styles.imagePicker}>
        <View style={styles.imagePreview}>
            {!pickedImage ? (
                <Text>No image picked yet.</Text>
            ) : (
                    <Image style={styles.image} source={{ uri: pickedImage }} />
                )}
        </View>
        <Button title="Take Image" color="teal" onPress={takeImage}
         
        />
    </View>
}

const styles = StyleSheet.create({
    imagePicker: {
        alignItems: 'center',
        marginBottom: 15,
        width:'80%'
    },
    imagePreview: {
        width: '100%',
        height: 200,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ccc',
        borderWidth: 1,
        flexShrink:0
    },
    image: {
        width: '100%',
        height: '100%'
    }
})

export default ImgPicker;